import React from 'react'
import '../links/css/footer.css'
import temple from '../links/img/Group 23.png'
import chineseTemple from '../links/img/Group 3660.png'
import newspaper from '../links/img/undraw_subscribe_vspl 1.png'
import shilp from '../links/img/shilpp3-modified_auto_x2-removebg-preview 1.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <div className='footer'>
        {/* --------------- */}
        <div className="mail-section">
            <div className="image">
                <img className='temple' src={temple} alt="" />
                <img className='chineseTemple' src={chineseTemple} alt="" />
            </div>
            <div className="mail">
                <a href="mailto:shilp@itbhu.ac.in">shilp@itbhu.ac.in</a>
            </div>
        </div>
        {/* --------------- */}
        <div className="line"></div>
        {/* --------------- */}
        <div className="subscription">
            <div className="new-image">
                <img src={newspaper} alt="" />
            </div>
            <div className="subscribe">
                <a href="#">Subscribe to our Newsletter!</a>
            </div>
            <input type="email" name="user-mail" id="user-mail" placeholder='Enter your email'/>
            <div className="subscribe-mobile">
                <a href="#">Subscribe to our Newsletter!</a>
            </div>
        </div>
        {/* ---------------- */}
        <div className="line"></div>
        {/* ---------------- */}
        <div className="connect">
            <div className="mobile-text">
                Connect with us
            </div>
            <div className="logo">
                <img src={shilp} alt="" />
            </div>
            <div className="text">
                Connect with us
            </div>
            <div className="social-media-icons">
                <a href="https://www.linkedin.com/company/civil-engineering-society-iit-bhu/"><FaLinkedin className='linkedIn'/></a>
                <a href="https://www.instagram.com/ces_iitbhu/"><FaInstagram className='instagram' style={{margin:"0 0 0 1vw"}}/></a>
                <a href="https://www.facebook.com/groups/157760987681133/"><FaSquareFacebook className='facebook' style={{margin:"0 0 0 1vw"}}/></a>
                <a href="#"><IoLogoYoutube className='youtube' style={{margin:"0 0 0 1vw"}}/></a>
            </div>
        </div>
        {/* -------------- */}
    
    </div>
  )
}

export default Footer