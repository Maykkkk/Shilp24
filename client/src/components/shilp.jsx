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
                Shilp, the Civil Engineering Society's annual fest, celebrates creativity, innovation, and inclusivity. It fosters learning, collaboration, and professional preparation, both technical and non-technical. Reflecting the community's values, Shilp empowers future engineers to tackle challenges and contribute meaningfully to the field.            </div>
        </div>


    )
}

export default Shilp