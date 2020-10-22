import React, { Component } from "react";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter/";
import AddButton from "../add-button";

import "./app.css";

export default class App extends Component {
  //generate id from 100
  maxId = 1000;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Read Book"),
      this.createTodoItem("Do Coding"),
    ],
  };

  createTodoItem(label) {
    return {
      //label:label
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      //Find index in DB
      const idx = todoData.findIndex((el) => el.id === id);
      //From 0 to idx
      const before = todoData.slice(0, idx);
      //From idx+1 to the end
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      //New state
      return { todoData: newArray };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return { todoData: newArray };
    });
  };

  onToggleProperty = (arr, id, propName) => {
    //find index of clicked item
    const idx = arr.findIndex((el) => el.id === id);
    //find this item in DB
    const oldItem = arr[idx];
    //we cant change array! its possible trick:
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    //here we dont change old DB! just slice it, remove old item and add newItem
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.onToggleProperty(todoData, id, "done") };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      //update DB
      return { todoData: this.onToggleProperty(todoData, id, "important") };
    });
  };

  render() {
    const { todoData } = this.state;

    //how many done=true elements in DB we have
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          // I want to recive id of element where red button was clicked (3 levels lower) and then i will delete it from DB
          //This is custom event mean: I give onDelete prop to TodoList with callback f inside, which takes id and then do smth with it (call func deleteItem)
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddButton onAdded={this.addItem} />
      </div>
    );
  }
}
