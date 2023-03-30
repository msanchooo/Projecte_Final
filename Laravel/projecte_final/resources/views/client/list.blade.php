@extends('layout')

@section('title', 'Llistat de clients')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Llistat de clients</h1>
    <a href="{{ route('client_insert') }}">+ Nou Client</a>

    @if (session('status'))
        <div>
            <strong>Success!</strong> {{ session('status') }}  
        </div>
    @endif

    <table style="margin-top: 20px;margin-bottom: 10px;">
        <thead>
            <tr>
                <th>Nom</th><th>Cognoms</th><th>NIF</th><th>user_id</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($clients as $client)
                <tr>
                    <td>{{ $client->nom }}</td>
                    <td>{{ $client->cognoms }}</td>
                    <td>{{ $client->NIF }}</td>
                    <td>{{ $client->user_id }}</td>

                    <td>
                        <a href="{{ route('client_update', ['id' => $client->id]) }}">Editar</a>
                        <a href="{{ route('client_delete', ['id' => $client->id]) }}">Eliminar</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <br>
@endsection