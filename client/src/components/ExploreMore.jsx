import React from 'react'
import {Link} from 'react-router-dom'
import '../links/css/exploreMore.css'
import techShowcase from '../links/img/TechShowcase.jpg'
import bridgeIt from '../links/img/bridgeIt.webp'
import Buildin from '../links/img/Building Vision Expo.webp'


function ExploreMore() {
  return (
    <div className='events'>
        <div className="heading">
        <a href ="#competitions" > Events </a> 
        </div>

        <div className="event-gallery">
          <div className="event">
            <Link to="/events">
              <img src={techShowcase} alt="" />
              <br />TechShowcase
            </Link>
          </div>
          <div className="event">
            <Link to="/events">
              <img src={bridgeIt} alt="" />
              <br />Civil Expo
            </Link>
          </div>
          <div className="event">
            <Link to="/events">
              <img src={Buildin} alt="" />
              <br />Clash Carnival
            </Link>
          </div>
          {/* <div className="event">
            <Link to="/events">
              <img src={event4} alt="" />
              <br />Event 4
            </Link>
          </div> */}
        </div>
        <div className="exploreMore">
          <Link to="/events">Explore More !</Link>
          </div>
    </div>
  )
}

export default ExploreMore