<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests\ForgetRequest;
use Illuminate\Support\Facades\Hash;
use App\Mail\ForgetMail;

use DB;
use Mail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request){
    	$email = $request->email;

    	if (User::where('email',$email)->doesntExist()) {
    		return response([
    			'message' => 'Email Invalid'
    		],401);
    	}

    	// generate Radome Token 
    	$token = rand(10,100000);

    	try{
    		DB::table('password_reset_tokens')->insert([
    			'email' => $email,
    			'token' => $token
    		]);

    		// Mail Send to User 
    		Mail::to($email)->send(new ForgetMail($token));

    		return response([
    			'message' => 'Reset Password Mail send on your email'
    		],200);

    	}catch(Exception $exception){
    		return response([
    			'message' => $exception->getMessage()
    		],400);
    	}
    } // end method
}
 