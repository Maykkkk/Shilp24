import '../links/css/civilexpo.css'
import event1 from '../links/img/Events/1.png'
import Fade from 'react-reveal/Fade';

function CivilExpo() {
  return (
    <div className='civilexpo'>
        <div className="main">
            <Fade top>
            <div className="heading">
                CIVIL EXPO
            </div>
            </Fade>
            <div className="expo-gallery-row1">

                {/* Event-1 */}
                <Fade left>
                <div className="event-1 event">
                    <div className='event-name'>Event 1</div>
                    <div className="event-image">
                        <img src={event1} alt="" />
                    </div>
                    <div className="buttons">
                        <button className="register">Register</button>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                </Fade>

                {/* Event-2 */}
                <Fade right>
                <div className="event-2 event">
                    <div className='event-name'>Event 2</div>
                    <div className="event-image">
                        <img src={event1} alt="" />
                    </div>
                    <div className="buttons">
                        <button className="register">Register</button>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                </Fade>
              </div>
              <div className="expo-gallery-row2">

                {/* Event -3 */}
                <Fade left>
                <div className="event-3 event">
                    <div className='event-name'>Event 3</div>
                    <div className="event-image">
                        <img src={event1} alt="" />
                    </div>
                    <div className="buttons">
                        <button className="register">Register</button>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                </Fade>

                {/* Event -4 */}
                <Fade right>
                <div className="event-4 event">
                    <div className='event-name'>Event 4</div>
                    <div className="event-image">
                        <img src={event1} alt="" />
                    </div>
                    <div className="buttons">
                        <button className="register">Register</button>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                </Fade>
              </div>
        </div>
    </div>
  )
}

export default CivilExpo