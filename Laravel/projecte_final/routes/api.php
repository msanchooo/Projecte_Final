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
Route::middleware('auth:sanctum')->get('/citas', [CitaController::class, 'getCitas'])->middleware('auth');

Route::middleware('auth:sanctum')->get('/cita/{id}', [CitaController::class, 'getCita'])->middleware('auth');

Route::middleware('auth:sanctum')->post('/cita/{id}', [CitaController::class, 'updateCita'])->name('cita_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/cita', [CitaController::class, 'insertCita'])->middleware('auth');

Route::delete('/cita/{id}', [CitaController::class, 'deleteCita'])->name('cita_delete')->middleware('auth');

//// Clients

Route::middleware('auth:sanctum')->get('/clients', [ClientController::class, 'getClients'])->name('clients_list')->middleware('auth');

Route::middleware('auth:sanctum')->get('/client/{id}', [ClientController::class, 'getClient'])->name('client_cerca')->middleware('auth');

Route::middleware('auth:sanctum')->post('/client/{id}', [ClientController::class, 'updateClient'])->name('client_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/client', [ClientController::class, 'insertClient'])->middleware('auth');

Route::delete('/client/{id}', [ClientController::class, 'deleteClient'])->name('client_delete')->middleware('auth');

Route::middleware('auth:sanctum')->get('/client-user/{id}', [ClientController::class, 'getClientByUserId'])->name('client_user')->middleware('auth');

//// Treballadors

Route::middleware('auth:sanctum')->get('/treballadors', [TreballadorController::class, 'getTreballadors'])->name('treballadors_list')->middleware('auth');

Route::middleware('auth:sanctum')->get('/treballador/{id}', [TreballadorController::class, 'getTreballador'])->name('treballador_cerca')->middleware('auth');

Route::middleware('auth:sanctum')->post('/treballador/{id}', [TreballadorController::class, 'updateTreballador'])->name('treballador_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/treballador', [TreballadorController::class, 'insertTreballador'])->name('treballador_insert')->middleware('auth');

Route::delete('/treballador/{id}', [TreballadorController::class, 'deleteTreballador'])->name('treballador_delete')->middleware('auth');

Route::middleware('auth:sanctum')->get('/treballador-user/{id}', [TreballadorController::class, 'getTreballadorByUserId'])->name('treballador_user')->middleware('auth');

//// Users

Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'getUsers'])->name('users_list')->middleware('auth');

Route::middleware('auth:sanctum')->get('/user/{id}', [UserController::class, 'getUser'])->name('user_cerca')->middleware('auth');

// Login

Route::post('/login', [LoginController::class, 'login'])->name('user_login');

// Buscar usuario por correo para login
Route::middleware('auth:sanctum')->get('/userLogin/{email}', [UserController::class, 'getUserLogin'])->name('user_login');

Route::middleware('auth:sanctum')->post('/user/{id}', [UserController::class, 'updateUser'])->name('user_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/user', [UserController::class, 'insertUser'])->middleware('auth');

Route::delete('/user/{id}', [UserController::class, 'deleteUser'])->name('user_delete')->middleware('auth');

//// Vehicles

Route::middleware('auth:sanctum')->get('/vehicles', [VehicleController::class, 'getVehicles'])->name('vehicles_list');

Route::middleware('auth:sanctum')->get('/vehicle/{id}', [VehicleController::class, 'getVehicle'])->name('vehicle_cerca')->middleware('auth');

Route::middleware('auth:sanctum')->get('/vehicle-client/{idClient}', [VehicleController::class, 'getVehicleClient'])->name('vehicle_client')->middleware('auth');

Route::middleware('auth:sanctum')->post('/vehicle/{id}', [VehicleController::class, 'updateVehicle'])->name('vehicle_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/vehicle', [VehicleController::class, 'insertVehicle'])->name('vehicle_insert')->middleware('auth');

Route::delete('/vehicle/{id}', [VehicleController::class, 'deleteVehicle'])->name('vehicle_delete')->middleware('auth');

//// Serveis

Route::middleware('auth:sanctum')->get('/serveis', [ServeiController::class, 'getServeis'])->name('serveis_list')->middleware('auth');

Route::middleware('auth:sanctum')->get('/servei/{id}', [ServeiController::class, 'getServei'])->name('servei_cerca')->middleware('auth');

Route::middleware('auth:sanctum')->post('/servei/{id}', [ServeiController::class, 'updateServei'])->name('servei_update')->middleware('auth');

Route::middleware('auth:sanctum')->post('/servei', [ServeiController::class, 'insertServei'])->name('servei_insert')->middleware('auth');

Route::delete('/servei/{id}', [ServeiController::class, 'deleteServei'])->name('servei_delete')->middleware('auth');


