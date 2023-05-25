<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailContacto;

class EmailController extends Controller
{
    public function index(Request $request){
        $data['motivo'] = $request->motivo;
    
        Mail::send('emails.correo', $data, function ($message) use ($data) {
          $message->to('albert_perezperez@iescarlesvallbona.cat', $data['motivo'])
          ->subject("Titulo del Mensaje");
        });
        return response()->json([
          'Success' => 'Excelente email enviado..',
          'code' => '200',
        ],200);
      }
}
