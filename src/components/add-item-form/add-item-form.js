import React, { Component } from "react";

import "./add-item-form.css";

export default class Additemform extends Component {
  state = {
    label: "",
  };

  onChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
  };

  render() {
    return (
      <form className="add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          onChange={this.onChange}
        />
        <button className="btn btn-outline-secondary">Create</button>
      </form>
    );
  }
}
