import React from 'react';
import '../links/css/about.css';
import CES from '../links/img/ces-logo.png';

function About() {
  return (
    <div className='about-ces'>
      <h1 className="about-title">About CES</h1>
      <div className="logo">
        <img src={CES} alt="CES Logo" />
      </div>
      <p className="about-description">
        The Civil Engineering Society (CES) at IIT BHU is a revered organization that provides a shared platform for 
        students, faculty, and alumni, featuring a series of community and collaboration. Our mission is to foster 
        growth, innovation, and professional development among our members. Guided by experienced students, esteemed 
        professors, and successful alumni, CES stands as a distinguished institution in the realm of civil engineering. 
        We are committed to excellence, ensuring that the exchange of knowledge and experience thrives, enabling each 
        member to reach their full potential.
      </p>
    </div>
  );
}

export default About;
