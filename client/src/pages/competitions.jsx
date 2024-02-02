import React,{useEffect,useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/Competition.css";
import EmptyNote from "../components/EmptyNote";
import Fade from "react-reveal/Fade";
import ParticleBackground from "../components/ParticleBackground";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
  };


const Competitions = ({ AllAuth }) => {

  const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="App">
      {loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#271e29"}}>
					<ParticleBackground />
					<PacmanLoader
						color="white"
						loading={loading}
						cssOverride={override}
						size={50}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : 
			<div className="body">
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
				<Fade bottom>
					<Footer></Footer>
				</Fade>
			</div>
}
		</div>
	);
};

export default Competitions;
