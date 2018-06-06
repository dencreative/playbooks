import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableItem from './TableItem';

export default function Table(props) {
	return(
		<table className="table table-bordered table-striped playbook-table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item,index) => 
            <TableItem item={item} 
                       index={index} 
                       handle={props.handle.bind(this)}
                       key={index}/>) 
        }
      </tbody>
    </table>
	)
}



