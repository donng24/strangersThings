import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Home, Post, Login, Register, Messages, Logout } from "./components";



const App = () => {
  const [token, setToken] = useState(localStorage.getItem("loginData"))
  console.log(localStorage.getItem("loginData"))
  return (
    <div className="app">
      <Router>
        <nav className="button-container">
          <ul>
            <li>
          <NavLink path="/" exact activeClassName="active" className="home-button">
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

          <NavLink to="/login" activeClassName="active" className="logout-button">
            Logout
          </NavLink>
            
            </li>
          </ul>
        </nav>
        <Switch>
          <Route to="/">
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

          <Route path="/login">
            <Logout token={token}/>
          </Route>

          {/* <Route path="/messages">
            <Messages />
          </Route> */}

        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
