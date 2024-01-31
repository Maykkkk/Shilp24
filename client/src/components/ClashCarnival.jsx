import '../links/css/clashCarnival.css'
import Fade from 'react-reveal/Fade';
import EventCard from './EventCard';

function ClashCarnival() {
  return (
    <div className='clashCarnival'>
        <div className="main">
            <Fade top>
            <div className="heading">
                CLASH CARNIVAL
            </div>
            </Fade>
            <div className="carnival-gallery">
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

export default ClashCarnival