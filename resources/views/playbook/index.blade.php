@extends('layouts.playbook-layout')

@section('header')


<h1>Playbooks</h1>
<small>Below is the list of playbooks.</small>


@endsection

@section('content')

<div class="table-responsive" style="padding: 10px 30px">
    <table id="data-table" class="playbook-data-table table table-bordered">
        <thead class="thead-default">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Categories</th>
                <th class="add-entry" id="new-item">
                    <a href="/playbooks/create">
                        <div class="row">
                            <div class="col-12 actions">
                                <i class="zmdi zmdi-plus zmdi-hc-2x"></i>
                                <!-- <span>New Entry</span> -->
                            </div>  
                        </div>
                    </a>
                </th>
            </tr>
        </thead>
    </table>
</div>



@endsection

@section('js')
<script>    
    // Fetching from API.

    $(document).ready(function() {
        var table = $(".playbook-data-table").DataTable({
        "data": {!! $entries !!},
        stateSave: true,
        columns: [
          { "data": "id", "searchable": true, "width" : "8%"},
          { "data": "title", "searchable": true},
          { "data": "description", "searchable": true },
          { 
            "data": "categories",
            "width" : "12%", 
            "searchable": true
          },
          { "sortable": false,
            "width" : "9%",
            "className":"no-padding no-border", 
              render: function (data, type, row) {

                $(table).css('border', 'red 1px solid');

                var viewEntry = '<div class="col-4 icon no-padding"><a href="/playbooks/' + row.id + '"><button type="submit" class="btn btn-link no-padding"><i class="zmdi zmdi-info zmdi-hc-md"></i></button></a></div>';    

                var editEntry = '<div class="col-4 icon no-padding"><a href="/playbooks/' + row.id + '/edit"><button type="submit" class="btn btn-link no-padding"><i class="zmdi zmdi-edit zmdi-hc-md"></i></button></a></div>';

                var deleteEntry = '<div class="col-4 icon delete no-padding">' +
                                    '<button data-toggle="modal" data-target="#modal-keyboard" class="btn btn-link no-padding" data-id="' + row.id + '"><i class="zmdi zmdi-delete zmdi-hc-md"></i></button>'+
                                  '</div>';

                return '<div class="row actions no-padding">'+viewEntry + "  " + editEntry + "  " + deleteEntry+'</div>';
            }
          }
      ],
      autoWidth: !1,
        responsive: !0,
        lengthMenu: [[15, 30, 45, -1], [
          "15 Rows",
          "30 Rows",
          "45 Rows",
          "Everything"
        ]],
        language: {
          searchPlaceholder: "Search playbooks..."
        }
        });

    });

     $('#modal-keyboard').on('show.bs.modal', function(e) {

        var id = $(e.relatedTarget).data('id');
        var link = "playbooks/" + id;

        $(e.currentTarget).find("form").attr("action", link);

        console.log(id)
      });


    // on click of delete button
    // send post request with data and field "_method" with value "DELETE"


</script>
@endsection

