<div class="modal fade" id="modal-keyboard" data-keyboard="false" tabindex="-1" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title pull-left">No please don`t do it!</h5>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this entry?<br>This action can not be reversed. 
            </div>
            <div class="modal-footer">
                
                <form method="POST" action="playbooks/">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="_method" value="DELETE">
                    <button type="submit" class="btn btn-link" style="color:#faa900; background-color:#252525; font-weight:500;">DELETE</button>
                </form>

                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

{{-- 
<form method="POST" action="/playbooks/' + row.id + '">' +
                                   '<input type="hidden" name="_token" value="' + CSRF_TOKEN + '">' +
                                    '<input type="hidden" name="_method" value="DELETE">' +
                                    '<button type="submit" class="btn btn-link no-padding"><i class="zmdi zmdi-delete zmdi-hc-md"></i></button>'+
                                  '</form>  --}}