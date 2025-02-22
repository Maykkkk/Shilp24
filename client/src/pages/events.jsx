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
import Loader from "../components/LoadingScreen";
import Button from "../components/Button";

import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";



const Events = ({ AllAuth }) => {
	const [RegisteredEvents, setRegisteredEvents] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

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
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#271e29"}}>
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) : 
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
				<Button name="RULEBOOK" url="/pdfs/RULEBOOK(Main Events).pdf" target="_blank"/>
				<div className="Bottom">
					<Fade bottom>
						<Footer></Footer>
					</Fade>
				</div>
			</div>
		}
		</div>
	);
};

export default Events;
