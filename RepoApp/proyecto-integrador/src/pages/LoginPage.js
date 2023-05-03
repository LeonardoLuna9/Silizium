import React from 'react';
import './LoginPage.css'
import image from '../img/IBM_logo.png';
import Login from '../components/Login/Login';

const LoginPage = () => {
  return (
    <div className='login-container'>
        <div className='left-side'>
          <img src={image} alt="Login" />
        </div>
        <div className='right-side'>
          <Login/>
        </div>
      <div className="rectangulo"></div>
    </div>
  );
};

export default LoginPage;