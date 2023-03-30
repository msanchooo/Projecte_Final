@extends('layout')

@section('title', 'Editar Vehicle')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Editar Vehicle</h1>
    <a href="{{ route('vehicles_list') }}">&laquo; Torna</a>
	<div style="margin-top: 20px">
        <form method="POST" action="{{ route('vehicle_update', ['id' => $vehicle->id]) }}">
            @csrf
            <div>
                <label for="matricula">Matricula</label>
                <input type="text" name="matricula" value="{{ $vehicle->matricula }}" />
            </div>
            <div>            
                <label for="marca">Marca</label>
                <input type="text" name="marca" value="{{ $vehicle->marca }}" />
            </div>
            <div>
                <label for="model">Model</label>
                <input type="text" name="model" value="{{ $vehicle->model }}" />
            </div>

            <!-- hacer el selected -->
            <div>
                <label for="tipus">Tipus</label>
                <select name="tipus">
                    <option value="1">Cotxe</option>
                    <option value="2">Moto</option>
                </select>
            </div>

            <!-- hacer selected cliente -->
            <div>
                <label for="client_id">Client</label>
                <select name="client_id">
                    @foreach ($clients as $client)
                        <option value="{{ $client->id }}">{{ $client->nom}}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit">Crear Vehicle</button>
        </form>
	</div>
@endsection