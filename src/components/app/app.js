import React, { Component } from "react";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter/";
import AddButton from "../add-button";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Read Book", important: false, id: 2 },
      { label: "Do Coding", important: true, id: 3 },
    ],
  };

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
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return { todoData: newArray };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          // I want to recive id of element where red button was clicked (3 levels lower) and then i will delete it from DB
          //This is custom event mean: I give onDelete prop to TodoList with callback f inside, which takes id and then do smth with it (call func deleteItem)
          onDeleted={this.deleteItem}
        />
        <AddButton onAdded={this.addItem} />
      </div>
    );
  }
}
