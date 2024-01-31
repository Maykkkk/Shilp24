import '../links/css/clashCarnival.css'
import event1 from '../links/img/Events/1 (1).webp'
import Fade from 'react-reveal/Fade';

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
                <Fade bottom>
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

                {/* Event -3 */}
                <Fade right>
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

            </div>
        </div>
    </div>
  )
}

export default ClashCarnival