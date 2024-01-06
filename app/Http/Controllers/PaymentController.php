<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function create(){
        return Inertia::render('CreateAccount/Payment');
    }

    public function store(){
        
    }
}
