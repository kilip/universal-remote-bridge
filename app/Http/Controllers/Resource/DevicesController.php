<?php

namespace App\Http\Controllers\Resource;

use App\Http\Controllers\Controller;
use App\Model\Devices;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DevicesController extends Controller
{
    public function index()
    {
        return response(Devices::all()->jsonSerialize(), Response::HTTP_OK);
    }
}
