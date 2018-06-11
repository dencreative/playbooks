import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap'
import friendlyTime from 'friendly-time'

export default class ListView extends Component {
  render() {
  	return(
      <List items={this.props.items}
            handle={this.props.handle.bind(this)}/>
  	)
  }
}

const ListItem = ({item, index, ...props}) => {
  const id = item.id;
  const time = new Date(item.updated_at)
  return (
    <div className="listview__item">
      <div className="custom-control custom-control--char todo__item">
        <span className="todo__info">
          <span><strong>{item.title}</strong></span><br/>
          <span>{item.description}</span>
          <small>{friendlyTime(time)}</small>
        </span>
        <Categories categories={['cat1', 'cat2', 'dog0']}/>
      </div>
      <div className="actions listview__actions">
        <div className="dropdown actions__item">
          <i className="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
          <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" onClick={props.handle.bind(this, 'read', index, id)}>Read</a>
              <a className="dropdown-item" onClick={props.handle.bind(this, 'edit', index, id)}>Edit</a>
              <a className="dropdown-item" onClick={props.handle.bind(this, 'delete', index, id)}>Delete</a>
          </div>
        </div>
      </div>
    </div>
    )
}

function Categories({categories}) {

  const renderCategories = () => {
    return categories.map((c, i)=> <span key={i}>{c}</span>)
  }

  return (
    <span className="listview__attrs">
      {renderCategories()}
    </span>
    )
}

function List({...props}) { 
  const items = props.items.map((item, index) => 
    <ListItem item={item} 
              index={index} 
              handle={props.handle.bind(this)} 
              key={index}/>
    )
  
  return(
    <div className="listview listview--bordered">{items}</div>
    )
}



