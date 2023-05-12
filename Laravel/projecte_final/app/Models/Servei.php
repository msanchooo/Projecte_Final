<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servei extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function cites()
    {
        return $this->belongsToMany(Cita::class);
    }
    public function factures()
    {
        return $this->belongsToMany(Factura::class);
    }
  
}