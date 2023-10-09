<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProductDetailController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\NotificationController;
// client user
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\UserController;

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


// get site info
Route::get(
    '/site-info', 
    [SiteInfoController::class, 'getSiteInfo']
)->name('siteinfo.getSiteInfo');

// get site info
Route::get(
    '/categories',
    [CategoryController::class, 'index']
)->name('categories.index');

// get products
Route::get(
    '/products',
    [ProductController::class, 'index']
)->name('products.index');

// get product by remarks
Route::get(
    '/products/remark/{remarks}',
    [ProductController::class, 'productByRemark']
)->name('products.remarks');

// get product by category
Route::get(
    '/products/category/{category}',
    [ProductController::class, 'productByCategory']
)->name('products.category');

// get product by category
Route::get(
    '/products/subcategory/{category}/{subcategory}',
    [ProductController::class, 'productBySubCategory']
)->name('products.subcategory');

// search route 
Route::get('/search/{key}', [ProductController::class, 'ProductBySearch']);

// get product details
Route::get(
    '/product_details/{id}',
    [ProductDetailController::class, 'index']
)->name('product_details.index');

// get slider
Route::get(
    '/sliders/home',
    [SliderController::class, 'index']
)->name('sliders.index');

// get notification
Route::get(
    '/notifications',
    [NotificationController::class, 'index']
)->name('notifications.index');

// use authentication
Route::post('/login', [AuthController::class, 'Login']);
Route::post('/register', [AuthController::class, 'Register']);
Route::post('/forgetpassword', [ForgetController::class, 'ForgetPasswrd']);
Route::post('/resetpassword', [ResetController::class, 'ResetPasswrd']);
Route::post('/user', [UserController::class, 'user'])->middleware('auth:api');