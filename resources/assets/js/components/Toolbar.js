import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default function ToolBar(props) {

  const onClick = () => props.handle.bind(this, 'write')
	
  return(

		<div className="toolbar toolbar--inner">
      <div className="toolbar__label">29 Total todo lists</div>

      <div className="actions">
          <i className="actions__item zmdi zmdi-search" data-ma-action="toolbar-search-open"></i>
          <div className="dropdown actions__item">
              <i className="zmdi zmdi-sort" data-toggle="dropdown"></i>

              <div className="dropdown-menu dropdown-menu-right">
                  <a href="" className="dropdown-item">Newest to Oldest</a>
                  <a href="" className="dropdown-item">Oldest to Newest</a>
              </div>
          </div>
      </div>

      <div className="toolbar__search">
          <input className="form-control form-control-lg" 
                 type="text" 
                 placeholder="Search" 
                 onChange={props.buildList.bind(this)}/>

          <i className="toolbar__search__close zmdi zmdi-long-arrow-left" data-ma-action="toolbar-search-close"></i>
      </div>
  </div>
	)
}

const test = () => {
  return (
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
                onClick={onClick()}>
                Add Entry
        </button>
      </div> 
    </div>
    )
}

