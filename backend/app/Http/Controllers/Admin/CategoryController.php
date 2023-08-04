<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // return category list
    public function index() {
        $categories = Category::all();
        return $categories;

    }
}
