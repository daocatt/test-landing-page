<?php
namespace Src\Utils;

class Logger {
    public static function log($userId, $action, $details = null) {
        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("INSERT INTO activity_logs (user_id, action, details, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $userId, 
            $action, 
            $details, 
            get_remote_ip(), 
            $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
        ]);
    }
}
