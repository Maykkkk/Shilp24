import React from 'react';
import '../links/css/footer.css';
import temple from '../links/img/Group 23.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade bottom>
    <div className='footer'>
        {/* Left Section */}
        <div className="image">
            <img src={temple} alt="Temple Icon" />
        </div>

        {/* Subscription Section */}
        <div className="subscription">
            <div className="subscribe">Subscribe to our Newsletter!</div>
            <input type="email" placeholder='Enter your email' />
            <button className="subscribe-button">Subscribe</button>
        </div>

        {/* Social Media Section */}
        <div className="connect">
            <div className="text">Connect with us</div>
            <div className="social-media-icons">
                <a href="https://www.linkedin.com"><FaLinkedin /></a>
                <a href="https://www.instagram.com"><FaInstagram /></a>
            </div>
        </div>
    </div>
    </Fade>
  );
}

export default Footer;
