import React, { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/events.css";
import NavBar from "../components/NavBar";
import InnovationOdyssey from "../components/InnovationOdyssey";
import TechShowcase from "../components/TechShowcase";
import CivilExpo from "../components/CivilExpo";
import ClashCarnival from "../components/ClashCarnival";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";

import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";

const Events = ({ AllAuth }) => {
	const [RegisteredEvents, setRegisteredEvents] = useState([]);

	useEffect(() => {
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				if (data.Events) {
					setRegisteredEvents(data.Events);
				}
			}
		});
	}, []);

	return (
		<div className="App">
			<div className="body events-body">
				<NavBar AllAuth={AllAuth} />
				<InnovationOdyssey />
				<div className="Container">
					<TechShowcase
						AllAuth={AllAuth}
						RegisteredEvents={RegisteredEvents}
					></TechShowcase>
					<CivilExpo
						AllAuth={AllAuth}
						RegisteredEvents={RegisteredEvents}
					></CivilExpo>
					<ClashCarnival
						AllAuth={AllAuth}
						RegisteredEvents={RegisteredEvents}
					></ClashCarnival>
				</div>
				<Fade bottom>
					<Footer></Footer>
				</Fade>
			</div>
		</div>
	);
};

export default Events;
