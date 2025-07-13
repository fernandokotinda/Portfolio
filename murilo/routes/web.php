<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/privado', function () {
    return view('privado');
});

// Rotas com prefixo /murilo
Route::prefix('murilo')->group(function () {
    Route::get('/', function () {
        return view('welcome');
    })->name('murilo.home');
    
    Route::get('/privado', function () {
        return view('privado');
    })->name('murilo.privado');
    
    Route::post('/enviar-contato', [ContactController::class, 'send'])
        ->name('murilo.contact.send')
        ->middleware('throttle:5,1');
});

// Rota original para compatibilidade
Route::post('/enviar-contato', [ContactController::class, 'send'])
    ->name('contact.send')
    ->middleware('throttle:5,1');