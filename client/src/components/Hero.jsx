import React from 'react'
import '../links/css/home.css';

function Hero() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" id='home'>
          <div id="title" className='hero-section'>
            <h1 className='m-0 p-0 '>
              <span className="primary x">SHILP </span> 
              <span className="text-light">IIT BHU</span>
              </h1>
            <h2 className='text-light mb-0 p-0'>Civil Engineering Society</h2>
          </div>
          <h1 className='' style={{position:"absolute", bottom:"8vh", color:"white"}}>5-7 April, 2024</h1>
        </div>
  )
}

export default Hero