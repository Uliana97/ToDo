import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { status: "all", label: "All" },
    { status: "active", label: "Active" },
    { status: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <div className="btn-group">
        {this.buttons.map(({ status, label }) => {
          const isActive = filter === status;
          const classNames = isActive ? "btn-info" : "btn-outline-secondary";
          return (
            <button
              key={label}
              onClick={() => onFilterChange(status)}
              type="button"
              className={`btn ${classNames}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }
}
