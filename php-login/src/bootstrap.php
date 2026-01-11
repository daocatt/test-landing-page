<?php
session_start();

//namespace autoloader
spl_autoload_register(function ($class) {
    $prefix = 'Src\\';
    
    $base_dir = __DIR__ . '/';
    
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    
    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';
    
    if (file_exists($file)) {
        require $file;
    }
});

// config load
$appConfig = require __DIR__ . '/../config/app.php';

// htmlspecialchars
function e($string) {
    return htmlspecialchars($string ?? '', ENT_QUOTES, 'UTF-8');
}

// redirect
function redirect($path) {
    header("Location: $path");
    exit;
}

function csrf_token() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function csrf_field() {
    return '<input type="hidden" name="csrf_token" value="' . csrf_token() . '">';
}

function verify_csrf($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

function get_remote_ip() {
    return $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
}

function url($path = '') {
    // Simple helper assuming relative root
    // In production, might need base_url from config
    return '/' . ltrim($path, '/');
}
