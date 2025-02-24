import React from 'react';
import '../links/css/Hero.css';
import Timer from './Timer';
import ShilpLogo from '../links/img/Shilp-logo.png';
import Fade from "react-reveal/Fade";


function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <Fade top delay={400}>
        <h1 className="hero-title">SHILP'25</h1>
        <h2 className="hero-subtitle">Civil Engineering Society</h2>
        </Fade>
        <Fade right>
        <img src={ShilpLogo} alt="Shilp Logo" className="hero-logo" />
        </Fade>
      </div>
      <div className="hero-bottom">
        <Fade bottom delay = {800}>
        <h3 className="hero-date">5-7 April, 2024</h3>
        <div className="countdown-timer">
          <Timer />
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
