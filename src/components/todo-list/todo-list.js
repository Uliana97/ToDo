import React from "react";

import "./todo-list.css";

import TodoListItem from "../todo-list-item/";
//Recive todos and onDeleted from App
const TodoList = ({ todos, onDeleted }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map(({ id, ...item }) => {
        return (
          <li className="list-group-item">
            <TodoListItem
              //Send New! onDeleted props to TodoListItem with f (from App) inside
              //Here we send to App id of clicked item
              onDeleted={() => onDeleted(id)}
              key={id + item.label}
              {...item}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
