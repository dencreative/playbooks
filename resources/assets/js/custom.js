
// Referencing our table.
var table;

$('.delete-entry').click(function(e) {

  console.log('delete')

  e.preventDefault();

  var id = $(this).data('id');

  console.log(id)

  $('.delete-playbook-entry-modal').data('id', id);

});


$('.delete-playbook-entry-modal').click(function() {
    var id = $(this).data('id');

    console.log($(this).data())
    table.row($('tr[data-id="' + id + '"]')).remove().draw();
    sendRequest('DELETE', id)

});


$('.add-playbook-entry-modal').click(function() {


  // get data from modal

  // send data to db

  // refresh the page 

  var title = $('.form-group').find('input[placeholder="Title"]').val();
  var description = $('.form-group').find('input[placeholder="Description"]').val();

  var id = parseInt(table.row(':last').data()[0]) + 1
  var actions = (table.row(':last').data().pop())

  const regex = /(<a data-id=")\d*(")/gm;

  actions = actions.replace(regex, "$1"+id+"$2")

  var rowNode = table.row.add( [id, title, 'yeet', description, actions] ).draw().node()

  $( rowNode ).attr('data-id',id).css('color', 'red')

  console.log(rowNode)


  sendRequest('POST', '', title, description)


});



const sendRequest = (method, id='', item, description) => {

  const API = 'https://den-playbooks.app/api/';
  const INDEX_QUERY = 'entries'

  // Decide endpoint.
  let QUERY = '';
  switch (method) {
    case ('GET'): QUERY = 'entries'; break;
    case ('POST'): QUERY = 'entries'; break;
    case ('PUT'): QUERY = 'entries/'; break;
    case ('DELETE'): QUERY = 'entries/'; break;
  };

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  // Send request.
  fetch(API + QUERY + id, {
    method: method,
    headers: headers,
    body: JSON.stringify({
      title: item,
      description: description
    })
  }).then(response => console.log(response))
}
