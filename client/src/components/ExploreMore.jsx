import React from 'react'
import {Link} from 'react-router-dom'
import '../links/css/exploreMore.css'
import event1 from '../links/img/Events/1 (1).webp'
import event2 from '../links/img/Events/2 (1).webp'
import event3 from '../links/img/Events/3 (1).webp'
import event4 from '../links/img/Events/4 (1).webp'

function ExploreMore() {
  return (
    <div className='events'>
        <div className="heading">
        <a href ="#competitions" > Events </a> 
        </div>

        <div className="event-gallery">
          <div className="event">
            <a href="#events">
              <img src={event1} alt="" />
              <br />Event 1
            </a>
          </div>
          <div className="event">
            <a href="#events">
              <img src={event2} alt="" />
              <br />Event 2
            </a>
          </div>
          <div className="event">
            <a href="#events">
              <img src={event3} alt="" />
              <br />Event 3
            </a>
          </div>
          <div className="event">
            <a href="#events">
              <img src={event4} alt="" />
              <br />Event 4
            </a>
          </div>
        </div>
        <div className="exploreMore">
          <Link to="/events">Explore More !</Link>
          </div>
    </div>
  )
}

export default ExploreMore