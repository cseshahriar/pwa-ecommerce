<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// make visitor 
Route::get(
    '/visitor/create', 
    [VisitorController::class, 'createVisit']
)->name('visitors.createVisit');


// make contact
Route::post(
    '/contact/create', 
    [ContactController::class, 'createContact']
)->name('contacts.createContact');