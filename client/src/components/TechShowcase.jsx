import '../links/css/techshowcase.css'
import Fade from 'react-reveal/Fade';
import EventCard from './EventCard';
// import PdfComp from './PdfComp';
import '../links/css/pdf.css'

function TechShowcase() {
  return (
    <div className='techshowcase'>
        <div className="main">
            <Fade top>
            <div className="heading">
                TECH SHOWCASE
            </div>
            </Fade>
            {/* <PdfComp className="pdf-container"/> */}
            <div className="tech-gallery">
                {/* Event-1 */}
                <Fade left>
                <EventCard name="Hackathon and ML" className="eventCard"/>
                </Fade>

                {/* Event-2 */}
                <Fade bottom>
                <EventCard name="Codecraft" className="eventCard"/>
                </Fade>

                {/* Event -3 */}
                <Fade right>
                <EventCard name="bridgeit_" className="eventCard"/>
                </Fade>

            </div>
        </div>
    </div>
  )
}

export default TechShowcase