<?php

use Illuminate\Database\Seeder;
use App\Entry;

class EntryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 1000; $i++) {
          Entry::create([
            'title' => $faker->title,
            'description' => $faker->paragraph,
          ]);
        }

    }
}
