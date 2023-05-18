<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Factura;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FacturaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @OA\Get(
     *      path="/api/facturas",
     *      tags={"Facturas"},
     *      summary="Veure totes les factures.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les factures."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    function getFacturas()
    {
        $user = Auth::user();

        if ($user->rol == "1" || $user->rol == "3") {

            return Factura::with('client', 'vehicle')->get();

        } else if ($user->rol == "2") {

            $client = Client::where('user_id', $user->id)->first();

            if ($client) {
                
                return Factura::with('client', 'vehicle')->where('client_id', $client->id)->get();
            }
        }

    }
    function getFactura($id)
    {

        $user = Auth::user();

        $factura = Factura::with('client', 'vehicle', 'serveis')->find($id);

        if ($user->rol == "1" || $user->rol == "3" || $factura->client->user_id == $user->id ) {
            
            return $factura;
        }

        return "unautorized";

    }
    /**
     * @OA\Post(
     *     path="/api/factura",
     *      tags={"Facturas"},
     *     summary="Adds a new factura",
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
     *         name="total",
     *         example="100",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="total_con_iva",
     *         example="121",
     *         required=true,
     *         @OA\Schema(type="integer"),
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

    function insertFactura(Request $request)
    {
        $user = Auth::user();
        if ($user->rol == "1" || $user->rol == "3") {

            $fecha = strtotime($request->data);
            $anio = new \DateTime();
            $anio->setTimestamp($fecha);
            $anio = $anio->format('Y');

            $facturas = DB::table('facturas')
                ->whereYear('data', $anio)
                ->get();

            $ultimoNumero = $facturas->max('numero');
            $ultimoNumero = intval(substr($ultimoNumero, 5));

            $factura = Factura::create([
                'data' => $request->data,
                'numero' => $anio . "/" . ($ultimoNumero + 1),
                'total' => $request->total,
                'total_con_iva' => $request->total_con_iva,
                'client_id' => $request->client_id,
                'vehicle_id' => $request->vehicle_id,
            ]);
        }

        return $factura;

    }

    function insertLineas(Request $request)
    {
        $factura = Factura::find($request->id);
        foreach ($request->serveis as $servei) {
            $factura->serveis()->attach($servei['id'], ['unitats' => $servei['quantitat']]);

        }
        return $factura;

    }





}