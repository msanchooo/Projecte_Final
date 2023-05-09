<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class LoginController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $request->user()->createToken('token1');

            //return $user;
            return response()->json([
            
                'id' => $user->id,
                'username'=> $user->email,
                'firstName'=> null,
                'lastName'=> null,
                'token' => $token->plainTextToken
            ], 200);
        } else {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
    }
}