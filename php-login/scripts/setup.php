<?php
require __DIR__ . '/../src/bootstrap.php';

use Src\Utils\Database;

try {
    Database::init();
    echo "Database Initialized Successfully.\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
