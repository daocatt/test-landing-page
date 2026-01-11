<?php
require __DIR__ . '/../src/bootstrap.php';

use Src\Auth\Auth;

$auth = new Auth();
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf_token'])) {
        $error = "Invalid CSRF Token";
    } else {
        if ($auth->login($_POST['identity'], $_POST['password'])) {
            // Redirect based on role
            // 1 = admin, 2 = user (as defined in init.sql)
            if ($_SESSION['role_id'] == 1) {
                redirect('/admin/dashboard.php');
            } else {
                redirect('/dashboard.php');
            }
        } else {
            $error = "Invalid credentials.";
        }
    }
}

$title = 'Login';
include __DIR__ . '/../templates/header.php';
?>

<div class="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
    <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
    
    <?php if ($error): ?>
        <div class="bg-red-50 text-red-700 p-4 rounded mb-4 text-sm"><?= e($error) ?></div>
    <?php endif; ?>

    <form method="POST" action="" class="space-y-4">
        <?= csrf_field() ?>
        
        <div>
            <label class="block text-sm font-medium text-gray-700">Email, Phone, or Username</label>
            <input type="text" name="identity" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            
            <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
        </div>

        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign In
        </button>
        
        <div class="mt-4">
             <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3">
                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    GitHub (Demo)
                </a>
                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    Google (Demo)
                </a>
            </div>
        </div>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? <a href="/register.php" class="font-medium text-indigo-600 hover:text-indigo-500">Register</a>
    </p>
</div>

<?php include __DIR__ . '/../templates/footer.php'; ?>
