<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entry;

class EntryController extends Controller
{
    public function index()
    {
        return Entry::all();
    }
 
    public function show(Entry $entry)
    {
        return $entry;
    }
 
    public function store(Request $request)
    {

        $entry = Entry::create($request->all());
 
        return response()->json($entry, 201);
    }
 
    public function update(Request $request, Entry $entry)
    {
        $entry->update($request->all());
 
        return response()->json($entry, 200);
    }
 
    public function delete(Entry $entry)
    {
        $entry->delete();
 
        return response()->json(null, 204);
    }
}
