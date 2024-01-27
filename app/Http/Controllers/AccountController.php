<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function registerIndex()
    {
        return Inertia::render('CreateAccount/Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            // 'birth_day' => ['nullable', 'date_format:Y-m-d'],
            'phone' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'username' => ['required', 'string', 'unique:users,username'],
            'password' => ['required', 'min:6']
        ]);


        $user = User::create($request->only(['name', 'birth_day', 'phone', 'email', 'username', 'password']));

        Auth::login($user);

        toast("info", "Success create account, next please insert your card identity");

        return redirect()->route('account.identity-card.create');
    }
}
