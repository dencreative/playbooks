<?php

/**
** Basic Routes for a RESTful service:
**
** Route::get($uri, $callback);
** Route::post($uri, $callback);
** Route::put($uri, $callback);
** Route::delete($uri, $callback);
**
**/

use Illuminate\Http\Request;
use App\Product;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('products', 'EntryController@index');
 
Route::get('products/{product}', 'EntryController@show');
 
Route::post('products','EntryController@store');
 
Route::put('products/{product}','EntryController@update');
 
Route::delete('products/{product}', 'EntryController@delete');
