<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/animals', function() {
    echo "Menampilkan data animals";
});

Route::post('/animals', function() {
    echo "Manambahkan hewan baru";
});

Route::put('/animals/{id}', function($id) {
    echo "Mengupdate data hewan id $id";
});

Route::delete('/animals/{id}', function($id) {
    echo "Menghapus data hewan id $id";
});

use App\Http\Controllers\AnimalController;

Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);