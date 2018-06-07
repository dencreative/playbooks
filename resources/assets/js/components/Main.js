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
const INDEX_QUERY = 'products';
const POST_QUERY = 'products';
const PUT_QUERY = 'products/'

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
    console.log("Removing: " + this.state.item)
    
    const item = this.state.item
    this.setState({
        item:'',
        showModal:false,
        products: this.state.products.filter(el => el !== item),
        displayItems: this.state.displayItems.filter(el => el !== item)
    })

    fetch(API + PUT_QUERY + this.state.item.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => console.log(response))
  }

  // Update the entry if confirmed.
  updateItem(newItem) {

    const id = this.state.item.id

    let list = this.state.products;
    let displayList = this.state.displayItems

    const f = (e) => {
        if (e == this.state.item) { 
            e.description = newItem }
        }

    list.map(f)
    displayList.map(f)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
    })

    // Send post request.
    fetch(API + PUT_QUERY + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newItem,
        price: 100,
        availability: true,
        description: newItem
      })
    })
  }

  // Add entry if confirmed.
  addItem(newItem) {


    let list =  this.state.products;
    let displayList = this.state.displayItems
    let newId = list[0].id + 1;

    const n = {description:newItem, title:newItem, id:newId}

    // Push to display first.
    displayList.unshift(n)

    // If query is empty or missing in products - add.
    if (!list.includes(n) || !this.state.query) list.unshift(n)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
    })

    // Send post request.
    fetch(API + POST_QUERY, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newItem,
        price: 100,
        availability: true,
        description: newItem
      })
    })
  }


  render() {
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


