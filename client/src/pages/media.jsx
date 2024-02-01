import React from "react";
import "../links/css/home.css";
import "../links/css/media.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyNote from "../components/EmptyNote";
// import demo from '../links/img/Events/3.png'

const media = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<EmptyNote />
				<Footer />
			</div>
		</div>
	);
};

export default media;
