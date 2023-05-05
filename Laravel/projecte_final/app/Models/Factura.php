<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Factura extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function serveis()
    {
        return $this->belongsToMany(Servei::class);
    }
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
  
}