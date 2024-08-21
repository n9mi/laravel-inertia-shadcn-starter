<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
            Seed roles
        */
        $adminRole = Role::create([
            'id'=> 'role_admin',
            'display_name' => 'Admin'
        ]);
        $userRole = Role::create([
            'id'=> 'role_user',
            'display_name' => 'User'
        ]);

        /*
            Seed admin
        */
        $adminUser = User::create([
            'name' => 'Admin 1',
            'email' => 'admin@test.com',
            'password' => Hash::make('password'),
        ]);
        $adminUser->roles()->attach($adminRole);

        /*
            Seed user
        */
        $user = User::create([
            'name' => 'User 1',
            'email' => 'user@test.com',
            'password' => Hash::make('password'),
        ]);
        $user->roles()->attach($userRole);

        /*
            Seed admin-user
        */
        $adminUser2 = User::create([
            'name' => 'Admin User 1',
            'email' => 'admin.user@test.com',
            'password' => Hash::make('password'),
        ]);
        $adminUser2->roles()->attach($adminRole);
        $adminUser2->roles()->attach($userRole);
    }
}
