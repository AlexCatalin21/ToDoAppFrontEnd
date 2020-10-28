import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLayout from "./components/layouts/Navbar";
import { Switch, Route } from "react-router-dom";
import ToDoList from "./components/layouts/ToDoList";

function App() {
  return (
    <div className="App">
      <NavbarLayout />
      <Switch>
        <Route exact path="/" component={ToDoList}></Route>
      </Switch>
    </div>
  );
}

export default App;
