import React from "react";
import { useState } from "react";
import "./style.css"

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ExMjkyYzhiOTJlYTAwMTczMjc5Y2MiLCJ1c2VybmFtZSI6ImRvbm5nMjQiLCJpYXQiOjE2NzE1MDYyMjB9.pUbolQdZSbp7GaF9WaWDY9ZBREvvYh3vlbqssuljQ70"


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
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
            username: 'donng24', 
            password: 'Ng132474$' 
            }
        }),
    });
        const data = await response.json();
  
        if (response.ok) {
          localStorage.setItem(TOKEN, data.token);
          window.location.href = '/protected';
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('An unexpected error occurred.');
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
