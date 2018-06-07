import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableItem from './TableItem';

export default function Table(props) {
	return(
		<table className="table table-bordered table-striped playbook-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item,index) => 
            <TableItem description={item.description}
                       id={item.id} 
                       index={index} 
                       handle={props.handle.bind(this)}
                       key={index}/>) 
        }
      </tbody>
    </table>
	)
}



