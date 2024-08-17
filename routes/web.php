<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\HomeController;

// Route cho trang chủ
Route::get('/', [HomeController::class, 'index'])->name('home');

// Route cho các trang yêu cầu xác thực
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

// Nhóm route cho quản trị viên
Route::group(['prefix' => 'admin'], function() {
    Route::get('/', function () {
        return view('admin.dashboard');
    })->name('admin.dashboard');

    // Route resource cho dịch vụ
    Route::resource('services', ServiceController::class);
});

// Các route cho các trang khác
Route::get('/services', [HomeController::class, 'services'])->name('services');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/bodyguards', [HomeController::class, 'bodyguards'])->name('bodyguards');
Route::get('/jobs', [HomeController::class, 'jobs'])->name('jobs');
Route::get('/quote', [HomeController::class, 'quote'])->name('quote');
