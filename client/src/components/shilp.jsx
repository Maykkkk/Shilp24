import React from "react";
import '../links/css/shilp.css'
import shilp_logo from '../links/img/Shilp-logo.png'
import { FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";
// import Shilp3D from "./Shilp3D";

function Shilp() {
    return (
        <div className="contain">
            <div className="shilp-logo">
                <img src={shilp_logo} alt="Shilp Logo"/>
            </div>
            <div className="description">
                <p>
                    <strong>Shilp</strong>, the annual fest by the Civil Engineering Society, is a dynamic celebration of creativity and innovation in the field. 
                    Serving as a pivotal platform, Shilp fosters collaboration, promotes innovation, and values inclusivity. 
                    Beyond a mere event, Shilp's significance lies in its commitment to inspiring a culture of learning, pushing boundaries, 
                    and preparing participants for the professional world.  
                </p>
                <p>
                    With a focus on both technical and soft skills, Shilp stands as a vibrant testament to the values that drive the 
                    civil engineering community forward, shaping the next generation of engineers to embrace challenges and contribute meaningfully to the field.
                </p>

                <div className="stats">
                    <div className="stat-item">
                        <FaUsers className="icon"/>
                        <h2>1500+</h2>
                        <p>Participants from across India</p>
                    </div>
                    <div className="stat-item">
                        <FaCalendarAlt className="icon"/>
                        <h2>20+ Events</h2>
                        <p>Technical and Cultural programs</p>
                    </div>
                    <div className="stat-item">
                        <FaTrophy className="icon"/>
                        <h2>₹5L+</h2>
                        <p>Prize pool</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shilp;
