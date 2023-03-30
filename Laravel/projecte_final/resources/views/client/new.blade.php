@extends('layout')

@section('title', 'Nou client')

@section('stylesheets')
    @parent
@endsection

@section('content')
    <h1>Nou Client</h1>
    <a href="{{ route('clients_list') }}">&laquo; Torna</a>
	<div style="margin-top: 20px">
        <form method="POST" action="{{ route('client_insert') }}">
            @csrf
            <div>
                <label for="...">...</label>
                <input type="text" name="..." />
            </div>
            <div>            
                <label for="...">...</label>
                <input type="text" name="..."  />
            </div>
            <div>
                <label for="...">...</label>
                <input type="text" name="..."  />
            </div>
            <button type="submit">Crear Client</button>
        </form>
	</div>
@endsection