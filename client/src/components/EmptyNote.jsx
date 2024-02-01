import React from "react";
import '../links/css/Empty.css'
import ParticleBackground from './ParticleBackground'
import { Zoom } from "react-reveal";

function EmptyNote() {
    return (
        <div className='emptynote'>
            <ParticleBackground/>
            <Zoom>
            <h1 className='headTop'>Coming Soon....</h1>
            </Zoom>
        </div>
    )
}

export default EmptyNote