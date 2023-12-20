import '../links/css/civilexpo.css'
import event1 from '../links/img/Event 1.png'

function CivilExpo() {
  return (
    <div className='civilexpo'>
        <div className="main">
            <div className="heading">
                CIVIL EXPO
            </div>
            <div className="expo-gallery-row1">
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
              </div>
              <div className="expo-gallery-row2">
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
                {/* Event -4 */}
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
              </div>
        </div>
    </div>
  )
}

export default CivilExpo