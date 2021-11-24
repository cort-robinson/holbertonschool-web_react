import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="pwd">Password:</label>
      <input type="password" name="pwd" id="pwd" />
      <button>OK</button>
    </div>
  );
}

export default Login;
