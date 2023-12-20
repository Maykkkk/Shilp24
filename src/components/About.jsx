import React from 'react'
import '../links/css/about.css'
import CES from '../links/img/AIPL_SESSION__1_-removebg-preview 3.png'

function About() {
  return (
    <div className='about'>
        <div className="left">
            <div className="title">About <span><br /></span> CES</div>
            <div className="logo">
                <img src={CES} alt="" />
            </div>
        </div>
        <div className="right">
            The Civil Engineering Society (CES) at IIT BHU is a revered organisation that provides a shared platform for students, faculty, and alumni, fostering a sense of community and collaboration. Our mission is to facilitate comprehensive growth and development among our members. Guided by experienced students, esteemed professors, and succesful alumni, CES stands as a distinguished institution in the realm of civil engineering. We are committed to cultivating an environment where the fusion of knowledge and experience thrives, enabling each member to reach their full potential.
        </div>
    </div>
  )
}

export default About