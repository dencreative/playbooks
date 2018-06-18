@if (count($errors))
    <div class = "alert alert-danger row">
        <div class="col-md-8">
            @foreach ($errors->all() as $error)
                
                <div>{{ $error }}</div>
                
            @endforeach
        </div>
    </div>
@endif