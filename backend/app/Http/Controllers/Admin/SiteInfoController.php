<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\SiteInfo;

class SiteInfoController extends Controller
{
    // return site info
       // create Visit
       public function getSiteInfo()
       {
            $siteInfo = SiteInfo::first();
            return response()->json([
               'success' => true,
               'message' => 'Visitor details fetched successfully',
               'data' => $siteInfo,
            ]);
       }  
}
