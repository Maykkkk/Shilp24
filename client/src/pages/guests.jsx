import React from "react";
import EmptyNote from "../components/EmptyNote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/home.css";

const guests = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<EmptyNote />
			</div>
			<Footer />
		</div>
	);
};

export default guests;
