<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\User;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Client;

class ClientController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Clients

    /**
     * @OA\Get(
     *      path="/api/clients",
     *      tags={"Clients"},
     *      summary="Veure totes les clients.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna totes les clients."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getClients()
    {
        return Client::all();
    }


    /**
     * @OA\Get(
     *      path="/api/client/{id}",
     *      tags={"Clients"},
     *      summary="Veure totes las clients.",
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

    function getClient($id)
    {
        return Client::find($id);
    }

    /**
     * @OA\Post(
     *     path="/api/client",
     *      tags={"Clients"},
     *     summary="Adds a new client",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="username",
     *         required=true,
     *         example="username",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         example="user@gmail.com",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *          example="username",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *          example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="cognoms",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nif",
     *         required=false,
     *          example="12345",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="tipu_id",
     *         required=false,
     *           example="1",
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */

    function insertClient(Request $request)
    {

        $request->validate([
            'username' => ['required', 'min:6', 'max:12'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'max:15'],
            'nom' => ['required', 'max:15'],
            'cognoms' => ['required', 'max:25'],
            'nif' => ['required'],
            'tipu_id' => ['required', 'integer', 'min:1', 'max:2']
        ]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
            'nom' => $request->nom,
            'cognoms' => $request->cognoms,
            'nif' => $request->nif
        ]);



        $client = Client::create([
            'user_id' => $user->id,
            'tipu_id' => $request->tipu_id

        ]);

        return $client;


    }

    /**
     * @OA\Put(
     *     path="/api/client/{id}",
     *      tags={"Clients"},
     *     summary="Update client",
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="username",
     *         required=true,
     *         example="username",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         example="user@gmail.com",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *          example="username",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *          example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="cognoms",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nif",
     *         required=false,
     *          example="12345",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="tipu_id",
     *         required=false,
     *           example="1",
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */

    function updateClient(Request $request)
    {
        $request->validate([
            'username' => ['required', 'min:6', 'max:12'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'max:15'],
            'nom' => ['required', 'max:15'],
            'cognoms' => ['required', 'max:25'],
            'nif' => ['required'],
            'tipu_id' => ['required', 'integer', 'min:1', 'max:2']
        ]);

        $client = Client::find($request->id);

        $client->update([
            'tipu_id' => $request->tipu_id

        ]);

        $user = User::find($client->user_id);

        $user->update([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
            'nom' => $request->nom,
            'cognoms' => $request->cognoms,
            'nif' => $request->nif
        ]);




        return $client;
    }

    /**
     * @OA\Delete(
     *     path="/api/client/{id}",
     *      tags={"Clients"},
     *     summary="Delete client",
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

    function deleteClient($id)
    {
        $client = Client::find($id);
        $user = User::find($client->user_id);
        $client->delete();
        $user->delete();


        return $client;
    }
}