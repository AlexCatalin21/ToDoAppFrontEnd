import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLayout from "./components/layouts/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/layouts/Home";

function App() {
  return (
    <div className="App">
      <NavbarLayout />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
