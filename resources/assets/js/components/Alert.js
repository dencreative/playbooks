import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert as A } from 'react-bootstrap';


export default function Alert(props) {

	const test = (type) => {
		switch (type) {
			case 'danger': return <div><strong>Sorry!</strong> No items found.</div>
			case 'info': return <div><strong>Success!</strong> Changes saved.</div>
		}
	}

	if (!props.warn) return null;

  return (
    <A bsStyle={props.type} className='alert'>
      {test(props.type)}
    </A>
  )
}