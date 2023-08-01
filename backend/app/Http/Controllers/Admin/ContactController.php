<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // createContact
    public function createContact(Request $request) {
        date_default_timezone_set('Asia/Dhaka');
        $contact_time = date('h:i:sa');
        $contact_date = date('Y-m-d');

        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');
    
        $contact = Contact::create([
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'contact_date' => $contact_date, 
            'contact_time' => $contact_time,
        ]);     
    
        return response()->json([
            'success' => true,
            'message' => 'Contact submitted successfully',
            'data' => $contact,
        ]);
    } // end createContact method
}
