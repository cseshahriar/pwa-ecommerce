<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Visitor;

class VisitorController extends Controller
{
    // return visitor details
    public function getVisitorDetails()
    {
        date_default_timezone_set('Asia/Dhaka');
        $ip = $ip_address = $_SERVER['REMOTE_ADDR'];
        $time = date('h:i:sa');
        $date = date('Y-m-d');

        $visitor = Visitor::create([
            'ip_address' => $ip,
            'visit_time' => $time,
            'visit_date' => $date,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Visitor details fetched successfully',
            'data' => $visitor,
        ]);
    }  // end getVisitorDetails method
}
