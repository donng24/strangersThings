import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import { Home, Post, Login } from "./components";

const App = () => {
  return (
    <div className="app">
      <Router>
      
        <nav>
          <ul>
            <li>
          <NavLink to="/home" exact activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>

          <NavLink to="/post" activeClassName="active">
            Post
          </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/post">
            <Post />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
