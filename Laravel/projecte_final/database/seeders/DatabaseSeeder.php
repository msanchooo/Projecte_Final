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

        DB::table('rols')->insert([
            'id' => 1,
            'nom' => 'Admin'
        ]);
        DB::table('rols')->insert([
            'id' => 2,
            'nom' => 'Client'
        ]);
        DB::table('rols')->insert([
            'id' => 3,
            'nom' => 'Treballador'
        ]);

        DB::table('users')->insert([
            'id' => 1,
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123'),
            'rol' => '1'
        ]);


        DB::table('users')->insert([
            'id' => 2,
            'email' => 'marc@gmail.com',
            'password' => Hash::make('123'),
            'rol' => 2
        ]);

        DB::table('users')->insert([
            'id' => 3,
            'email' => 'albert@gmail.com',
            'password' => Hash::make('123'),
            'rol' => 3
        ]);

        DB::table('users')->insert([
            'id' => 4,
            'email' => 'nayden@gmail.com',
            'password' => Hash::make('123'),
            'rol' => 2
        ]);

        DB::table('clients')->insert([
            'id' => 1,
            'user_id' => 1,
            'nom' => 'admin',
            'cognoms' => 'admin',
            'nif' => '00000A',
            'direccio' => 'Sin direccion',
            'movil' => '0',
        ]);


        DB::table('clients')->insert([
            'id' => 2,
            'user_id' => 2,
            'nom' => 'Marc',
            'cognoms' => 'Sancho Piedehierro',
            'nif' => '48172142B',
            'direccio' => 'Sant Celoni c/ Vallgorguina',
            'movil' => '637324811',
        ]);

        DB::table('treballadors')->insert([
            'id' => 1,
            'user_id' => 3,
            'nom' => 'Albert',
            'cognoms' => 'Perez Perez',
            'nif' => '54682546B',
            'sou' => '2100',
            'carrec' => 'Mecanico',
        ]);

        DB::table('clients')->insert([
            'id' => 3,
            'user_id' => 4,
            'nom' => 'Nayden',
            'cognoms' => 'Naydenov Andonov',
            'nif' => 'Y0704051A',
            'direccio' => 'Barcelona c/ La molina',
            'movil' => '645483177',
        ]);

        DB::table('vehicles')->insert([
            'id' => 1,
            'matricula' => 'HKL 3212',
            'marca' => 'Audi',
            'model' => 'RS3',
            'km' => '10000',
            'client_id' => 2,
        ]);

        DB::table('vehicles')->insert([
            'id' => 2,
            'matricula' => 'KLK 5521',
            'marca' => 'BMW',
            'model' => 'Serie 1',
            'km' => '1030',
            'client_id' => 2,
        ]);

        DB::table('vehicles')->insert([
            'id' => 3,
            'matricula' => 'LOP 1222',
            'marca' => 'Lamborghini',
            'model' => 'Urus',
            'km' => '500',
            'client_id' => 3,
        ]);

        DB::table('vehicles')->insert([
            'id' => 4,
            'matricula' => 'LOP 1222',
            'marca' => 'Ferrari',
            'model' => 'F-40',
            'km' => '1250',
            'client_id' => 3,
        ]);



        DB::table('serveis')->insert([
            'id' => 1,
            'nom' => 'Pastillas_Delanteras',
            'preu' => '50',
            'durada' => '0.5'
        ]);

        DB::table('serveis')->insert([
            'id' => 2,
            'nom' => 'Pastillas_Traseras',
            'preu' => '55',
            'durada' => '0.75'
        ]);

        DB::table('serveis')->insert([
            'id' => 3,
            'nom' => 'Neumatico',
            'preu' => '90',
            'durada' => '0.25'
        ]);

        DB::table('serveis')->insert([
            'id' => 4,
            'nom' => 'Lip',
            'preu' => '170',
            'durada' => '1.5'
        ]);

        DB::table('facturas')->insert(([
            'id' => 1,
            'data'=>'2023-05-03',
            'numero'=>'2023/2',
            'total'=>'635',
            'total_con_iva'=>'768.35',
            'client_id'=>2,
            'vehicle_id'=>1
        ]));

        DB::table('factura_servei')->insert(([
            'id' => 1,
            'unitats'=>1,
            'factura_id'=>1,
            'servei_id'=>1,
        ]));

        DB::table('factura_servei')->insert(([
            'id' => 2,
            'unitats'=>1,
            'factura_id'=>1,
            'servei_id'=>2,
        ]));

        DB::table('factura_servei')->insert(([
            'id' => 3,
            'unitats'=>4,
            'factura_id'=>1,
            'servei_id'=>3,
        ]));
        DB::table('factura_servei')->insert(([
            'id' => 4,
            'unitats'=>1,
            'factura_id'=>1,
            'servei_id'=>4,
        ]));

    }
}