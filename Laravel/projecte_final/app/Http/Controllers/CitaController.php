<?php

namespace App\Http\Controllers;

use App\Models\Servei;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Cita;

/**
 * @OA\Info(
 *     version="1.0",
 *     title="Example for response examples value"
 * ),
 *  @OA\Server(
 *      url="http://localhost/Projecte_Final/Laravel/projecte_final/public/index.php",
 *      description="L5 Swagger OpenApi Server"
 * )
 */
class CitaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Cites

    /**
     * @OA\Get(
     *      path="/api/citas",
     *      tags={"Citas"},
     *      summary="Veure totes les citas.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les citas."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    function getCitas()
    {
        return Cita::all();
    }

    /**
     * @OA\Get(
     *      path="/api/cita/{id}",
     *      tags={"Citas"},
     *      summary="Veure totes las citas.",
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
     *          description="Retorna totes les citas."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getCita($id)
    {
        return Cita::find($id);
    }

    /**
     * @OA\Post(
     *     path="/api/cita",
     *      tags={"Citas"},
     *     summary="Adds a new cita",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="data",
     *         example="2023-07-20",
     *         required=true,
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="client_id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="vehicle_id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="serveis[0]",
     *         required=false,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="serveis[1]",
     *         required=false,
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */

    function insertCita(Request $request)
    {


        $request->validate([
            'data' => ['required'],
            'client_id' => ['required'],
            'vehicle_id' => ['required'],
            'serveis'=>['required', 'array', 'min:1']
            ]);


        $duradaTotal = 0;
        foreach ($request->serveis as $servei) {
            $duradaTotal += Servei::find($servei)->durada;
        }

        $cita = Cita::create(['data' => $request->data, 'client_id' => $request->client_id, 'vehicle_id' => $request->vehicle_id, 'duradaTotal' => $duradaTotal]);

        $cita->serveis()->sync($request->serveis);
        return $cita;
    }

    /**
     * @OA\Post(
     *     path="/api/cita/{id}",
     *      tags={"Citas"},
     *     summary="Update cita",
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="data",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="client_id",
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="vehicle_id",
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="serveis[0]",
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="serveis[1]",
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *     )
     * )
     */

    function updateCita(Request $request)
    {

        $request->validate([
            'data' => ['required'],
            'client_id' => ['required'],
            'vehicle_id' => ['required'],
            'serveis'=>['required', 'array', 'min:1']
            ]);

        $duradaTotal = 0;
        foreach ($request->serveis as $servei) {
            $duradaTotal += Servei::find($servei)->durada;
        }

        $cita = Cita::find($request->id);

        $cita->update(['data' => $request->data, 'client_id' => $request->client_id, 'duradaTotal' => $duradaTotal]);

        $cita->serveis()->sync($request->serveis);

        return $cita;

    }

    /**
     * @OA\Delete(
     *     path="/api/cita/{id}",
     *      tags={"Citas"},
     *     summary="Delete cita",
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

    function deleteCita($id)
    {
        $cita = Cita::find($id);
        $cita->delete();

        return $cita;
    }
}