import React, { Component } from 'react';
import { Modal, Button , FormGroup, FormControl, ControlLabel, HelpBlock, PageHeader} from 'react-bootstrap';
import Alert from './Alert'
import FieldGroup from './FieldGroup'

import {MyModal, EditingModal} from './AbstractModals'

export class WriteModal extends EditingModal {

  addItem() {
    this.props.addItem(this.state.title, this.state.description)
  }

  render() {
    return (
      <Modal animation = {false} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header>Add Entry</Modal.Header>
          <Modal.Body>
            <FieldGroup
                id="titleForm"
                type="input"
                label="Title"
                placeholder="Enter text"
                autoFocus = {true}
                onChange={this.handleChangeTitle.bind(this)} 
                onKeyDown={this.handleKeyPress.bind(this)}
              />
            <FieldGroup
                id="descriptionForm"
                type="textarea"
                label="Description"
                placeholder="Enter text"
                warn = {false} //TODO
                onChange={this.handleChangeDescription.bind(this)} 
                onKeyDown={this.handleKeyPress.bind(this)}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
            <Button type = "submit" bsStyle="primary" onClick={this.triggerAction.bind(this)} onKeyPress={this.handleKeyPress}>Submit</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export class ReadModal extends MyModal {
  render() {
    return (
      <Modal animation = {false} 
             show={this.props.show} 
             onHide={this.handleClose.bind(this)}
             onKeyDown={this.handleKeyPress.bind(this)}>
          <Modal.Body>
            <h5>Title:</h5>
            <p className='text-justify'>{this.props.item.title}</p>

            <h5>Description:</h5>
            <p className='text-justify'>{this.props.item.description}</p>
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
      <Modal animation = {false} 
             show={this.props.show} 
             onHide={this.handleClose.bind(this)}
             onKeyDown={this.handleKeyPress.bind(this)}>
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

export class EditModal extends EditingModal {

  updateItem() {
    this.props.updateItem(this.state.title, this.state.description)
  }

  render() {
    const value = (!this.state.query) ? this.props.item[0] : this.state.query
    return (
      <Modal animation = {false} show={this.props.show} onHide={this.handleClose.bind(this)}>
          <Modal.Body>
            <FieldGroup
                id="titleForm"
                type="input"
                label="Title"
                placeholder={this.props.item.title}
                autoFocus = {true}
                onChange={this.handleChangeTitle.bind(this)} 
                onKeyDown={this.handleKeyPress.bind(this)}
              />
            <FieldGroup
                id="descriptionForm"
                type="textarea"
                label="Description"
                placeholder={this.props.item.description}
                warn = {false} //TODO
                onChange={this.handleChangeDescription.bind(this)} 
                onKeyDown={this.handleKeyPress.bind(this)}
              />
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










