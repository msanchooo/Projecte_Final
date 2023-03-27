<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Treballador;

class TreballadorController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Treballadors

    function getTreballadors()
    {
        //return Treballador::all();
        return Treballador::with('treballador')->get();
    }

    function getTreballador($id)
    {
        return Treballador::find($id);
    }

    function updateTreballador(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $treballador = Treballador::find($id);
        $treballador->update($request->all());

        return $treballador;
    }

    function insertTreballador(Request $request)
    {
        return Treballador::create($request->all());
    }

    function deleteTreballador($id)
    {
        $treballador = Treballador::find($id);
        $treballador->delete();

        return $treballador;
    }
}
