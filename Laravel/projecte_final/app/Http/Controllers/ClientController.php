<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Client;

class ClientController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Clients

    function getClients()
    {
        //return Client::all();
        return Client::with('client')->get();
    }

    function getClient($id)
    {
        return Client::find($id);
    }

    function updateClient(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $client = Client::find($id);
        $client->update($request->all());

        return $client;
    }

    function insertClient(Request $request)
    {
        return Client::create($request->all());
    }

    function deleteClient($id)
    {
        $client = Client::find($id);
        $client->delete();

        return $client;
    }
}
