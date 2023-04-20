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

    /**
     * @OA\Get(
     *      path="/api/vehicles",
     *      tags={"Vehicles"},
     *      summary="Veure totes els vehicles.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les clients."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getVehicles()
    {
        return Vehicle::with('client')->get();

    }

    /**
     * @OA\Get(
     *      path="/api/vehicle/{id}",
     *      tags={"Vehicles"},
     *      summary="Veure totes els vehicles.",
     * @OA\Parameter(
     *         description="Parameter with mutliple examples",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="string"),
     *         @OA\Examples(example="int", value="1", summary="An int value."),
     *     ),
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les clients."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getVehicle($id)
    {
        return Vehicle::with('client')->find($id);
    }

    /**
     * @OA\Post(
     *     path="/api/vehicle",
     *      tags={"Vehicles"},
     *     summary="Adds a new vehicles",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="matricula",
     *         required=true,
     *         example="1456LMH",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="marca",
     *         required=true,
     *         example="BMW",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="model",
     *         required=true,
     *         example="Serie 1",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="client_id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */

    function insertVehicle(Request $request)
    {

        $request->validate([
            'matricula' => ['required', 'max:25'],
            'marca' => ['required', 'max:25'],
            'model' => ['required', 'max:25'],
            'client_id' => ['required'],
        ]);

        return Vehicle::create([
            'matricula' => $request->matricula,
            'marca' => $request->marca,
            'model' => $request->model,
            'client_id' => $request->client_id
        ]);
    }

        /**
     * @OA\Post(
     *     path="/api/vehicle/{id}",
     *      tags={"Vehicles"},
     *     summary="Update vehicles",
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="matricula",
     *         required=true,
     *         example="1456LMH",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="marca",
     *         required=true,
     *         example="BMW",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="model",
     *         required=true,
     *         example="Serie 1",
     *         @OA\Schema(type="string"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */


    function updateVehicle(Request $request, $id)
    {

        $request->validate([
            'matricula' => ['required', 'max:25'],
            'marca' => ['required', 'max:25'],
            'model' => ['required', 'max:25'],
            'client_id' => ['required'],
        ]);

        $vehicle= Vehicle::find($request->id);

        $vehicle->update([
            'matricula' => $request->matricula,
            'marca' => $request->marca,
            'model' => $request->model,
            'client_id' => $request->client_id
        ]);

        return $vehicle;
    }


     /**
     * @OA\Delete(
     *     path="/api/vehicle/{id}",
     *      tags={"Vehicles"},
     *     summary="Delete vehicle",
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         ),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplied"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Cita not found"
     *     ),
     * )
     */

    function deleteVehicle($id)
    {
        $vehicle = Vehicle::find($id);
        $vehicle->delete();

        return $vehicle;
    }
}