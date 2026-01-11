<?php
require __DIR__ . '/../src/bootstrap.php';
$title = 'Welcome';
include __DIR__ . '/../templates/header.php';
?>

<div class="text-center py-20">
    <h1 class="text-4xl text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block">Auth</span>
    </h1>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Test system
    </p>
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">

        <?php if (!isset($_SESSION['user_id'])): ?>
            <div class="rounded-md shadow">
                <a href="/register.php" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Register
                </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/login.php" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Log In
                </a>
            </div>
        <?php else: ?>
            <div class="rounded-md shadow">
                <a href="/dashboard.php" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Go to Dashboard
                </a>
            </div>
        <?php endif; ?>

    </div>
</div>

<?php include __DIR__ . '/../templates/footer.php'; ?>
