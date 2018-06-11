<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', 'SlackController@test');
Route::resource('/', 'PlaybookController');

Route::get('/example', function () {
    return view('playbook');
});

Route::get('/home', function () {
    return view('home');
});



Auth::routes();

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
