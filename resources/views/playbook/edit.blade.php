@extends('layouts.playbook-layout')

@section('header')
<h1>Playbooks</h1>
<small>Edit your playbook.</small>
@endsection

@section('content')

    <form action="/playbooks/{!!$entry->id!!}" method="POST">

      <input type="hidden" name="_token" value="{!! csrf_token() !!}">
      <input type="hidden" name="_method" value="PUT">

        <div class="card-body" style="z-index: 0;">

            <div class="form-group">
                <input name = "title" type="text" class="form-control form-control-lg" value="{!! $entry->title !!}"></input>
                <i class="form-group__bar"></i>
            </div>

            <div class="form-group">
                <select class="categories-select" multiple="multiple" name="categories[]">
                    
                    @foreach($categories_selected as $category)
                        <option value="{{ $category->id }}" selected="selected">{{ $category->body }}</option>
                    @endforeach
                    @foreach($categories_remaining as $category)
                        <option value="{{ $category->id }}">{{ $category->body }}</option>
                    @endforeach
                </select>
            </div>

            <textarea name = "description" class = "trumbowyg-box" data-id="{!! $entry->id !!}">
                {!! $entry->description !!}
            </textarea>
            
            <button type="submit" class="btn btn-light playbook-button">Submit</button>
            <a href="/playbooks">
                <button type="button" class="btn btn-light playbook-button">Back</button>
            </a>
        </div>

    </form>

@endsection

@section('js')
    
    <script>

        var id = $('.trumbowyg-box').data("id");
        var URL = '/playbooks/'+id;
        console.log(id)

        $('.trumbowyg-box').trumbowyg({
            svgPath:'/assets/icons/wysiwyg.svg',
            btns: [
                ['viewHTML'],
                ['undo', 'redo'], // Only supported in Blink browsers
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['link'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['submit']
            ]
        });

        $(document).ready(function() {
            $('.categories-select').select2({
                placeholder: "Select categories"
            });

        });
    </script>
    
@endsection