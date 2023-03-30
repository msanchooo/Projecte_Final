<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

   // protected $fillable = ['data','client_id'];
   protected $guarded = [];

    public function serveis()
    {
        return $this->belongsToMany(Servei::class);
    }

  
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

}
