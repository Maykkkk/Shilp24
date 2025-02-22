import React, { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/accommodation.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/Accommodation/AboutUs";
import AccomodationPolicies from "../components/Accommodation/AccommodationPolicies";
import Instructions from "../components/Accommodation/Instructions";
import Faqs from "../components/Accommodation/Faqs";
import ReachingIITBHU from "../components/Accommodation/ReachingIITBHU";
import ContactUs from "../components/Accommodation/ContactUs";
import Fade from "react-reveal/Fade";
import Loader from "../components/LoadingScreen";

const Accommodation = ({ AllAuth }) => {
	const [onButton, setOnButton] = useState("aboutUs");

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	const buttonStyle = {
		backgroundColor: "rgba(209, 33, 86, 1)",
	};

	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
				{/* <ParticleBackground /> */}
				<Loader onComplete={() => setLoading(false)} />
				</div>
			) : 
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<Fade top>
					<div className="accommodation-heading">
						<h1>
							<span>ACCOMMODATION</span> AT{" "}
							<div className="desktop-view">SHILP IIT BHU</div>
						</h1>
					</div>
				</Fade>
				<div className="accommodation-tabs">
					<div className="buttons">
						<button
							className="btn"
							style={
								onButton === "aboutUs"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("aboutUs")}
						>
							About Us
						</button>
						<button
							className="btn"
							style={
								onButton === "accommodationPolicies"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("accommodationPolicies")}
						>
							Accomodation Policies
						</button>
						<button
							className="btn"
							style={
								onButton === "instructions"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("instructions")}
						>
							Instructions
						</button>
						<button
							className="btn"
							style={
								onButton === "faqs"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("faqs")}
						>
							FAQs
						</button>
						<button
							className="btn"
							style={
								onButton === "reachingIITBHU"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("reachingIITBHU")}
						>
							Reaching IIT BHU
						</button>
						<button
							className="btn"
							style={
								onButton === "contactUs"
									? buttonStyle
									: { backgroundColor: "rgba(54, 24, 68, 1)" }
							}
							onClick={() => setOnButton("contactUs")}
						>
							Contact Us
						</button>
					</div>
					{onButton === "aboutUs" ? (
						<AboutUs className="about-us"></AboutUs>
					) : onButton === "accommodationPolicies" ? (
						<AccomodationPolicies />
					) : onButton === "instructions" ? (
						<Instructions />
					) : onButton === "faqs" ? (
						<Faqs />
					) : onButton === "reachingIITBHU" ? (
						<ReachingIITBHU />
					) : onButton === "contactUs" ? (
						<ContactUs />
					) : null}
				</div>
				<Fade bottom>
					<Footer className="footer"></Footer>
				</Fade>
			</div>
			}
		</div>
	);
};

export default Accommodation;
