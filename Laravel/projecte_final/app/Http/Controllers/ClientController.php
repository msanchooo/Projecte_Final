<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\User;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


use App\Models\Client;

class ClientController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    #php artisan l5-swagger:generate

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

        //return Client::all();

        $user = Auth::user();

        if ($user->rol == 1 || $user->rol == 3) {
            return Client::with('user')->get();
        } else {
            return Client::with('user')->where('user_id', $user->id)->first();
        }
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

        $user = Auth::user();
        $client = Client::with('user')->find($id);


        if ($user->rol == 1 || $user->rol == 3 || $client->user_id == $user->id) {

            return $client;
        }

        return "unautorized";
    }

    /**
     * @OA\Post(
     *     path="/api/client",
     *      tags={"Clients"},
     *     summary="Adds a new client",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="user_id",
     *         required=true,
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
     *         @OA\Parameter(
     *         in="query",
     *         name="direccio",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="movil",
     *         required=false,
     *           example="user",
     *         @OA\Schema(type="string"),
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
            'nom' => ['required', 'max:15','regex:/^[a-zA-Z0-9\s]+$/'],
            'cognoms' => ['required', 'max:25','regex:/^[a-zA-Z0-9\s]+$/'],
            'nif' => ['required'],
            'direccio' =>['required'],
            'movil'=>['required','regex:/^[0-9]+$/'],
            'email'=>['required','email']

        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol' => 2

        ]);

        $client = Client::create([
            'nom' => $request->nom,
            'cognoms' => $request->cognoms,
            'nif' => $request->nif,
            'user_id' => $user->id,
            'direccio' => $request->direccio,
            'movil' => $request->movil



        ]);

        return $client;


    }

    /**
     * @OA\Post(
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
     *         name="user_id",
     *         required=true,
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
        $user = Auth::user();
        $client = Client::where('user_id', $request->user_id)->first();
        
        $request->validate([
            'nom' => ['required', 'max:15','regex:/^[a-zA-Z0-9\s]+$/'],
            'cognoms' => ['required', 'max:25','regex:/^[a-zA-Z0-9\s]+$/'],
            'nif' => ['required'],
            'direccio' =>['required'],
            'movil'=>['required','regex:/^[0-9]+$/'],
            'email'=>['required','email']

        ]);

        if ($client->user_id == $user->id || $user->rol == 1 || $user->rol == 3) {

            $request->validate([
                'nom' => ['required', 'max:15'],
                'cognoms' => ['required', 'max:25'],
                'nif' => ['required']
            ]);


            $client->update([
                'nom' => $request->nom,
                'cognoms' => $request->cognoms,
                'nif' => $request->nif,
                'direccio' => $request->direccio,
                'movil' => $request->movil
            ]);

            if ($user->where('email', $request->email)->exists()) {
            } else {
                $user->update([
                    'email' => $request->email
                ]);
            }

        }

        return $client->with('user')->first();

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


    function getClientByUserId($userId)
    {
        $user = Auth::user();

        if ($user->rol == 1 || $user->rol == 3 || $userId == $user->id) {


            return Client::where('user_id', $userId)->first();

        }

        return "No tienes permiso";

    }

}