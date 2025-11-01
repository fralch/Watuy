<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Drop foreign key and column from productos table
        Schema::table('productos', function (Blueprint $table) {
            if (Schema::hasColumn('productos', 'id_subcategoria')) {
                $table->dropForeign(['id_subcategoria']);
                $table->dropColumn('id_subcategoria');
            }
        });

        // Drop related pivot tables first (due to foreign key constraints)
        Schema::dropIfExists('subcategoria_filtros');
        Schema::dropIfExists('marca_categoria');

        // Drop main tables
        Schema::dropIfExists('subcategorias');
        Schema::dropIfExists('categorias');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Recreate categorias table
        Schema::create('categorias', function (Blueprint $table) {
            $table->bigIncrements('id_categoria');
            $table->string('nombre', 200);
            $table->text('descripcion')->nullable();
            $table->string('img', 255)->nullable();
            $table->string('video', 255)->nullable();
            $table->timestamps();
        });

        // Recreate subcategorias table
        Schema::create('subcategorias', function (Blueprint $table) {
            $table->bigIncrements('id_subcategoria');
            $table->string('nombre', 100);
            $table->text('descripcion')->nullable();
            $table->unsignedBigInteger('id_categoria');
            $table->string('img', 255)->nullable();
            $table->timestamps();

            $table->foreign('id_categoria')
                ->references('id_categoria')
                ->on('categorias')
                ->onDelete('cascade');
        });

        // Recreate marca_categoria pivot table
        Schema::create('marca_categoria', function (Blueprint $table) {
            $table->unsignedBigInteger('marca_id');
            $table->unsignedBigInteger('categoria_id');
            $table->timestamps();

            $table->primary(['marca_id', 'categoria_id']);

            $table->foreign('marca_id')
                ->references('id_marca')
                ->on('marcas')
                ->onDelete('cascade');

            $table->foreign('categoria_id')
                ->references('id_categoria')
                ->on('categorias')
                ->onDelete('cascade');
        });

        // Recreate subcategoria_filtros table
        Schema::create('subcategoria_filtros', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_subcategoria');
            $table->unsignedBigInteger('id_filtro');
            $table->integer('orden')->default(0);
            $table->boolean('activo')->default(true);
            $table->timestamps();

            $table->foreign('id_subcategoria')
                ->references('id_subcategoria')
                ->on('subcategorias')
                ->onDelete('cascade');

            $table->foreign('id_filtro')
                ->references('id_filtro')
                ->on('filtros')
                ->onDelete('cascade');
        });

        // Add id_subcategoria column back to productos table
        Schema::table('productos', function (Blueprint $table) {
            $table->unsignedBigInteger('id_subcategoria')->nullable()->after('nombre');
            $table->foreign('id_subcategoria')
                ->references('id_subcategoria')
                ->on('subcategorias')
                ->onDelete('set null');
        });
    }
};
