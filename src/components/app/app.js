import React from "react";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter/";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Read Book", important: false, id: 2 },
    { label: "Do Coding", important: true, id: 3 },
  ];

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
        //This is custom event mean: I give onDelete prop to TodoList with callback f inside, which takes id and then do smth with it
        onDeleted={(id) => console.log("this is" + id)}
      />
    </div>
  );
};

export default App;
