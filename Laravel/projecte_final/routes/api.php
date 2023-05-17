<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\ServeiController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\TreballadorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FacturaController;
use App\Http\Controllers\LoginController;


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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/', [Controller::class, 'home'])->name('home');

//// Cites
// Route::middleware(['auth:sanctum',Admin::class])->get('/citas', [CitaController::class, 'getCitas']);

Route::middleware(['auth:sanctum','admin'])->get('/citas', [CitaController::class, 'getCitas']);

Route::middleware('auth:sanctum')->get('/cita/{id}', [CitaController::class, 'getCita']);

Route::middleware('auth:sanctum')->post('/cita/{id}', [CitaController::class, 'updateCita'])->name('cita_update');

Route::middleware('auth:sanctum')->post('/cita', [CitaController::class, 'insertCita']);

Route::delete('/cita/{id}', [CitaController::class, 'deleteCita'])->name('cita_delete');

//// Clients

Route::middleware(['auth:sanctum','admin'])->get('/clients', [ClientController::class, 'getClients'])->name('clients_list');

Route::middleware('auth:sanctum')->get('/client/{id}', [ClientController::class, 'getClient'])->name('client_cerca');

Route::middleware('auth:sanctum')->post('/client/{id}', [ClientController::class, 'updateClient'])->name('client_update');

Route::post('/client', [ClientController::class, 'insertClient']);

Route::delete('/client/{id}', [ClientController::class, 'deleteClient'])->name('client_delete');

Route::middleware('auth:sanctum')->get('/client-user/{id}', [ClientController::class, 'getClientByUserId'])->name('client_user');

//// Treballadors

Route::middleware(['auth:sanctum','admin'])->get('/treballadors', [TreballadorController::class, 'getTreballadors'])->name('treballadors_list');

Route::middleware(['auth:sanctum','admin'])->get('/treballador/{id}', [TreballadorController::class, 'getTreballador'])->name('treballador_cerca');

Route::middleware(['auth:sanctum','admin'])->post('/treballador/{id}', [TreballadorController::class, 'updateTreballador'])->name('treballador_update');

Route::middleware(['auth:sanctum','admin'])->post('/treballador', [TreballadorController::class, 'insertTreballador'])->name('treballador_insert');

Route::middleware(['auth:sanctum','admin'])->delete('/treballador/{id}', [TreballadorController::class, 'deleteTreballador'])->name('treballador_delete');

Route::middleware(['auth:sanctum','admin'])->get('/treballador-user/{id}', [TreballadorController::class, 'getTreballadorByUserId'])->name('treballador_user');

//// Users

Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'getUsers'])->name('users_list');

Route::middleware('auth:sanctum')->get('/user/{id}', [UserController::class, 'getUser'])->name('user_cerca');

// Login

Route::post('/login', [LoginController::class, 'login'])->name('user_login');

// Buscar usuario por correo para login
Route::middleware('auth:sanctum')->get('/userLogin/{email}', [UserController::class, 'getUserLogin'])->name('user_login');

Route::middleware('auth:sanctum')->post('/user/{id}', [UserController::class, 'updateUser'])->name('user_update');

Route::middleware('auth:sanctum')->post('/user', [UserController::class, 'insertUser']);

Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('user_delete');

//// Vehicles

Route::middleware(['auth:sanctum'])->get('/vehicles', [VehicleController::class, 'getVehicles'])->name('vehicles_list');

Route::middleware('auth:sanctum')->get('/vehicle/{id}', [VehicleController::class, 'getVehicle'])->name('vehicle_cerca');

Route::get('/vehicle-client/{idClient}', [VehicleController::class, 'getVehicleClient'])->name('vehicle_client');

Route::post('/vehicle/{id}', [VehicleController::class, 'updateVehicle'])->name('vehicle_update');

Route::middleware('auth:sanctum')->get('/vehicle-client/{id}', [VehicleController::class, 'getVehicleClient'])->name('vehicle_client');

Route::middleware('auth:sanctum')->post('/vehicle/{id}', [VehicleController::class, 'updateVehicle'])->name('vehicle_update');

Route::middleware('auth:sanctum')->post('/vehicle', [VehicleController::class, 'insertVehicle'])->name('vehicle_insert');

Route::middleware(['auth:sanctum','admin'])->delete('/vehicle/{id}', [VehicleController::class, 'deleteVehicle'])->name('vehicle_delete');

//// Serveis

Route::middleware(['auth:sanctum'])->get('/serveis', [ServeiController::class, 'getServeis'])->name('serveis_list');

Route::middleware('auth:sanctum')->get('/servei/{id}', [ServeiController::class, 'getServei'])->name('servei_cerca');

Route::middleware('auth:sanctum')->post('/servei/{id}', [ServeiController::class, 'updateServei'])->name('servei_update');

Route::middleware('auth:sanctum')->post('/servei', [ServeiController::class, 'insertServei'])->name('servei_insert');

Route::delete('/servei/{id}', [ServeiController::class, 'deleteServei'])->name('servei_delete');

//// Facturas


Route::get('/facturas', [FacturaController::class, 'getFacturas']);
Route::get('/factura/{id}', [FacturaController::class, 'getFactura']);
Route::post('/factura', [FacturaController::class, 'insertFactura']);
Route::post('/linea', [FacturaController::class, 'insertLineas']);