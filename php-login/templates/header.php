<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= isset($title) ? e($title) : 'Login System' ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-50 text-gray-800 antialiased min-h-screen flex flex-col">
    <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <a href="/" class="flex-shrink-0 flex items-center text-xl font-bold text-indigo-600">
                        AuthSystem
                    </a>
                </div>
                <div class="flex items-center">
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <?php if (isset($_SESSION['role_id']) && $_SESSION['role_id'] == 1): ?>
                            <a href="/admin/dashboard.php" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Admin</a>
                        <?php endif; ?>
                        <a href="/dashboard.php" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                        <span class="text-gray-500 px-3 py-2 text-sm">Hello, <?= e($_SESSION['username'] ?? 'User') ?></span>
                        <a href="/logout.php" class="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Logout</a>
                    <?php else: ?>
                        <!-- 隐藏 top menu bar -->
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </nav>
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
