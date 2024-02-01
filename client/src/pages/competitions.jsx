import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/Competition.css";
import EmptyNote from "../components/EmptyNote";

const competitions = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body" id="competition">
				<NavBar AllAuth={AllAuth} />
				{/* <div className='cards'>
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    </div> */}
				<EmptyNote />
				<Footer />
			</div>
		</div>
	);
};

export default competitions;
