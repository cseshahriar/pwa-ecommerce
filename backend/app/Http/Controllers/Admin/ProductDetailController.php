<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductDetail;

class ProductDetailController extends Controller
{
    // get details by id
    public function index(Request $request)
    {
        $id = $request->id;
        $product = Product::where('id', $id)->get();
        $product_details = ProductDetail::where('product_id', $id)->get();
        // associative array
        $data = [ 
            'product' => $product,
            'details' => $product_details
        ];
        return $data;
    }
}
