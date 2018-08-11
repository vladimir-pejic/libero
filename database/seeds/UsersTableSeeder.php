<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'first_name' => 'Vladimir',
            'last_name' => 'Pejic',
            'email' => 'vladimir.pejic@gmail.com',
            'password' => bcrypt('Vladimir123'),
        ]);
    }
}
