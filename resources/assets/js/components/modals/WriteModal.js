import React, { Component } from 'react';
import { Modal, Button , FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

export class WriteModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }
  }

  renderFormInput(type) {
    return <FormControl componentClass={type} 
                          placeholder="New item" 
                          autoFocus = {true} 
                          onChange={this.handleChange.bind(this)} 
                          onKeyDown={this.handleKeyPress.bind(this)}/>
  
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault()
      this.addItem()
    }
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  addItem() {
    this.props.addItem(this.state.title)
  }

  render() {

    const FormInput = (type) => {
      return <FormControl componentClass={type} 
                          placeholder="New item" 
                          autoFocus = {true} 
                          onChange={this.handleChange.bind(this)} 
                          onKeyDown={this.handleKeyPress.bind(this)}/>
    }

    return (
      <Modal animation = {false} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Add new entry.</ControlLabel>
              <FormControl componentClass="textarea" 
                           placeholder="New item" 
                           autoFocus = {true} 
                           onChange={this.handleChangeTitle.bind(this)} 
                           onKeyDown={this.handleKeyPress.bind(this)}/>
              <FormControl componentClass="textarea" 
                           placeholder="New item" 
                           onChange={this.handleChangeDescription.bind(this)} 
                           onKeyDown={this.handleKeyPress.bind(this)}/>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.addItem.bind(this)} onKeyPress={this.handleKeyPress}>Submit</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}