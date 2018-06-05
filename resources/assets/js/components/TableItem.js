import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TableItem extends Component {
  render() {
    const index = this.props.index
    return (<tr>
          <td>{this.props.item}</td>
          <td className="buttons">
            <button className = "btn btn-info" value="Read" onClick={this.props.handle.bind(this, 'read', index)}>Read</button>
            <button className = "btn btn-primary" value="Edit" onClick={this.props.handle.bind(this, 'edit', index)}>Edit</button>
            <button className = "btn btn-danger" value="Delete" onClick={this.props.handle.bind(this, 'delete', index)}>Delete</button>
          </td>
        </tr>);
  }
}