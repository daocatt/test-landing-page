<?php
require __DIR__ . '/../../src/bootstrap.php';

use Src\Auth\Auth;
use Src\Utils\Database;

$auth = new Auth();
if (!$auth->check() || $auth->user()['role_id'] != 1) {
    redirect('/login.php');
}

$message = '';

// Handle Delete (Fake)
if (isset($_POST['delete_user_id'])) {
    if (verify_csrf($_POST['csrf_token'])) {
        // Implementation logic for delete would go here
        $message = "User ID {$_POST['delete_user_id']} delete requested (Simulation).";
    }
}

// Fetch Users
$pdo = Database::getInstance();
$stmt = $pdo->query("SELECT id, username, email, phone, role_id, last_login_at, created_at FROM users ORDER BY created_at DESC");
$users = $stmt->fetchAll();

$title = 'Manage Users';
include __DIR__ . '/../../templates/header.php';
?>

<div class="max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">Users</h2>
        <a href="/admin/dashboard.php" class="text-indigo-600 hover:text-indigo-900 font-medium">Back to Dashboard</a>
    </div>

    <?php if ($message): ?>
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span class="block sm:inline"><?= e($message) ?></span>
        </div>
    <?php endif; ?>

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <?php foreach ($users as $u): ?>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <?= e($u['id']) ?>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm font-medium text-gray-900"><?= e($u['username']) ?></div>
                                    <div class="text-xs text-gray-400">Since <?= e(date('M Y', strtotime($u['created_at']))) ?></div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900"><?= e($u['email']) ?></div>
                                    <div class="text-sm text-gray-500"><?= e($u['phone']) ?></div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full <?= $u['role_id'] == 1 ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800' ?>">
                                        <?= $u['role_id'] == 1 ? 'Admin' : 'User' ?>
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <?= e($u['last_login_at'] ?? 'Never') ?>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <form method="POST" class="inline-block" onsubmit="return confirm('Are you sure?');">
                                        <?= csrf_field() ?>
                                        <input type="hidden" name="delete_user_id" value="<?= $u['id'] ?>">
                                        <button type="submit" class="text-red-600 hover:text-red-900 ml-2">Delete</button>
                                    </form>
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900 ml-4">Edit</a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include __DIR__ . '/../../templates/footer.php'; ?>
