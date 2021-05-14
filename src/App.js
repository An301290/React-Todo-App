import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div >
        <nav >
          <ul className="nav-bar">
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/todo-list">Todo List</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/sign-up">Sign Up </NavLink>
            </li>
          </ul>
        </nav>

         <Switch>
          <Route path="/todo-list">
            <TodoList />
          </Route>
          <Route path="/sign-up">
          <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;


