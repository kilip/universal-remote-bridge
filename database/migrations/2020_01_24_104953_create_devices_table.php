<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->unsignedBigInteger('device_id');
            $table->string("name");
            $table->string('type');
            $table->string('manufacturer')->nullable();
            $table->string('model')->nullable();
            $table->string('data_type')->nullable();

            $table->timestamps();
            $table->unique('device_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
