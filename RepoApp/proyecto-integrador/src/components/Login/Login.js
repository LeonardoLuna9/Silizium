import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
      <form>
        <h5 className="Login">Log In</h5>
        <label htmlFor="credentials"></label>
        <input type="text" id="login" className="credentials" placeholder="  Credentials"/><br></br>
        <label htmlFor="password"></label>
        <input type="password" id="password" className="password" placeholder="  Password" />
        <button type="submit" className="button">Log In</button>
      </form>
    </div>
  );
};

export default Login;