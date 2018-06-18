<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Entry;
use App\Category;

class EntryController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $entries = Entry::with('categories')->get();

        $entries = $entries->map(function ($entry) {
            return [
                'id' => $entry->id,
                'title' => str_limit($entry->title, 20),
                'description' => str_limit(strip_tags($entry->description), 85),
                'categories' => str_limit(implode(', ', $entry->categories->pluck('body')->toArray()), 16)
            ];
        });


        return view('playbook.index', compact('entries'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('playbook.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'title' => 'required',
            'categories' => 'required',
            'description' => 'required'
        ]);

        $entry = Entry::create($request->all());

        $entry->categories()->attach($request->categories);

        return redirect()->route('playbooks.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $entry = Entry::where('id', $id)->with('categories')->first();
        return view('playbook.show', compact('entry'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $entry = Entry::find($id);

        $categories_selected = $entry->categories;
        $categories_all = Category::all();

        $categories_remaining = Category::all()->diff($categories_selected);

        return view('playbook.edit', compact('entry', 'categories_selected', 'categories_remaining'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        $entry = Entry::find($id);

        $this->validate($request, [
            'title' => 'required',
            'categories' => 'required',
            'description' => 'required'
        ]);

        $entry->update($request->all());
        $entry->categories()->detach();
        $entry->categories()->attach($request->categories);
        return redirect()->route('playbooks.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $entry = Entry::find($id);
        
        $entry->delete(); 

        return redirect()->route('playbooks.index');
    }
}
