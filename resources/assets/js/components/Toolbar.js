import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableItem from './TableItem';


export default function ToolBar(props) {
	return(
		<div className="row">
      <div className="col-sm"> 
        <input className="form-control form-control-lg" 
               type="text" 
               placeholder="Search" 
               onChange={props.buildList.bind(this)}/>
      </div>
      <div className="col-sm"></div>
      <div className="col-sm buttons">
        <button className = "btn btn-primary" 
                value="Create" 
                onClick={props.handle.bind(this, 'write')}>
                Add Entry
        </button>
      </div> 
    </div>
	)
}