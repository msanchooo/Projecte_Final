<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//// Cites

Route::get('/cites', [CitaController::class, 'getCitas']);

Route::get('/cita/{id}', [CitaController::class, 'getCita']);

Route::put('/cita/{id}', [CitaController::class, 'updateCita']);

Route::post('/cita', [CitaController::class, 'insertCita']);

Route::delete('/cita/{id}', [CitaController::class, 'deleteCita']);

//// Clients

Route::get('/clients', [ClientController::class, 'getClients']);

Route::get('/client/{id}', [ClientController::class, 'getClient']);

Route::put('/client/{id}', [ClientController::class, 'updateClient']);

Route::post('/client', [ClientController::class, 'insertClient']);

Route::delete('/client/{id}', [ClientController::class, 'deleteClient']);

//// Treballadors

Route::get('/treballadors', [TreballadorController::class, 'getTreballadors']);

Route::get('/treballador/{id}', [TreballadorController::class, 'getTreballador']);

Route::put('/treballador/{id}', [TreballadorController::class, 'updateTreballador']);

Route::post('/treballador', [TreballadorController::class, 'insertTreballador']);

Route::delete('/treballador/{id}', [TreballadorController::class, 'deleteTreballador']);

//// Users

Route::get('/users', [UserController::class, 'getUsers']);

Route::get('/user/{id}', [UserController::class, 'getUser']);

Route::put('/user/{id}', [UserController::class, 'updateUser']);

Route::post('/user', [UserController::class, 'insertUser']);

Route::delete('/user/{id}', [UserController::class, 'deleteUser']);

//// Vehicles

Route::get('/vehicles', [VehicleController::class, 'getVehicles']);

Route::get('/vehicle/{id}', [VehicleController::class, 'getVehicle']);

Route::put('/vehicle/{id}', [VehicleController::class, 'updateVehicle']);

Route::post('/vehicle', [VehicleController::class, 'insertVehicle']);

Route::delete('/vehicle/{id}', [VehicleController::class, 'deleteVehicle']);