<?php

use Illuminate\Support\Facades\Session;

if (!function_exists('toast')) {
    function toast($type = 'success', $message = '', $description = '')
    {
        Session::flash('toast', compact('type', 'message', 'description'));
    }
}
