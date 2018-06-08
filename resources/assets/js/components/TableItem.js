import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TableItem extends Component {
  render() {
    const index = this.props.index
    const id = this.props.id
    return (<tr>
          <td>{this.props.item.id}</td>
          <td>{this.props.item.title}</td>
          <td>{this.props.item.description}</td>
          <td className="buttons">
            <button className = "btn btn-info" value="Read" onClick={this.props.handle.bind(this, 'read', index, id)}>Read</button>
            <button className = "btn btn-primary" value="Edit" onClick={this.props.handle.bind(this, 'edit', index, id)}>Edit</button>
            <button className = "btn btn-danger" value="Delete" onClick={this.props.handle.bind(this, 'delete', index, id)}>Delete</button>
          </td>
        </tr>);
  }
}