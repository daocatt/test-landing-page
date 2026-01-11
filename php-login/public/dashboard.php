<?php
require __DIR__ . '/../src/bootstrap.php';

use Src\Auth\Auth;

$auth = new Auth();
if (!$auth->check()) {
    redirect('/login.php');
}

$user = $auth->user();

$title = 'Dashboard';
include __DIR__ . '/../templates/header.php';
?>

<div class="max-w-7xl mx-auto">
    <div class="md:flex md:items-center md:justify-between mb-6">
        <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Welcome back, <?= e($user['username']) ?>!
            </h2>
        </div>
    </div>

    <!-- Stats / Info -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">Account Type</dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900"><?= e(ucfirst($user['role_name'])) ?></dd>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">Last Login</dt>
                <dd class="mt-1 text-lg font-semibold text-gray-900"><?= e($user['last_login_at'] ?? 'Never') ?></dd>
                <dd class="text-xs text-gray-500">From IP: <?= e($user['last_login_ip'] ?? 'Unknown') ?></dd>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">Member Since</dt>
                <dd class="mt-1 text-lg font-semibold text-gray-900"><?= e(date('F j, Y', strtotime($user['created_at']))) ?></dd>
            </div>
        </div>
    </div>
    
    <!-- Recent Activity -->
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Login Activity</h3>
        </div>
        <ul class="divide-y divide-gray-200">
             <?php
             // Simple fetch for recent logs
             $pdo = \Src\Utils\Database::getInstance();
             $stmt = $pdo->prepare("SELECT * FROM activity_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 5");
             $stmt->execute([$user['id']]);
             $logs = $stmt->fetchAll();
             
             if (count($logs) === 0) {
                 echo '<li class="px-4 py-4 text-sm text-gray-500">No recent activity.</li>';
             }

             foreach ($logs as $log): ?>
                <li class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-indigo-600 truncate"><?= e(ucfirst($log['action'])) ?></p>
                        <div class="ml-2 flex-shrink-0 flex">
                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Success
                            </p>
                        </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                        <div class="sm:flex">
                            <p class="flex items-center text-sm text-gray-500">
                                <?= e($log['details']) ?>
                            </p>
                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                IP: <?= e($log['ip_address']) ?>
                            </p>
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p><?= e($log['created_at']) ?></p>
                        </div>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<?php include __DIR__ . '/../templates/footer.php'; ?>
