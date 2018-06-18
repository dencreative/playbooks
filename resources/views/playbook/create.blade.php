@extends('layouts.playbook-layout')

@section('header')
<h1>Playbooks</h1>
<small>Create a new playbook.</small>
@endsection

@section('content')

    <form action="/playbooks" method="POST">

      <input type="hidden" name="_token" value="{!! csrf_token() !!}">
      <input type="hidden" name="_method" value="POST">

        <div class="card-body" style="z-index: 0;">
            
            <div class="form-group">
                <input name = "title" type="text" class="form-control form-control-lg" placeholder="New Title">
                <i class="form-group__bar"></i>
            </div>

            <div class="form-group">
                <select class="categories-select" multiple="multiple" name="categories[]">
                    
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}">{{ $category->body }}</option>
                    @endforeach
                </select>
            </div>
            

            <textarea name ="description" class="trumbowyg-box" placeholder="New Description"></textarea>
            <button type="submit" class="btn btn-light playbook-button">Submit</button>
            <a href="/playbooks">
                <button type="button" class="btn btn-light playbook-button">Back</button>
            </a>
        </div>

    </form>

@endsection

@section('js')
    
    <script>

        $('.trumbowyg-box').trumbowyg({
            svgPath:'/assets/icons/wysiwyg.svg'
        });

        $(document).ready(function() {
            $('.categories-select').select2({
                placeholder: "Select categories"
            });

        });
    </script>
    
@endsection
