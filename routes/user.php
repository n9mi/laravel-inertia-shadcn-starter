<?php

use App\Http\Controllers\User\RequestController;
use Illuminate\Support\Facades\Route;

Route::group([
            'prefix' => 'user',
            'as' => 'user.',
            'middleware' => ['auth', 'role-check:user']],
    function () {
        Route::get('/requests', [ RequestController::class, 'index' ])->name('requests');
    });
