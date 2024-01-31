import '../links/css/civilexpo.css'
import Fade from 'react-reveal/Fade';
import EventCard from './EventCard';

function CivilExpo() {
  return (
    <div className='civilexpo'>
        <div className="main">
            <Fade top>
            <div className="heading">
                CIVIL EXPO
            </div>
            </Fade>
            <div className="expo-gallery-row1 cards">

                {/* Event-1 */}
                <Fade left>
                <EventCard className="eventCard"/>
                </Fade>

                {/* Event-2 */}
                <Fade right>
                <EventCard className="eventCard"/>
                </Fade>
              </div>
              <div className="expo-gallery-row2">

                {/* Event -3 */}
                <Fade left>
                <EventCard className="eventCard"/>
                </Fade>

                {/* Event -4 */}
                <Fade right>
                <EventCard className="eventCard"/>
                </Fade>
              </div>
        </div>
    </div>
  )
}

export default CivilExpo