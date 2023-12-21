import '../links/css/clashCarnival.css'
import event1 from '../links/img/Events/1.png'

function ClashCarnival() {
  return (
    <div className='clashCarnival'>
        <div className="main">
            <div className="heading">
                CLASH CARNIVAL
            </div>
            <div className="carnival-gallery">
                {/* Event-1 */}
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
                {/* Event-2 */}
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
                {/* Event -3 */}
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

            </div>
        </div>
    </div>
  )
}

export default ClashCarnival