<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;

class SliderController extends Controller
{
    // get home slider
    public function index()
    {

        $sliders = Slider::where('type', "home")->get();
        return $sliders;
    }  
}