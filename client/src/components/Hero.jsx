import React from 'react';
import '../links/css/Hero.css';
import Timer from './Timer';
import ShilpLogo from '../links/img/Shilp-logo.png';

function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1 className="hero-title">SHILP'25</h1>
        <h2 className="hero-subtitle">Civil Engineering Society</h2>
        <img src={ShilpLogo} alt="Shilp Logo" className="hero-logo" />
      </div>
      <div className="hero-bottom">
        <h3 className="hero-date">5-7 April, 2024</h3>
        <div className="countdown-timer">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
