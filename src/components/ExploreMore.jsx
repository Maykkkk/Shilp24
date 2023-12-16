import React from 'react'
import { Link } from 'react-router-dom';
import '../links/css/exploreMore.css'
import event1 from '../links/img/Event 1.png'
import event2 from '../links/img/Event 2.png'
import event3 from '../links/img/Event 3.png'
import event4 from '../links/img/Event 4.png'

function ExploreMore() {
  return (
    <div className='events'>
        <div className="heading">
        <Link to="/competitions" > Explore More </Link> 
        </div>

        <div className="event-gallery">
          <div className="event event-1">
            <a href="#">
              <img src={event1} alt="" />
              <br />Event 1
            </a>
          </div>
          <div className="event event-2">
            <a href="#">
              <img src={event2} alt="" />
              <br />Event 2
            </a>
          </div>
          <div className="event event-3">
            <a href="#">
              <img src={event3} alt="" />
              <br />Event 3
            </a>
          </div>
          <div className="event event-4">
            <a href="#">
              <img src={event4} alt="" />
              <br />Event 4
            </a>
          </div>
        </div>
    </div>
  )
}

export default ExploreMore