import React, { Component } from 'react';
import { format } from 'path';

class cardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      priority: null,
      createdBy: null,
      assignedTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this.state);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const title = target.title;
    console.log('value', value);
    console.log('title', title);
    this.setState(
      {
        [title]: value
      },
      () => {
        console.log('state', this.state);
      }
    );
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input onChange={this.handleChange} name="title" type="text" />
        </label>
        <label>
          Priority:
          <select onChange={this.handleChange} name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
        </label>
        <label>
          Created By: <input onChange={this.handleChange} name="createdBy" />
        </label>
        <label>
          Assigned To: <input onChange={this.handleChange} name="assignedTo" />
        </label>
      </form>
    );
  }
}
export default cardForm;
