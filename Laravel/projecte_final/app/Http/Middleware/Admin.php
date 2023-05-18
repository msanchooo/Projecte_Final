<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use  Laravel\Sanctum\PersonalAccessToken;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token=$request->bearerToken();
        $tokenObject = PersonalAccessToken::findToken($token);

        $user = DB::table('personal_access_tokens')
        ->join('users', 'personal_access_tokens.tokenable_id', '=', 'users.id')
        ->select('users.*')
        ->where('users.rol', '=', 1)
        ->where('personal_access_tokens.id', '=', $tokenObject->id)
        ->first();
        
        if ($user && $user->rol=1) {
            return $next($request);
        } else {
            return response('No tienes permiso para acceder a esta ruta.', 403);
        }


    }
}