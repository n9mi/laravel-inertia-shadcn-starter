<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display all the tickets
     */
    public function index() {
        return inertia('Admin/Tickets');
    }
}
