import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    value: "",
  };

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value: value });
    this.props.onSearch(value);
  };

  render() {
    return (
      <input
        onChange={this.onValueChange}
        className="search-input form-control"
        placeholder="search"
        value={this.state.value}
      />
    );
  }
}
