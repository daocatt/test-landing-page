<?php
require __DIR__ . '/../src/bootstrap.php';

use Src\Auth\Auth;

$auth = new Auth();
$error = '';
$success = '';

// 模拟验证码
// if (isset($_POST['action']) && $_POST['action'] === 'send_code') {
//     $code = $auth->generateCode();
//     $info = "Your verification code is: $code";
// }

// Handle Registration
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {

    //验证code
    // if (!$auth->verifyCode($_POST['code'] ?? '')) {
    //     $error = "Invalid Verification Code";
    // } else {}

    if (!verify_csrf($_POST['csrf_token'])) {
        $error = "Invalid CSRF Token";
    } else {

        $result = $auth->register([
            'email' => $_POST['email'],
            'phone' => $_POST['phone'],
            'password' => $_POST['password']
        ]);

        if ($result['status']) {
            $success = "Registration successful! You can now login.";
            unset($_SESSION['verification_code']);
        } else {
            $error = $result['message'];
        }

    }
}

$title = 'Register';
include __DIR__ . '/../templates/header.php';
?>

<div class="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
    <h2 class="text-2xl font-bold mb-6 text-center">Registration</h2>
    
    <?php if ($error): ?>
        <div class="bg-red-50 text-red-700 p-4 rounded mb-4 text-sm"><?= e($error) ?></div>
    <?php endif; ?>
    <?php if ($success): ?>
        <div class="bg-green-50 text-green-700 p-4 rounded mb-4 text-sm">
            <?= e($success) ?> 
            <a href="/login.php" class="font-bold underline">Login here</a>
        </div>
    <?php endif; ?>

    <?php if (isset($info)): ?>
        <div class="bg-blue-50 text-blue-700 p-4 rounded mb-4 text-sm font-mono border border-blue-200">
            <?= e($info) ?>
        </div>
    <?php endif; ?>

    <form method="POST" action="" class="space-y-4">
        <?= csrf_field() ?>
        
        <!-- Step 1: Info -->
        <div>
            <label class="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>

        <div>
           <label class="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="text" name="phone" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        
        <!-- Verification Code Section -->
        <div>
            <label class="block text-sm font-medium text-gray-700">Verification Code</label>
            <div class="flex gap-2">
                <input type="text" name="code" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter code">
                <button type="button" name="action" value="send_code" onclick="sendCode()" class="mt-1 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    Get Code
                </button>
            </div>
            <p class="text-xs text-gray-500 mt-1">Click "Get Code" to simulate receiving an SMS/Email.</p>
        </div>

        <button type="submit" name="register" value="true" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
        </button>
    </form>
    
     <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account? <a href="/login.php" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
    </p>
</div>

<script>
    function sendCode() {
        alert("验证码测试，请填写1234!");
    }
</script>

<?php include __DIR__ . '/../templates/footer.php'; ?>
