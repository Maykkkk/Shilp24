import "../links/css/civilexpo.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";

function CivilExpo({ AllAuth, RegisteredEvents }) {
	return (
		<div className="civilexpo">
			<div className="main">
				<Fade top>
					<div className="heading">CIVIL EXPO</div>
				</Fade>
				<div className="expo-gallery-row1">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="BUILD VISION EXPO"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade right>
						<EventCard
							name="InsightRise Symposium"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>
				</div>
				<div className="expo-gallery-row2">
					{/* Event -3 */}
					<Fade left>
						<EventCard
							name="BUILD VISION EXPO"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -4 */}
					<Fade right>
						<EventCard
							name="3 Minute Thesis"
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

export default CivilExpo;
