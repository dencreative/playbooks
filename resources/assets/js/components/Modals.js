import React, { Component } from 'react';
import { Modal, Button , FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

// Abstract modal class.
class MyModal extends Modal {

  handleClose() {
    console.log(this)
    this.props.handleCloseModal()
  }
}

export class WriteModal extends MyModal {

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  updateItem() {
    this.props.updateItem(this.state.query)
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <Modal animation = {this.props.animation} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Edit your component.</ControlLabel>
              <FormControl componentClass="textarea" placeholder="New item" onChange={this.handleChange.bind(this)} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.updateItem.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export class ReadModal extends MyModal {
  render() {
    return (
      <Modal animation = {this.props.animation} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Body>
            <p className = 'text-justify'>{this.props.item}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export class DeleteModal extends MyModal {

  removeItem() {
    this.props.removeItem()
  }

  render() {
    return (
      <Modal animation = {this.props.animation} show={this.props.show} onHide={this.handleClose.bind(this)}>
        <Modal.Body>
            <p className = 'text-justify'>Are you sure you want to remove this entry?</p>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
          <Button bsStyle="primary" onClick={this.removeItem.bind(this)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export class EditModal extends MyModal {

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  updateItem() {
    this.props.updateItem(this.state.query)
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <Modal animation = {this.props.animation} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Edit your component.</ControlLabel>
              <FormControl componentClass="textarea" placeholder={this.props.item} onChange={this.handleChange.bind(this)} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.updateItem.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export const MODALS = {
  read : ReadModal,
  write : WriteModal,
  delete: DeleteModal,
  edit: EditModal,
}










