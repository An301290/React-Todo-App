import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      {/* <Form /> */}
    </div>
  );
}

export default App;
