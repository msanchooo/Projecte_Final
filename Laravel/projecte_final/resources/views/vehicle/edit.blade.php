@extends('layout')

@section('title', 'Editar Vehicle')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Editar Vehicle</h1>
    <a href="{{ route('vehicle_list') }}">&laquo; Torna</a>
	<div style="margin-top: 20px">
        <form method="POST" action="{{ route('vehicle_edit', ['id' => $vehicle->id]) }}">
            @csrf
            <div>
                <label for="matricula">Matricula</label>
                <input type="text" name="matricula" value="{{ $vehicle->matricula }}" />
            </div>
            <div>            
                <label for="marca">Marca</label>
                <input type="text" name="marca" value="{{ $vehicle->marca }}"  />
            </div>
            <div>
                <label for="model">Model</label>
                <input type="text" name="model" value="{{ $vehicle->model }}" 
            </div>
            <button type="submit">Desar</button>
        </form>
	</div>
@endsection