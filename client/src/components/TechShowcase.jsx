import '../links/css/techshowcase.css'
import Fade from 'react-reveal/Fade';
import EventCard from './EventCard';

function TechShowcase() {
  return (
    <div className='techshowcase'>
        <div className="main">
            <Fade top>
            <div className="heading">
                TECH SHOWCASE
            </div>
            </Fade>
            <div className="tech-gallery">
                {/* Event-1 */}
                <Fade left>
                <EventCard className="eventCard"/>
                </Fade>

                {/* Event-2 */}
                <Fade bottom>
                <EventCard className="eventCard"/>
                </Fade>

                {/* Event -3 */}
                <Fade right>
                <EventCard className="eventCard"/>
                </Fade>

            </div>
        </div>
    </div>
  )
}

export default TechShowcase