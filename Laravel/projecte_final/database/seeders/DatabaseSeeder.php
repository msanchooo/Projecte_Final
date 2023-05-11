<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('tipus_clients')->insert([
            'nom' => 'Empresa',
        ]);

        DB::table('tipus_clients')->insert([
            'nom' => 'Particular',
        ]);

        DB::table('users')->insert([
            'email' => 'proba@proba.com',
            'password' => Hash::make('123'),
            'rol' => 2
        ]);

        DB::table('clients')->insert([
            'user_id' => 1,
            'nom' => 'proba',
            'cognoms' => 'proba proba',
            'nif' => '00000000A',
            'direccio' => 'c/ proba',
            'movil' => '123456789',
            'tipu_id' => 2
        ]);

        DB::table('vehicles')->insert([
            'matricula' => 'bbc 1234',
            'marca' => 'audi',
            'model' => 'a1',
            'km' => '100',
            'client_id' => 1,
        ]);

        DB::table('serveis')->insert([
            'nom' => 'Pastilles',
            'preu' => '50',
            'durada' => '1'
        ]);
    }
}
