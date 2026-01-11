<?php
require __DIR__ . '/../../src/bootstrap.php';

use Src\Auth\Auth;

$auth = new Auth();
if (!$auth->check()) {
    redirect('/login.php');
}

$user = $auth->user();

// Admin Check
if ($user['role_id'] != 1) {
    // Not authorized
    http_response_code(403);
    echo "<h1>403 Forbidden</h1><p>无权限登录.</p><a href='/dashboard.php'>返回</a>";
    exit;
}

$title = 'Admin Dashboard';
include __DIR__ . '/../../templates/header.php';
?>

<div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-6">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-indigo-900 sm:text-3xl sm:truncate">
                Dashboard
            </h2>
            <p class="mt-1 text-sm text-gray-500">用户管理</p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- User Management Card -->
        <a href="/admin/users.php" class="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white shadow-sm transition">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">User Management</h5>
            <p class="font-normal text-gray-700">View, edit, or delete registered users. Monitor login activity.</p>
        </a>
        
        <!-- System Logs Card -->
        <a href="#" class="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white shadow-sm transition opacity-50 cursor-not-allowed">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">System Logs (Coming Soon)</h5>
            <p class="font-normal text-gray-700">Audit system performance and error logs.</p>
        </a>
    </div>
</div>

<?php include __DIR__ . '/../../templates/footer.php'; ?>
