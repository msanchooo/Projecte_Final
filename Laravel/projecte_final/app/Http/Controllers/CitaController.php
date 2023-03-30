<?php

namespace App\Http\Controllers;

use App\Models\Servei;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Cita;

class CitaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Cites

    function getCitas()
    {
        return Cita::all();
    }

    function getCita($id)
    {
        return Cita::find($id);
    }

    function insertCita(Request $request)
    {

        $duradaTotal = 0;
        foreach ($request->serveis as $servei) {
            $duradaTotal += Servei::find($servei)->durada;
        }

        $cita = Cita::create(['data' => $request->data, 'client_id' => $request->client_id, 'duradaTotal' => $duradaTotal]);

        $cita->serveis()->sync($request->serveis);
        return $cita;
    }

    function updateCita(Request $request)
    {

        $duradaTotal = 0;
        foreach ($request->serveis as $servei) {
            $duradaTotal += Servei::find($servei)->durada;
        }

        $cita = Cita::find($request->id);

        $cita->update(['data' => $request->data, 'client_id' => $request->client_id, 'duradaTotal' => $duradaTotal]);

        $cita->serveis()->sync($request->serveis);

        return $cita;

    }

    function deleteCita($id)
    {
        $cita = Cita::find($id);
        $cita->delete();

        return $cita;
    }
}