import React, { Component } from "react";

import "./add-button.css";

export default class AddButton extends Component {
  render() {
    const { onAdded } = this.props;
    return (
      <div className="add-button">
        <button
          onClick={() => onAdded("my text")}
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </div>
    );
  }
}
