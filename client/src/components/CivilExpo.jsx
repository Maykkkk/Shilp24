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
							name="Building Vision Expo"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade right>
						<EventCard
							name="Case Clash"
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
							name="Surveyor's Hunt"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -4 */}
					<Fade right>
						<EventCard
							name="BridgeIt"
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
