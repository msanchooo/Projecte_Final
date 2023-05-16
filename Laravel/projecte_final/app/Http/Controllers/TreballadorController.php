<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\Treballador;
use Illuminate\Support\Facades\Hash;

class TreballadorController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Treballadors

     /**
     * @OA\Get(
     *      path="/api/treballadors",
     *      tags={"Treballadors"},
     *      summary="Veure tots els treballadors.",
     *      @OA\Response(
     *          response=200,
     *          description="Retorna tots els treballadors."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getTreballadors()
    {
        
        return Treballador::with('user')->get();

    }

    /**
     * @OA\Get(
     *      path="/api/treballador/{id}",
     *      tags={"Treballadors"},
     *      summary="Veure totes els treballadors.",
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
     *          description="Retorna totes les treballadorss."
     *       ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */

    function getTreballador($id)
    {
        return Treballador::with('user')->find($id);

    }

        /**
     * @OA\Post(
     *     path="/api/treballador",
     *      tags={"Treballadors"},
     *     summary="Add a new treballador",
     *    
     *         @OA\Parameter(
     *         in="query",
     *         name="username",
     *         required=true,
     *         example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         example="treballador@gmail.com",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *          example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *          example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="cognoms",
     *         required=false,
     *           example="treballador",
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
     *         name="sou",
     *         required=false,
     *           example="1500.49",
     *         @OA\Schema(type="double"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="carrec",
     *         required=false,
     *         example="treballador",
     *         @OA\Schema(type="String"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */
    function insertTreballador(Request $request)
    {
          $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'max:15'],
            'nom' => ['required', 'max:15','alpha'],
            'cognoms' => ['required', 'max:25','alpha'],
            'nif' => ['required'],
            'sou' => ['required','regex:/^\d+(\.\d{1,2})?$/'],
            'carrec' => ['required','alpha']
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),

        ]);



        $treballador = Treballador::create([
            'user_id' => $user->id,
            'sou' => $request->sou,
            'carrec'=>$request->carrec,
            'nom' => $request->nom,
            'cognoms' => $request->cognoms,
            'nif' => $request->nif

        ]);

        return $treballador;
    }

           /**
     * @OA\Post(
     *     path="/api/treballador/{id}",
     *      tags={"Treballadors"},
     *     summary="Update treballador",
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
     *         example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         example="treballador@gmail.com",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *          example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="nom",
     *         required=true,
     *          example="treballador",
     *         @OA\Schema(type="string"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="cognoms",
     *         required=false,
     *           example="treballador",
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
     *         name="sou",
     *         required=false,
     *           example="1500.49",
     *         @OA\Schema(type="double"),
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="carrec",
     *         required=false,
     *         example="treballador",
     *         @OA\Schema(type="String"),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent()
     *     )
     * )
     */
    function updateTreballador(Request $request, $id)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6', 'max:15'],
            'nom' => ['required', 'max:15','alpha'],
            'cognoms' => ['required', 'max:25','alpha'],
            'nif' => ['required'],
            'sou' => ['required','regex:/^\d+(\.\d{1,2})?$/'],
            'carrec' => ['required','alpha']
        ]);

        $treballador = Treballador::find($request->id);

        $treballador->update([
            'sou' => $request->sou,
            'carrec'=>$request->carrec,
            'nom' => $request->nom,
            'cognoms' => $request->cognoms,
            'nif' => $request->nif
        ]);

        $user = User::find($treballador->user_id);

        $user->update([
            'email' => $request->email,
            'password' => $request->password,

        ]);


        return $treballador;
    }

 /**
     * @OA\Delete(
     *     path="/api/treballador/{id}",
     *      tags={"Treballadors"},
     *     summary="Delete treballador",
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

    function deleteTreballador($id)
    {
        $treballador = Treballador::find($id);
        $user = User::find($treballador->user_id);
        $treballador->delete();
        $user->delete();

        return $treballador;
    }

    function getTreballadorByUserId($userId)
    {
        return Treballador::where('user_id', $userId)->first();
    }
}
