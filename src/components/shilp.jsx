import React from "react";
import '../links/css/shilp.css'
import shilp_logo from '../links/img/Shilp Logo Final 2 1.png'

function Shilp() {
    return (

        <div class="contain">
            <div class="shilp-logo">
                <img src={shilp_logo}  alt=""/>
            </div>
            <div class="description">
                Shilp, the annual fest by the Civil Engineering Society, is a dynamic celebration of creativity and innovation in the field. Serving as a pivotal platform, Shilp fosters collaboration, promotes innovation, and values inclusivity. Beyond a mere event, Shilp's significance lies in its commitment to inspiring a culture of learning, pushing boundaries, and preparing participants for the professional world. With a focus on both technical and soft skills, Shilp stands as a vibrant testament to the values that drive the civil engineering community forward, shaping the next generation of engineers to embrace challenges and contribute meaningfully to the field.
            </div>
        </div>


    )
}

export default Shilp