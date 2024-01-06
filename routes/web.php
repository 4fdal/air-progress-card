<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\IdentityCardController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);

    // return Inertia::render('Index', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
// });


Route::get('/', [LandingController::class, 'index'])->name('index');


Route::prefix('/account')->as('account.')->group(function(){
    Route::get('register', [AccountController::class, 'registerIndex'])->name('register.index');
    Route::post('register', [AccountController::class, 'register'])->name('register');

    Route::middleware('auth:web')->group(function(){
        Route::get('identity-card', [IdentityCardController::class, 'create'])->name('identity-card.create');
        Route::post('identity-card', [IdentityCardController::class, 'store'])->name('identity-card.store');

        Route::get('payment', [PaymentController::class, 'create'])->name('payment.create');
        Route::post('payment', [PaymentController::class, 'store'])->name('payment.store');
    });
    
});

Route::get('/account/create/step_1', function () {
    return Inertia::render('CreateAccount/Step1', []);
});

Route::get('/account/create/step_2', function () {
    return Inertia::render('CreateAccount/Step2', []);
});

Route::get('/account/create/step_3', function () {
    return Inertia::render('CreateAccount/Step3', []);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
