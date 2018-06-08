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
use App\Entry;

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
Route::get('entries', 'EntryController@index');
 
Route::get('entries/{entry}', 'EntryController@show');
 
Route::post('entries','EntryController@store');
 
Route::put('entries/{entry}','EntryController@update');
 
Route::delete('entries/{entry}', 'EntryController@delete');
