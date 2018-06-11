import React, { Component } from 'react';
import { Modal, Button , FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import Alert from './Alert'

// Field group component.
export default function FieldGroup({ id, label, help, type, warn, ...props }) {
  return (
    <div>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} 
                      autoFocus = {props.autoFocus}
                      componentClass={type}
                      onChange={props.onChange.bind(this)}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
      <Alert type="warning" warn={type === 'textarea' && warn === true}/>
    </div>
  );
}