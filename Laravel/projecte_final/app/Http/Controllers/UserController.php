<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\User;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /// Users

    function getUsers()
    {
        //return User::all();
        return User::with('user')->get();
    }

    function getUser($id)
    {
        return User::find($id);
    }
    function insertClient(Request $request)
    {

        // $user=User::create([
        // 'username' => $request->username,
        // 'email' => $request->email,
        // 'password' => $request->password,
        // 'nom' => $request->nom,
        // 'cognoms' => $request->cognoms,
        // 'nif' => $request->nif]);

        //  $user = new User;
        //  $user->username = $request->username;
        //  $user->email = $request->email;
        //  $user->password = $request->password;
        //  $user->nom = $request->nom;
        //  $user->cognoms = $request->cognoms;
        //  $user->nif = $request->nif;

        
        // Client::create([
        //     'users_id'=>$user->id,
        //     'vehicle_id'=>$request->vehicle_id
        // ]);

        return User::create($request->all());


    }
    function updateUser(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $user = User::find($id);
        $user->update($request->all());

        return $user;
    }



    function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        return $user;
    }
}