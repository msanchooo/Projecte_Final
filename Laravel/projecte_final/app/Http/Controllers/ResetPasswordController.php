<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;





class ResetPasswordController extends BaseController
{
    public function sendEmail(Request $request){
        return $request->all();
    }

    public function validateEmail($email){
        return User::where('email', $email)->first();
    }
}