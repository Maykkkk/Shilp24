import React from "react";
import '../links/css/shilp.css'
import shilp_logo from '../links/img/Shilp_Logo_Final_2-removebg-preview 1.png'

function Shilp() {
    return (

        <div className="contain">
            <div className="shilp-logo">
                <img src={shilp_logo}  alt=""/>
            </div>
            <div className="description">
            Shilp, the annual fest by the Civil Engineering Society, is a dynamic celebration promoting creativity, innovation, and inclusivity. It serves as a platform for learning, collaboration, and professional preparation, emphasizing both technical and soft skills. Shilp reflects the values propelling the civil engineering community forward, shaping the next generation to embrace challenges and contribute meaningfully to the field.
            </div>
        </div>


    )
}

export default Shilp