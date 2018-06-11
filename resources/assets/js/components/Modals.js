import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FieldGroup from './FieldGroup'

export const Write = (props) => {
    const mode = 'write'
    return (
        <div>
            <FieldGroup
                id="titleForm"
                type="input"
                label="Title"
                placeholder="Enter text"
                autoFocus = {true}
                onChange={props.onChangeTitle.bind(this)} 
                
              />
            <FieldGroup
                id="descriptionForm"
                type="textarea"
                label="Description"
                placeholder="Enter text"
                warn = {false} //TODO
                onChange={props.onChangeDescription.bind(this)} 
                
              />
        </div>
        )
}

export const Read = (props) => {
    return (
        <div>
            <p className='text-justify'>{props.item.title}</p>
            <p className='text-justify'>{props.item.description}</p>
        </div>
        )
}

export const Delete = (props) => {
    return (
        <div>
            <p className = 'text-justify'>Are you sure you want to remove this entry?</p>
        </div>
        )
}

export const Edit = (props) => {
    return (
        <div>
            <FieldGroup
                id="titleForm"
                type="input"
                label="Title"
                placeholder={props.item.title}
                autoFocus = {true}
                onChange={props.onChangeTitle.bind(this)}   
            />
            <FieldGroup
                id="descriptionForm"
                type="textarea"
                label="Description"
                placeholder={props.item.description}
                warn = {false} //TODO
                onChange={props.onChangeDescription.bind(this)} 
                
            />
        </div>
        )

}