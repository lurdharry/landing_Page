import React from 'react';
import './style.css';
import logo from '../assets/icon.svg';

export const Header = () => {
  return (
    <div className="header-container ">
      <div className="namelogo">
        <img src={logo} alt="Logo" />
        <span className="title">WOODIES</span>
      </div>
      <span className="home">Home</span>
      <span className="other">About Us</span>
      <span className="other">How it works</span>
      <span className="other">Categories</span>
      <span className="other">Testimony</span>
      <button className="button">SIGN UP</button>
    </div>
  );
};
