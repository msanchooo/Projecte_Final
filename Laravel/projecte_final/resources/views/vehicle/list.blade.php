@extends('layout')

@section('title', 'Llistat de vehicles')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Llistat dde vehicles</h1>
    <a href="{{ route('vehicle_new') }}">+ Nou vehicle</a>

    @if (session('status'))
        <div>
            <strong>Success!</strong> {{ session('status') }}  
        </div>
    @endif

    <table style="margin-top: 20px;margin-bottom: 10px;">
        <thead>
            <tr>
                <th>Matricula</th><th>Marca</th><th>Model</th><th>Tipus</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($vehicles as $vehicle)
                <tr>
                    <td>{{ $vehicle->matricula }}</td><td>{{ $vehicle->marca }}</td><td>{{ $vehicle->model }}</td><td>{{ $vehicle->tipus }}</td>
                    <td>
                        <a href="{{ route('vehicle_edit', ['id' => $vehicle->id]) }}">Editar</a>
                        <a href="{{ route('vehicle_delete', ['id' => $vehicle->id]) }}">Eliminar</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <br>
@endsection