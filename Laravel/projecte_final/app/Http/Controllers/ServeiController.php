<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Servei;

class ServeiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Serveis

    /**
     * @OA\Get(
     *      path="/api/serveis",
     *      tags={"Serveis"},
     *      summary="Veure totes els serveis.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les clients."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getServeis()
    {
        return Servei::all();

    }

    /**
     * @OA\Get(
     *      path="/api/serveis/{id}",
     *      tags={"Serveis"},
     *      summary="Veure totes els serveis.",
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

    function getServei($id)
    {
        return Servei::find($id);
    }

    /**
     * @OA\Post(
     *     path="/api/servei",
     *      tags={"Serveis"},
     *     summary="Adds a new serveis",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *         example="Frenos",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="preu",
     *         required=false,
     *         example="150.50",
     *         @OA\Schema(type="double"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="durada",
     *         required=false,
     *         example="5.5",
     *         @OA\Schema(type="double"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */

    function insertServei(Request $request)
    {

        $request->validate([
            'nom' => ['required', 'max:25'],
            'preu' => ['required'],
            'durada' => ['required']
        ]);

        return Servei::create([
            'nom' => $request->nom,
            'preu' => $request->preu,
            'durada' => $request->durada
        ]);
    }

        /**
     * @OA\Put(
     *     path="/api/servei/{id}",
     *      tags={"Serveis"},
     *     summary="Update serveis",
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *         example="Frenos",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="preu",
     *         required=true,
     *         example="150.50",
     *         @OA\Schema(type="double"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="durada",
     *         required=true,
     *         example="5.5",
     *         @OA\Schema(type="double"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */


    function updateServei(Request $request, $id)
    {

        $request->validate([
            'nom' => ['required', 'max:25'],
            'preu' => ['required'],
            'durada' => ['required']
        ]);

        $servei= Servei::find($request->id);

        $servei->update([
            'nom' => $request->nom,
            'preu' => $request->preu,
            'durada' => $request->durada
        ]);

        return $servei;
    }


     /**
     * @OA\Delete(
     *     path="/api/servei/{id}",
     *      tags={"Serveis"},
     *     summary="Delete Servei",
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

    function deleteServei($id)
    {
        $servei = Servei::find($id);
        $servei->delete();

        return $servei;
    }
}