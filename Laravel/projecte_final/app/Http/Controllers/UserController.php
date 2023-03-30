<?php

namespace App\Http\Controllers;

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

    function updateUser(Request $request, $id)
    {
        // cal posar en la peticio PUT el Header field:
        // Content-Type = application/x-www-form-urlencoded
        $user = User::find($id);
        $user->update($request->all());

        return $user;
    }

    function insertUser(Request $request)
    {
        return User::create($request->all());
    }

    function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        return $user;
    }
}
