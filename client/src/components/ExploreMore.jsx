import React from 'react'
import {Link} from 'react-router-dom'
import '../links/css/exploreMore.css'
import techShowcase from '../links/img/TechShowcase.jpg'
import civilExpo from '../links/img/civilExpo.jpg'
import clashCarnival from '../links/img/clashCarnival.jpg'


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
              <img src={civilExpo} alt="" />
              <br />Civil Expo
            </Link>
          </div>
          <div className="event">
            <Link to="/events">
              <img src={clashCarnival} alt="" />
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