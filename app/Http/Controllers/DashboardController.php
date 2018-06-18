<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {

        $headers = ['X-Api-Key' => 'b4cf-014e-c91278-376019-69ddfefe'];

        return view('dashboard');

    }
}
