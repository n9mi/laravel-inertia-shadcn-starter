<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
})->name('home');

require __DIR__.'/auth.php';
require __DIR__.'/general.php';
require __DIR__.'/admin.php';
require __DIR__.'/user.php';
