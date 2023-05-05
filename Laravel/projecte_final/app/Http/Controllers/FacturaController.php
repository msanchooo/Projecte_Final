<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Factura;
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
        //return Factura::all();

        return Factura::with('client','vehicle')->get();

        //return Factura::with('client','vehicle','servei')->find($id);

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
        
        $fecha = strtotime($request->data);
        $anio= new \DateTime();
        $anio->setTimestamp($fecha);
        $anio=$anio->format('Y');

        $facturas=DB::table('facturas')
            ->whereYear('data',$anio)
            ->get();

        $ultimoNumero=$facturas->max('numero');
        $ultimoNumero=intval(substr($ultimoNumero, 5));

        $factura = Factura::create([
            'data' => $request->data,
            'numero' => $anio . "/" . ($ultimoNumero+1),
            'total' => $request->total,
            'total_con_iva' => $request->total_con_iva,
            'client_id' => $request->client_id,
            'vehicle_id' => $request->vehicle_id,
        ]);

        $factura->serveis()->sync($request->serveis);
        return $factura;

    }




}