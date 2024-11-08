<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;
use Illuminate\Container\Attributes\RouteParameter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/students', [StudentController::class,'index']);
    Route::get('/students/{id}', [StudentController::class,'show']);
    Route::post('/students', [StudentController::class,'store']);
    Route::put('/students/{id}', [StudentController::class,'update']);
    Route::delete('/students/{id}', [StudentController::class,'destroy']);
});

// Route::get('/students', [StudentController::class,'index']) -> middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);