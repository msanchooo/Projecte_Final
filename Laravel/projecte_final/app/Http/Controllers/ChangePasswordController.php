<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;



class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
        return $this->getPasswordResetTableRow($request)->count()>0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request){
        return DB::table('password_resets')->where(['email' => $request->email, 'token'=>$request->resetToken]);
    }

    private function tokenNotFoundResponse(){
        return response()->json(['error' => 'Token o Email son incorrectos'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password'=>Hash::make($request->password)]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data' => 'Contraseña cambiada correctamente'], Response::HTTP_CREATED);
    }
}
