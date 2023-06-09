<?php

namespace App\Http\Controllers;

use App\Models\Treballador;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Client;



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
            if($user->rol==3){
                $treballador = Treballador::where('user_id', $user->id)->first();
                return response()->json([
                    'id' => $user->id,
                    'email'=> $user->email,
                    'rol' => $user->rol,
                    'token' => $token->plainTextToken,
                    'username' => $treballador->nom
    
                ], 200);
            }

            $client = Client::where('user_id', $user->id)->first();
            return response()->json([
                'id' => $user->id,
                'email'=> $user->email,
                'rol' => $user->rol,
                'token' => $token->plainTextToken,
                'username' => $client->nom

            ], 200);
        } else {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
    }
}