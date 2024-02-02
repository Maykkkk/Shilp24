import React from 'react'
import {Link} from 'react-router-dom'
import '../links/css/exploreMore.css'
import event2 from '../links/img/InsightRise Symposium.webp'
import Buildin from '../links/img/Building Vision Expo.webp'
import event3 from '../links/img/BridgeIt.webp'

function ExploreMore() {
  return (
    <div className='events'>
        <div className="heading">
        <a href ="#competitions" > Events </a> 
        </div>

        <div className="event-gallery">
          <div className="event">
            <Link to="/events">
              <img src={event2} alt="" />
              <br />TechShowcase
            </Link>
          </div>
          <div className="event">
            <Link to="/events">
              <img src={event3} alt="" />
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