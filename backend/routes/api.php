<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;

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