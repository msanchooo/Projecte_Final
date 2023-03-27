<?php

namespace App\Http\Controllers;

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

    function getCites()
    {
        //return Cita::all();
        return Cita::with('cita')->get();
    }

    function getCita($id)
    {
        return Cita::find($id);
    }

    function updateCita(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $cita = Cita::find($id);
        $cita->update($request->all());

        return $cita;
    }

    function insertCita(Request $request)
    {
        return Cita::create($request->all());
    }

    function deleteCita($id)
    {
        $cita = Cita::find($id);
        $cita->delete();

        return $cita;
    }
}
