<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UrlShortenerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
// Public Routes
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::group(['middleware' => 'auth:sanctum'], function () {
  Route::get('logout', [AuthController::class, 'logout']);
  Route::post('/shorten-url', [UrlShortenerController::class, 'shorten']);
  
});
Route::get('/{shortUrl}', [UrlShortenerController::class, 'redirect']);
Route::get('/urls', [UrlShortenerController::class, 'index']);
