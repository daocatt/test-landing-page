<?php
require __DIR__ . '/../src/bootstrap.php';
use Src\Utils\Database;

$pdo = Database::getInstance();
$password = 'admin';
$hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("UPDATE users SET password_hash = ? WHERE username = 'admin'");
$stmt->execute([$hash]);

echo "Admin password reset to 'admin'. Hash: " . $hash . "\n";
