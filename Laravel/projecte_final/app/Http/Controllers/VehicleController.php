<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Vehicle;

class VehicleController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Vehicles

    function getVehicles()
    {
        //return Vehicle::all();
        return Vehicle::with('vehicle')->get();
    }

    function getVehicle($id)
    {
        return Vehicle::find($id);
    }

    function updateVehicle(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $vehicle = Vehicle::find($id);
        $vehicle->update($request->all());

        return $vehicle;
    }

    function insertVehicle(Request $request)
    {
        return Vehicle::create($request->all());
    }

    function deleteVehicle($id)
    {
        $vehicle = Vehicle::find($id);
        $vehicle->delete();

        return $vehicle;
    }
}
