@extends('layouts.playbook-layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                
                <div class="card-header">
                    
                </div>

                

                <div class="card-body">

                    <div class="jumbotron">
                            
                        <h1 class="display-3">Hello, {{ Auth::user()->name }}!</h1>
                        <p class="lead">This is a simple application for displaying the Den Playbooks. It supports the create/read/update/delete functionality.</p>

                        <hr class="my-4">

                        
                        <a class="btn btn-primary btn-lg" href="/playbooks" role="button">Playbooks</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
