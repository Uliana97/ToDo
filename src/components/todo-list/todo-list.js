import React from "react";

import "./todo-list.css";

import TodoListItem from "../todo-list-item/";

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map(({ id, ...item }) => {
        return (
          <li className="list-group-item">
            <TodoListItem key={id + item.label} {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
