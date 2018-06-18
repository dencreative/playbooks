@extends('layouts.playbook-layout')

@section('header')
<h1>Playbooks</h1>
<small>View your playbook.</small>
@endsection

@section('content')

    <div class="card-body">
        
        <h3 class="display-3">{{ $entry->title }}</h3>

        <div class="form-group no-pointer-events">
            <select class="categories-select" multiple="multiple" name="categories[]">
                
                @foreach($entry->categories as $category)
                    <option value="{{ $category->id }}" selected="selected">{{ $category->body }}</option>
                @endforeach
                
            </select>
        </div>

        <p class="lead">{!! $entry->description !!}</p>     
    </div>

    <div class="playbook-button card-footer">
        <a href="/playbooks/">
            <button type="button" class="btn btn-light playbook-button">Back</button>
        </a>
    </div>

@endsection



@section('js')

    <script>
        $(document).ready(function() {
            $('.categories-select').select2({
                placeholder: "No categories selected",
            });

            $('.select2-selection__rendered').find('span').hide()
        });


    </script>

@endsection