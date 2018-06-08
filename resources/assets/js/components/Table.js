import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap'

export default class Table extends Component {
  render() {
  	return(
      <List items={this.props.items}
            handle={this.props.handle.bind(this)}/>
  	)
  }
}

const onClick = () => console.log('reee')

const ListItem = ({item, index, ...props}) => {
  const id = item.id;
  return (
    <div className="listview__item">
      <div className="custom-control custom-control--char todo__item">
        <span className="todo__info">
          <span><strong>{item.title}</strong></span>
          <span>{item.description}</span>
          <small>Today at 8.30 AM</small>
        </span>
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

const DropDown = () => 
    <DropdownButton
      bsStyle={'default'}
      title={'zz'}
      key={1}
      id={1}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>


function List({...props}) { 
  const items = props.items.map((item, index) => 
    <ListItem item={item} index={index} handle={props.handle.bind(this)} key={index}/>
    )
  
  return(
    <div className="listview listview--bordered">{items}</div>
    )
}



