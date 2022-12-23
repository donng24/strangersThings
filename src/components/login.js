import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css"



const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    async function handleLogin(event) {
      event.preventDefault();
      
      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            user: {
            username: `${username}`, 
            password:  `${password}`
            }
        }),
    });
        const json = await response.json();
        
        if (response.ok) { 
             setToken(json.data.token)
          localStorage.setItem("loginData", json.data.token);
            history.push("/home")
         
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error(error)
        setError('Unexpected error has occurred.');
      }
    }
    
    return (
       
      <form onSubmit={handleLogin} className="login-section">
        {error && <p>{error}</p>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
    

        <button type="submit" className="submit">Log in</button>
      </form>
        
        
    );
  }
  
 



export default Login
