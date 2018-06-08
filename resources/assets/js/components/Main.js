import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ReadModal, MODALS} from './Modals';
import ToolBar from './ToolBar';
import Table from './Table';
import Alert from './Alert';

const API = 'https://den-playbooks.app/api/';
const INDEX_QUERY = 'entries'

const sendRequest = (method, id, item, description) => {

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

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
       mode: '',query: '',item: '',
       displayItems: [],
       products: [],
       showModal : false,
    }
  }

  componentWillMount() {
    // Get all items from db.
    // Bunch up into 2-len arrays [item, id]
    fetch(API + INDEX_QUERY)
    .then((response) => response.json())
    .then(data => {
      let list = []
      data.map(item => {
          if (item.description) { list.push({id: item.id, title:item.title, description: item.description}) }
      })
    // Reverse to make newest entries appear at the top.  
    this.setState({products:list.reverse()})
    })
  }

  // Update query state.
  buildList(event) {
    const query = event.target.value.toLowerCase();
    const list = this.state.products

    const newList = list.filter(item => item.description.toLowerCase().includes(query))
    this.setState({displayItems:newList, query:query})
  }

  // Handles changes in child components.
  handleChange(mode, index, id) {
    this.setState({mode: mode, 
                   item: (!this.state.query && mode !== 'write') ? this.state.products[index] : this.state.displayItems[index], 
                   showModal: true,})
  }

  // Closing modal.
  handleCloseModal() {
    this.setState({showModal:false});
  }

  // Delete the entry if confirmed.
  removeItem() {
    const item = this.state.item
    this.setState({
        item:'',
        showModal:false,
        products: this.state.products.filter(el => el !== item),
        displayItems: this.state.displayItems.filter(el => el !== item)
    })

    // Send request.
    sendRequest('DELETE', item.id)
  }

  // Update the entry if confirmed.
  updateItem(newTitle, newDescription) {

    const item = this.state.item

    let list = this.state.products;
    let displayList = this.state.displayItems

    const f = (e) => {
        if (e == item) { 
            e.title = newTitle
            e.description = newDescription }
        }

    list.map(f)
    displayList.map(f)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
    })

    // Send request.
    sendRequest('PUT', item.id, newTitle, newDescription)
  }

  // Add entry if confirmed.
  // this.state.item is undefined.
  addItem(newTitle, newDescription) {

    let list =  this.state.products;
    let displayList = this.state.displayItems

    // First index because whole list is reversed. See componentDidMount.
    let newId = list[0].id + 1;

    // Constructing new item object to insert into table.
    const n = {title:newTitle, description:newDescription, id:newId}

    // Unshift to display first.
    displayList.unshift(n)

    // If query is empty or missing in products - add.
    if (!list.includes(n) || !this.state.query) list.unshift(n)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
    })

    // Send request.
    sendRequest('POST', '', newTitle, newDescription)

  }


  render() {
    // Search query
    const query = this.state.query

    // Decides view: initial (display all) or query (display sorted.)
    const items = (!query) ? this.state.products : this.state.displayItems;

    // Decides the type of modal at runtime.
    const Modal = (this.state.mode === '') ? ReadModal : MODALS[this.state.mode]

    return (
      <div>
        <div className="container-fluid">
          
          <ToolBar buildList={this.buildList.bind(this)} 
                   handle={this.handleChange.bind(this)}/>

          <Table   items={items}
                   handle = {this.handleChange.bind(this)}/>
          
          <Alert type="danger" warn={this.state.displayItems.length===0 && query}/> 

        </div>
        <Modal item = {this.state.item}
               show={this.state.showModal} 
               handleCloseModal={this.handleCloseModal.bind(this)}
               removeItem={this.removeItem.bind(this)}
               updateItem={this.updateItem.bind(this)}
               addItem={this.addItem.bind(this)}/>
      </div>
    );
  }
}

export default Main;


if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}


