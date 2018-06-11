import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap'

import FieldGroup from './FieldGroup'
import { Write, Read, Delete, Edit } from './Modals'

export default class AbstractModal extends Modal {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            warn: false,
        }
    }

    handleClose() {
        this.props.handleCloseModal()
    }

    triggerAction() {
        switch(this.props.mode) {
            case "delete" : this.deleteItem(); break;
            case "edit" : this.editItem(); break;
            case "write" : this.writeItem(); break;
        }
    }

    handleKeyPress(e) {
        const key = e.key
        if (key === "Enter") {
            e.preventDefault()
            this.triggerAction()
        } else if (key === "Escape") this.handleClose();
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

    writeItem() {
        this.props.addItem(this.state.title, this.state.description)
    }

    deleteItem() {
        this.props.removeItem()
    }

    editItem() {
        this.props.updateItem(this.state.title, this.state.description)
    }

    renderModal(mode) {
        switch(mode) {
            case "write": return <Write item = {this.props.item}
                                        onChangeTitle={this.handleChangeTitle.bind(this)}
                                        onChangeDescription={this.handleChangeDescription.bind(this)}/>; break;
            case "read": return <Read item = {this.props.item}/>; break;
            case "delete": return <Delete/>; break;
            case "edit": return <Edit item = {this.props.item}
                                      onChangeTitle={this.handleChangeTitle.bind(this)}
                                      onChangeDescription={this.handleChangeDescription.bind(this)}/>; break;
        }
    }

    render () {
        return (
            <Modal show={this.props.show}
                   onHide={this.handleClose.bind(this)}
                   className="modal fade show" id="modal-new-todo" tabIndex="-1"
                   onKeyDown={this.handleKeyPress.bind(this)}>
                
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Title</h5>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            {this.renderModal(this.props.mode)}
                        </div>
                    </div>
                    
                    <ModalFooter mode = {this.props.mode} 
                                 handleClose={this.handleClose.bind(this)} 
                                 triggerAction={this.triggerAction.bind(this)}/>

                </div>
            
            </Modal>
        )
    }
}


const ModalButton = ({label, ...props}) => 
    <button type="button" 
            className="btn btn-link" 
            onClick = {props.onClick}>{label}       
    </button>

function ModalFooter({mode, ...props}) {

    const label = (mode=='delete') ? "delete" : "submit";

    if (mode==='read') {
        return (
            <div className="modal-footer">
                <ModalButton label="cancel" onClick={props.handleClose.bind(this)}/>
            </div>
            )
    }
    return (
        <div className="modal-footer">
            <ModalButton label="cancel" onClick={props.handleClose.bind(this)}/>
            <ModalButton label={label} onClick={props.triggerAction.bind(this)}/>
        </div>
        )
}


