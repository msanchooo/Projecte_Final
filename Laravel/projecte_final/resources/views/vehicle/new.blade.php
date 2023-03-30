@extends('layout')

@section('title', 'Nou vehicle')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Nou Vehicle</h1>
    <a href="{{ route('vehicles_list') }}">&laquo; Torna</a>
	<div style="margin-top: 20px">
        <form method="POST" action="{{ route('vehicle_insert') }}">
            @csrf
            <div>
                <label for="matricula">Matricula</label>
                <input type="text" name="matricula" />
            </div>
            <div>            
                <label for="marca">Marca</label>
                <input type="text" name="marca"  />
            </div>
            <div>
                <label for="model">Model</label>
                <input type="text" name="model"  />
            </div>
            <div>
                <label for="tipus">Tipus</label>
                <select name="tipus">
                    <option value="1">Cotxe</option>
                    <option value="2">Moto</option>
                </select>
            </div>
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