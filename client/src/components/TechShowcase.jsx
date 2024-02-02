import "../links/css/techshowcase.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";
// import PdfComp from './PdfComp';
import "../links/css/pdf.css";

function TechShowcase({ AllAuth, RegisteredEvents }) {
	return (
		<div className="techshowcase">
			<div className="main">
				<Fade top>
					<div className="heading">TECH SHOWCASE</div>
				</Fade>
				{/* <PdfComp className="pdf-container"/> */}
				<div className="tech-gallery">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="Hackathon and ML"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade bottom>
						<EventCard
							name="Codecraft"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -3 */}
					<Fade right>
						<EventCard
							name="bridgeIt"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default TechShowcase;
