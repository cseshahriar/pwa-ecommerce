<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // createContact
    public function createContact(Request $request) {
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');
        $contact_date = $request->input('contact_date');
        $contact_time = $request->input('contact_time');

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
