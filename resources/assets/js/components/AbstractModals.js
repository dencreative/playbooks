import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { WriteModal, EditModal, DeleteModal, ReadModal } from './Modals'

// General abstract modal class.
export class MyModal extends Modal {

  handleClose() {
    console.log(this)
    this.props.handleCloseModal()
  }

    triggerAction() {
      if (this instanceof WriteModal) this.addItem();
      if (this instanceof EditModal) this.updateItem();
      if (this instanceof DeleteModal) this.removeItem();
      if (this instanceof ReadModal) this.handleClose()

  }

  handleKeyPress(e) {
    const key = e.key
    if (key === "Enter") {
      e.preventDefault()
      this.triggerAction()
    } else if (key === "Escape") this.handleClose();
  }
}

// Abstract modal class that support form modification.
export class EditingModal extends MyModal {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      warn: false,
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
}
