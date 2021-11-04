import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import './App.css';

function App() {
  return (
    <><div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="pwd">Password:</label>
      <input type="password" name="pwd" id="pwd" />
      <button>OK</button>
    </div>
    <div className="App-footer">
      <p>Copyright 2020 - holberton School</p>
    </div></>
  );
}

export default App;
