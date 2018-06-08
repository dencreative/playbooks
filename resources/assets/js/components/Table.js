import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Table extends Component {
  render() {
  	return(
      <List items={this.props.items}
            handle={this.props.handle.bind(this)}/>
  	)
  }
}

const ListItem = ({item, index, ...props}) => {
  const id = item.id;
  return (
    <div class="listview__item">
      <div class="custom-control custom-control--char todo__item">
        <span class="todo__info">
          <span><strong>{item.title}</strong></span>
          <span>{item.description}</span>
          <small>Today at 8.30 AM</small>
        </span>
      </div>
      <div class="actions listview__actions">
        <button className = "btn btn-info" value="Read" onClick={props.handle.bind(this, 'read', index, id)}>Read</button>
        <button className = "btn btn-primary" value="Edit" onClick={props.handle.bind(this, 'edit', index, id)}>Edit</button>
        <button className = "btn btn-danger" value="Delete" onClick={props.handle.bind(this, 'delete', index, id)}>Delete</button>
        <div class="dropdown actions__item">
          <i class="zmdi zmdi-more-vert" data-toggle="dropdown"></i>
          <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="">Delete</a>
          </div>
        </div>
      </div>
    </div>
    )
}

function List({...props}) { 
  const items = props.items.map((item, index) => 
    <ListItem item={item} index={index} handle={props.handle.bind(this)} key={index}/>
    )
  
  return(
    <div className="listview listview--bordered">{items}</div>
    )
}



