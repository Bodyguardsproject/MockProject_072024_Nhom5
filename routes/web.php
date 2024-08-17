<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/', function () {
        return view('welcome');
    })->name('dashboard');
});

Route::group(['prefix' => 'admin'], function() {
    Route::get('/', function () {
        return view('admin.dashboard');
    });

    Route::resource('services', ServiceController::class);
});
