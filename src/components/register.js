import React from 'react';
import {useState} from 'react'

const API_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/users/register'

const Register = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
        username: 'donng24', 
        password: 'Ng132474$'
        }}),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // Do something with the response data, such as displaying a success message or redirecting to the login page
      })
      .catch(console.error) ;
        // Handle any errors that may occur
      
  };

  return (

    <form onSubmit={handleSubmit} className='registerSection'>
      <br />
      <label htmlFor="name">Username:</label>
      <input
        type="text"
        id="name"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />


      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className='registerButton'>Register!</button>
    </form>
  );
}

export default Register;