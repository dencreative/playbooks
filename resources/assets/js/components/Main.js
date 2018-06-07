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

import { postItem } from './requests'


const ITEMS = ["Apples",
         "Broccoli",
         "Chghicken",
         "Duckg",
         "Eggs",
         "Fish",
         "Grganola",
         "Hasgh Browns",
         "Applges",
         "Broccgoli",
         "Chickegn",
         "Duck",
         "gEggs",
         "gFish",
         "gGranola",
         "gHash Browns",
         "gApples",
         "Bgroccoli",
         "jgChicken",
         "jDuck",
         "gEggs",
         "ggFish",
         "gGranola",
         "gHash Browns",
         "Aghpples",
         "Brhoccoli",
         "Chjicken",
         "Dujck",
         "Eghgs",
         "Fhish",
         "Ghranola",
         "Hhash Browns",
         "Ahpples",
         "Bhroccoli",
         "Chhicken",
         "Dhuck",
         "Ehggs",
         "Fhish",
         "Ghranola",
         "Hhash Browns",
         "Ahpples",
         "Bhroccoli",
         "Chhicken",
         "Dhguck",
         "Eggggs",
         "Figsh",
         "Grganola",
         "Hagsh Browns",
         "Apttrples",
         "Broyccoli",
         "Chijcken",
         "Ducjk",
         "Eggjs",
         "Fisjh",
         "Grajnola",
         "Hasjh Browns",
         "Appjles",
         "Brojccoli",
         "Chijcken",
         "Dujcjk",
         "Egjgs",
         "Fijsh",
         "Grjanola",
         "Hajsh Browns",
         "Apjples",
         "Brjoccoli",
         "Chjicken",
         "Duckk",
         "Eggks",
         "Fislh",
         "Gralnola",
         "Haslh Browns",
         "Applles",
         "Brolccoli",
         "Chilcken",
         "Duclk",
         "Egg;s",
         "Fiskh",
         "Grajnola",
         "Hashh Browns",
         "Applges",
         "Broccgoli",
         "Chicken",
         "Duchk",
         "Egghs",
         "Fisjh",
         "Grajnola",
         "Hasjh Browns",
         "Appkles",
         "Brojkccoli",
         "Chickken",
         "Duckk",
         "Eggs",
         "Fiksh",
         "Grkanola",
         "Haksh Browns",
         "Apkples",
         "Brkoccoli",
         "Chkicken",
         "Dukck",
         "Egkgs",
         "Fiksh",
         "Grkanola",
         "Haksh Browns",
         "Apkples",
         "Brkoccoli",
         "Chllicken",
         "Duclk",
         "Eggls",
         "Fislh",
         "Glranola",
         "Hlash Browns",
         "Alpples",
         "Blroccoli",
         "Clhicken",
         "Dluck",
         "Elggs",
         "Flish",
         "Gl;ranola",
         "Ha;sh Browns",
         "Ap;ples",
         "Br;occoli",
         "Ch;icken",
         "Du;ck",
         "Eg;gs",
         "Fi;sh",
         "Gr;anola",
         "Ha;sh Browns",
         "Ap;ples",
         "Bro'ccoli",
         "Chi'cken",
         "Duc'k",
         "Egg's",
         "Fis'h",
         "Grajnola",
         "Hasjh Browns",
         "Appljes",
         "Broccjoli",
         "Chickjen",
         "Djuck",
         "Ejggs",
         "Fjish",
         "Gjranola",
         "Hjash Browns",
         "Ajpples",
         "Bjroccoli",
         "Cjhicken",
         "Djuck",
         "Ejggs",
         "Fjish",
         "Gjranola",
         "Hkash Browns",
         "Akpples",
         "Bkroccoli",
         "Ckhicken",
         "Dkuck",
         "Ekggs",
         "Fkish",
         "Gkranola",
         "Hkash Browns",
         "Akpples",
         "Bkroccoli",
         "Ckhicken",
         "Dkluck",
         "Eglgs",
         "Filsh",
         "Grlanola",
         "Halsh Browns"]

const API = 'https://den-playbooks.app/api/';
const INDEX_QUERY = 'products';

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
      .then(response => response.json())
      .then(data => {
        let list = []
        data.map(item => {
            if (item.description) { list.push([item.description, item.id]) }
        })
      this.setState({products:list})
    })
  }

  // Update query state.
  buildList(event) {
    const query = event.target.value.toLowerCase();
    const list = this.state.products

    const newList = list.filter(item => item[0].toLowerCase().includes(query))
    this.setState({displayItems:newList, query:query})
  }

  // Handles changes in child components.
  handleChange(mode, index, id) {

    (id) ? console.log('handling id ' + id + "at index: " + index) : console.log('new id')
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
  }

  // Update the entry if confirmed.
  updateItem(newItem) {

    let list = this.state.products;
    let displayList = this.state.displayItems

    let newId = list[list.length-1][1] + 1;

    const f = (e) => {
        if (e[0] == this.state.item[0]) { 
            e[0] = newItem }
        }

    list.map(f)
    displayList.map(f)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
    })
  }

  // Add entry if confirmed.
  addItem(newItem) {

    let list =  this.state.products;
    let displayList = this.state.displayItems
    let newId = list[list.length-1][1] + 1;

    const n = [newItem, newId]

    // Push to display first.
    displayList.push(n)

    // If query is empty or missing in products - add.
    if (!list.includes(n) || !this.state.query) list.push(n)

    this.setState({
      products: list,
      displayItems:displayList,
      showModal: false,
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


