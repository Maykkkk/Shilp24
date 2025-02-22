import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/workshop.css";
import Fade from "react-reveal/Fade";

import WorkshopCard from "../components/WorkshopCard";

import { getDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/LoadingScreen";

const Competitions = ({ AllAuth }) => {
	const [loading, setLoading] = useState(true);
	const [RegisteredWorkshops, setRegisteredWorkshops] = useState([]);
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
				if (data.Workshops) {
					setRegisteredWorkshops(data.Workshops);
				}
			}
		});
	}, []);
	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
				{/* <ParticleBackground /> */}
				<Loader onComplete={() => setLoading(false)} />
				</div>
			) : (
				<>
					<div className="body workshop-body">
						<NavBar AllAuth={AllAuth} />
						<div className="workshopHeading">
							<div className="workshopTitle">Workshops</div>
						</div>
						<div className="workshopPrice">
							<h4>
								<span>The price :</span> free with shilp
								registration fee. Participants have to pay shilp
								registration fee only
							</h4>
						</div>

						<div className="cards">
							<WorkshopCard
								name="STAAD Pro"
								details="Explore STAAD Pro in our 3-4 hour workshop. Gain hands-on experience and receive a course certificate!"
								AllAuth={AllAuth}
								RegisteredWorkshops={RegisteredWorkshops}
							/>
							<WorkshopCard
								name="BIM"
								details="Discover BIM in just 1-2 hours. Get a certificate upon completion and Elevate your skills with us!"
								AllAuth={AllAuth}
								RegisteredWorkshops={RegisteredWorkshops}
							/>
						</div>
						<Fade bottom>
							<Footer></Footer>
						</Fade>
					</div>
				</>
			)}
		</div>
	);
};

export default Competitions;
