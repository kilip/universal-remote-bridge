<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('devices')->insert([
            [
                'device_id' => 1001,
                'name' => '44 Keys RGB Led Strip Controller',
                'manufacturer' => null,
                'type' => 'RGB Led Strip Remote',
                'model' => null,
                'data_type' => 'tasmota'
            ]
        ]);
    }
}
