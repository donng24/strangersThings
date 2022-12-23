import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Home, Post, Login, Register } from "./components";



const App = () => {
  const [token, setToken] = useState(localStorage.getItem("loginData"))
  console.log(localStorage.getItem("loginData"))
  return (
    <div className="app">
      <Router>
        <nav className="button-container">
          <ul>
            <li>
          <NavLink to="/home" exact activeClassName="active" className="home-button">
            Home
          </NavLink>

          <NavLink to="/post" activeClassName="active" className="post-button">
            Post
          </NavLink>

          <NavLink to="/login" activeClassName="active" className="login-button">
            Login
          </NavLink>

          <NavLink to="/register" activeClassName="active" className="register-button">
            Register
          </NavLink>
            
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/post">
            <Post token={token}/>
          </Route>

          <Route path="/login">
            <Login setToken={setToken}
            token={token}/>
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
