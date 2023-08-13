<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    // notification
    public function index()
    {
        $notifications = Notification::get();
        return $notifications;
    }  
}
