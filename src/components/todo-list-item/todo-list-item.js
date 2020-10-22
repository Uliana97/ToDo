import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    //Recive label and onDeleted props from TodoList
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span onClick={onToggleDone} className="todo-list-item-label">
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          //With click onDeleted func will activate func of TodoList (with id of active item) -> it will activate func of App, (recive id)
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
