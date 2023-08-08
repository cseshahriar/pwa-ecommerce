<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // get product list
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    public function productByRemark(Request $request)
    {
        $remarks = $request->remarks;
        $products = Product::where('remark', $remarks)->get();
        return $products;
    }

    public function productByCategory(Request $request)
    {
        $category = $request->category;
        $products = Product::where('category', $category)->get();
        return $products;
    }
    
    public function productBySubCategory(Request $request)
    {
            $category = $request->category;
            $subcategory = $request->subcategory;
            $products = Product::where('category', $category)->where('subcategory', $subcategory)->get();
            return $products;
    }
}
