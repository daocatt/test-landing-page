<?php
namespace Src\Auth;

use Src\Utils\Database;
use Src\Utils\Logger;
use PDO;

class Auth {
    public function login($identifier, $password) {
        $pdo = Database::getInstance();
        $column = '';

        if ($this->isEmail($identifier)) {
            $column = 'email';
        } elseif ($this->isPhone($identifier)) {
            $column = 'phone';
        } elseif ($this->isUsername($identifier)) {
            $column = 'username';
        }

        if (empty($column)) {
            return false;
        }

        $stmt = $pdo->prepare("SELECT * FROM users WHERE $column = ? LIMIT 1");
        $stmt->execute([$identifier]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password_hash'])) {
            // success
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role_id'] = $user['role_id'];
            
            // Update last login
            $update = $pdo->prepare("UPDATE users SET last_login_at = CURRENT_TIMESTAMP, last_login_ip = ? WHERE id = ?");
            $update->execute([get_remote_ip(), $user['id']]);

            // create Session Record
            $token = bin2hex(random_bytes(32));
            $_SESSION['session_token'] = $token;
            
            $sess = $pdo->prepare("INSERT INTO user_sessions (user_id, session_token, ip_address, user_agent) VALUES (?, ?, ?, ?)");
            $sess->execute([$user['id'], $token, get_remote_ip(), $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown']);

            // create logs
            Logger::log($user['id'], 'login', "User logged in via $column");
            return true;
        }

        return false;
    }

    public function register($data) {
        $pdo = Database::getInstance();
        
        $email = $data['email'] ?? null;
        $phone = $data['phone'] ?? null;
        $checks = [];
        $checkParams = [];

        // Validate and Prepare Duplicate Check
        if (!empty($email)) {
            if (!$this->isEmail($email)) {
                return ['status' => false, 'message' => 'Invalid email format'];
            }
            $checks[] = "email = ?";
            $checkParams[] = $email;
        } else {
            $email = null; // Ensure null for DB insertion if empty string
        }

        if (!empty($phone)) {
            if (!$this->isPhone($phone)) {
                return ['status' => false, 'message' => 'Invalid phone format'];
            }
            $checks[] = "phone = ?";
            $checkParams[] = $phone;
        } else {
            $phone = null; // Ensure null for DB insertion if empty string
        }

        if (empty($checks)) {
            return ['status' => false, 'message' => 'Email or Phone is required'];
        }

        $stmt = $pdo->prepare("SELECT id FROM users WHERE " . implode(' OR ', $checks));
        $stmt->execute($checkParams);
        if ($stmt->fetch()) {
             return ['status' => false, 'message' => 'User already exists'];
        }

        // Hash Password
        $hash = password_hash($data['password'], PASSWORD_DEFAULT); // Salt is automatic

        try {
            $stmt = $pdo->prepare("INSERT INTO users (username, email, phone, password_hash, role_id) VALUES (?, ?, ?, ?, ?)");
            // If username not provided, use email or phone
            $username = $data['username'] ?? ($email ?? $phone);
            
            $stmt->execute([$username, $email, $phone, $hash, 2]); // Role 2 = user
            
            $newId = $pdo->lastInsertId();
            Logger::log($newId, 'register', 'New user registered');
            
            return ['status' => true];
        } catch (\PDOException $e) {
            return ['status' => false, 'message' => $e->getMessage()];
        }
    }

    public function check() {
        return isset($_SESSION['user_id']);
    }

    public function user() {
        if (!$this->check()) return null;
        
        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("SELECT u.*, r.name as role_name FROM users u JOIN roles r ON u.role_id = r.id WHERE u.id = ?");
        $stmt->execute([$_SESSION['user_id']]);
        return $stmt->fetch();
    }

    public function logout() {
        if ($this->check()) {
            Logger::log($_SESSION['user_id'], 'logout');
            // Remove session from DB ? Optional but good
            if (isset($_SESSION['session_token'])) {
                 $pdo = Database::getInstance();
                 $pdo->prepare("DELETE FROM user_sessions WHERE session_token = ?")->execute([$_SESSION['session_token']]);
            }
        }
        session_destroy();
    }

    public function verifyCode($code) {
        // Simulation
        if (!isset($_SESSION['verification_code'])) return false;
        return (string)$code === (string)$_SESSION['verification_code'];
    }
    
    public function generateCode() {
        $code = rand(100000, 999999);
        $_SESSION['verification_code'] = $code;
        return $code;
    }

    private function isEmail($identifier) {
        return filter_var($identifier, FILTER_VALIDATE_EMAIL) !== false;
    }

    private function isPhone($identifier) {
        return preg_match('/^1[3-9]\d{9}$/', $identifier) === 1;
    }

    private function isUsername($identifier) {
        return ctype_alnum($identifier);
    }
}
