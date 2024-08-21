<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    /**
     * Display this user requests
     */
    public function index() {
        return inertia('User/Requests');
    }
}
