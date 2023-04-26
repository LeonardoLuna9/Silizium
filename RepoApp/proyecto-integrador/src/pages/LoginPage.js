import React from 'react';
import './LoginPage.css'
import image from '../img/IBM_logo.png';
import Login from '../components/Login/Login';

const LoginPage = () => {
  return (
    <div>
      <img src={image} alt="Login" />
      <p className="rectangulo"></p>
      <Login/>
    </div>
  );
};

export default LoginPage;