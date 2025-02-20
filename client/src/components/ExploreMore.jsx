import React from 'react';
import '../links/css/exploreMore.css';
import {Link} from 'react-router-dom'
import event1 from '../links/img/InsightRise Symposium.webp'
import event2 from '../links/img/Building Vision Expo.webp'
import event3 from '../links/img/BridgeIt.webp'
import Button from './Button';

function ExploreMore() {
  return (
    <div className='events'>
      <h2 className="explore-heading">Featured Events</h2>

      <div className="event-gallery">
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src={event1} alt="Technical Workshop" />
            <h3>Event 3</h3>
            <p>Hands-on learning experience</p>
          </Link>
        </div>
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src={event2} alt="Guest Lecture" />
            <h3>Event 1</h3>
            
            <p>Industry experts sharing insights</p>
          </Link>
        </div>
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src={event3} alt="Competition" />
            <h3>Event 2</h3>
            <p>Test your skills</p>
          </Link>
        </div>
      </div>
      {/* Explore More Button */}
      <div className="exploreMore">
        <Button name="Explore More!" url="/events" target="" />
      </div>
    </div>
  );
}

export default ExploreMore;
