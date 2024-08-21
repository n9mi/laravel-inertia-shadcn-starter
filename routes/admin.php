<?php

use App\Http\Controllers\Admin\TicketController;
use Illuminate\Support\Facades\Route;

Route::group([
            'prefix' => 'admin',
            'as' => 'admin.',
            'middleware' => ['auth', 'role-check:admin']],
    function () {
        Route::get('/tickets', [ TicketController::class, 'index' ])->name('tickets');
    });
