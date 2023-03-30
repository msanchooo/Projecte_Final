@extends('layout')

@section('title', 'Editar Client')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Editar Client</h1>
    <a href="{{ route('clients_list') }}">&laquo; Torna</a>
	<div style="margin-top: 20px">
        <form method="POST" action="{{ route('client_update', ['id' => $client->id]) }}">
            @csrf
            <div>
                <label for="nom">Nom</label>
                <input type="text" name="nom" value="{{ $client->nom }}" />
            </div>
            <div>            
                <label for="cognoms">Cognoms</label>
                <input type="text" name="cognoms" value="{{ $client->cognoms }}" />
            </div>
            <div>
                <label for="NIF">NIF</label>
                <input type="text" name="NIF" value="{{ $client->NIF }}" />
            </div>

            <button type="submit">Editar Client</button>
        </form>
	</div>
@endsection