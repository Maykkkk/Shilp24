import "../links/css/clashCarnival.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";

function ClashCarnival({ AllAuth, RegisteredEvents }) {
	return (
		<div className="clashCarnival">
			<div className="main">
				<Fade top>
					<div className="heading">CLASH CARNIVAL</div>
				</Fade>
				<div className="carnival-gallery">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="Case Clash"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade bottom>
						<EventCard
							name="Surveyor's Hunt"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -3 */}
					<Fade right>
						<EventCard
							name="Feast For Brains"
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

export default ClashCarnival;
