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
        return User::all();
        
    }

    function getUser($id)
    {
        return User::find($id);
    }
    function insertClient(Request $request)
    {

        return User::create($request->all());


    }
    function updateUser(Request $request, $id)
    {

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