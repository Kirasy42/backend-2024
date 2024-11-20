<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/animals', function () {
    echo'Menampilkan data Animals';
});

Route::post('/animals', function () {
    echo'Menambahkan Hewan baru kedalam data Animals';
});

Route::put('/animals/{id}', function ($id) {
    echo'Mengupdate data Animals. Id: $id';
});

Route::delete('/animals/{id}', function ($id){
    echo'Menghapus seekor Hewan dari data Animal. Id: $id';
});