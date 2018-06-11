// Components.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './ToolBar';
import ListView from './ListView';
import Alert from './Alert';
import ModalController  from './ModalController'

// Utility functions.
import { sendRequest } from './utils'

const API = 'https://den-playbooks.app/api/';
const INDEX_QUERY = 'entries'

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
          if (item.description) { 
            list.push({
              id: item.id, 
              title:item.title, 
              description: item.description, 
              created_at: item.created_at,
              updated_at: item.updated_at
            }) 
          }
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

  
    return (
      <div className="todo">
        <div className="card">
         
          <ToolBar total={this.state.products.length}
                   buildList={this.buildList.bind(this)} 
                   handle={this.handleChange.bind(this)}/>


          <ListView items={items}
                    handle = {this.handleChange.bind(this)}/>
          
          <Alert type="danger" 
                 warn={this.state.displayItems.length===0 && query}/> 

          <ModalController item = {this.state.item}
                           show={this.state.showModal} 
                           mode={this.state.mode}
                           handleCloseModal={this.handleCloseModal.bind(this)}
                           removeItem={this.removeItem.bind(this)}
                           updateItem={this.updateItem.bind(this)}
                           addItem={this.addItem.bind(this)}/>
          </div>

          <AddButton handle={this.handleChange.bind(this, 'write')}/>

      </div>
    );
  }
}

const AddButton = (props) => {
  return (
    <button className="btn btn-primary btn--action btn--fixed zmdi zmdi-plus"
         onClick={props.handle.bind(this, 'write')}> 
    </button>
    )
}

export default Main;


if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}


