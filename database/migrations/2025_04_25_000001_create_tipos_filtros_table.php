<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Modificar tabla existente de filtros
        Schema::table('filtros', function (Blueprint $table) {
            // Cambiar id a id_filtro
            $table->renameColumn('id', 'id_filtro');
            // Cambiar name a nombre
            $table->renameColumn('name', 'nombre');
            // Modificar longitud de nombre
            $table->string('nombre', 100)->change();
            // Agregar nuevas columnas
            $table->string('slug', 100)->unique()->after('nombre'); // Para URLs amigables y JSON key
            $table->enum('tipo_input', ['range', 'checkbox', 'select', 'radio'])->after('slug');
            $table->string('unidad', 20)->nullable()->after('tipo_input'); // Para rangos: cm, kg, $, etc.
            $table->text('descripcion')->nullable()->after('unidad'); // Ayuda para el usuario
            $table->integer('orden')->default(0)->after('descripcion');
            $table->boolean('activo')->default(true)->after('orden');
            // obligatorio ya existe, solo lo movemos
            
            $table->index(['activo', 'orden']);
        });

        // Tabla de opciones para filtros tipo select, checkbox, radio
        Schema::create('opciones_filtros', function (Blueprint $table) {
            $table->bigIncrements('id_opcion');
            $table->unsignedBigInteger('id_filtro');
            $table->string('valor', 100);
            $table->string('etiqueta', 100); // Lo que ve el usuario
            $table->string('color', 7)->nullable(); // Para colores: #FF0000
            $table->integer('orden')->default(0);
            $table->boolean('activo')->default(true);
            $table->timestamps();
            
            $table->foreign('id_filtro')->references('id_filtro')->on('filtros')->onDelete('cascade');
            $table->index(['id_filtro', 'activo', 'orden']);
        });

        // Relación entre subcategorías y filtros
        Schema::create('subcategoria_filtros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_subcategoria');
            $table->unsignedBigInteger('id_filtro');
            $table->integer('orden')->default(0); // Orden específico para esta subcategoría
            $table->boolean('activo')->default(true);
            $table->timestamps();
            
            $table->foreign('id_subcategoria')->references('id_subcategoria')->on('subcategorias')->onDelete('cascade');
            $table->foreign('id_filtro')->references('id_filtro')->on('filtros')->onDelete('cascade');
            
            $table->unique(['id_subcategoria', 'id_filtro']);
            $table->index(['id_subcategoria', 'activo', 'orden']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subcategoria_filtros');
        Schema::dropIfExists('opciones_filtros');
        
        // Revertir cambios en tabla filtros
        Schema::table('filtros', function (Blueprint $table) {
            $table->dropIndex(['activo', 'orden']);
            $table->dropColumn(['slug', 'tipo_input', 'unidad', 'descripcion', 'orden', 'activo']);
            $table->renameColumn('id_filtro', 'id');
            $table->renameColumn('nombre', 'name');
        });
    }
};