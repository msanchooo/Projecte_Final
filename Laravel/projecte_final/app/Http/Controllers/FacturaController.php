<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Factura;

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
    function getCitas()
    {
        return Factura::with('client','vehicle','servei')->get();

        //return Factura::with('client','vehicle','servei')->find($id);

    }

    

}
