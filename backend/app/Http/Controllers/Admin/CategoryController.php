<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Subcategory;

class CategoryController extends Controller
{
    // return category list
    public function index() {
        $category_data = [];
        $categories = Category::all();
        
        foreach($categories as $category) {
            $sub_categories = Subcategory::where(
                'category_name', $category->category_name
            )->get();

            $item = [
                'id' => $category->id,
                'category_name' => $category->category_name,
                'category_image' => $category->category_image,
                'sub_categories' => $sub_categories
            ];
            array_push($category_data, $item);

        }

        return $category_data;

    }
}
