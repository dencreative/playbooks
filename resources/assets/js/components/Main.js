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

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'mode': '','query': '','item': '',
      'allItems': ["Apples",
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
         "Halsh Browns"],
      'displayItems': [],
      'showModal' : false
    }
  }

  // Update query state.
  buildList(event) {
    const query = event.target.value.toLowerCase();
    const list = this.state.allItems    
    const newList = list.filter(item => item.toLowerCase().includes(query))
    this.setState({displayItems:newList, query:query})
  }

  // Handles changes in child components.
  handleChange(mode, index) {
    this.setState({mode:mode, 
                   item: (!this.state.query) ? this.state.allItems[index] : this.state.displayItems[index], 
                   showModal: true})
  }

  // Closing modal.
  handleCloseModal() {
    this.setState({showModal:false});
  }

  // Delete the entry if confirmed.
  removeItem() {
    const item = this.state.item
    console.log('Removing: ' + item)
    this.setState({
        item:'',
        showModal:false,
        allItems: this.state.allItems.filter(el => el !== item),
        displayItems: this.state.displayItems.filter(el => el !== item)
    })
  }

  // Update the entry if confirmed.
  updateItem(newItem) {

    // Post data to API.
    postItem(newItem)

    const index = this.state.allItems.indexOf(this.state.item)
    const list = this.state.allItems

    if (index !== -1) list[index] = newItem
    else list.push(newItem)

    this.setState({
      item: '',
      showModal: false,
      allItems: list,
    })
  }


  render() {
    const query = this.state.query
    const items = (!query) ? this.state.allItems : this.state.displayItems;
    const Modal = (this.state.mode === '') ? ReadModal : MODALS[this.state.mode]

    return (
      <div>
        <div className="container-fluid">
          
          <Alert type="info"/>

          <ToolBar buildList={this.buildList.bind(this)} 
                   handle={this.handleChange.bind(this)}/>

          <Table   items={(!query) ? this.state.allItems : this.state.displayItems}
                   handle = {this.handleChange.bind(this)}/>
          
          <Alert type="danger" warn={this.state.displayItems.length===0 && query}/> 

        </div>
        <Modal animation = {false}
               item = {this.state.item}
               show={this.state.showModal} 
               handleCloseModal={this.handleCloseModal.bind(this)}
               removeItem={this.removeItem.bind(this)}
               updateItem={this.updateItem.bind(this)}/>
      </div>
    );
  }
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}


