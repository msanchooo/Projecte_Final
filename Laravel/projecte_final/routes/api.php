<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;
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

Route::get('/', [Controller::class, 'home'])->name('home');

//// Cites

Route::get('/citas', [CitaController::class, 'getCitas']);

Route::get('/cita/{id}', [CitaController::class, 'getCita']);

Route::put('/cita/{id}', [CitaController::class, 'updateCita'])->name('cita_update');

Route::post('/cita', [CitaController::class, 'insertCita']);

Route::delete('/cita/{id}', [CitaController::class, 'deleteCita'])->name('cita_delete');

//// Clients

Route::get('/clients', [ClientController::class, 'getClients'])->name('clients_list');

Route::get('/client/{id}', [ClientController::class, 'getClient'])->name('client_cerca');

Route::put('/client/{id}', [ClientController::class, 'updateClient'])->name('client_update');

Route::post('/client', [ClientController::class, 'insertClient'])->name('client_insert');

Route::delete('/client/{id}', [ClientController::class, 'deleteClient'])->name('client_delete');

//// Treballadors

Route::get('/treballadors', [TreballadorController::class, 'getTreballadors'])->name('treballadors_list');

Route::get('/treballador/{id}', [TreballadorController::class, 'getTreballador'])->name('treballador_cerca');

Route::put('/treballador/{id}', [TreballadorController::class, 'updateTreballador'])->name('treballador_update');

Route::post('/treballador', [TreballadorController::class, 'insertTreballador'])->name('treballador_insert');

Route::delete('/treballador/{id}', [TreballadorController::class, 'deleteTreballador'])->name('treballador_delete');

//// Users

Route::get('/users', [UserController::class, 'getUsers'])->name('users_list');

Route::get('/user/{id}', [UserController::class, 'getUser'])->name('user_cerca');

Route::put('/user/{id}', [UserController::class, 'updateUser'])->name('user_update');

Route::post('/user', [UserController::class, 'insertUser'])->name('user_insert');

Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('user_delete');

//// Vehicles

Route::get('/vehicles', [VehicleController::class, 'getVehicles'])->name('vehicles_list');

Route::get('/vehicle/{id}', [VehicleController::class, 'getVehicle'])->name('vehicle_cerca');

Route::put('/vehicle/{id}', [VehicleController::class, 'updateVehicle'])->name('vehicle_update');

Route::post('/vehicle', [VehicleController::class, 'insertVehicle'])->name('vehicle_insert');

Route::delete('/vehicle/{id}', [VehicleController::class, 'deleteVehicle'])->name('vehicle_delete');


