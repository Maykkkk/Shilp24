import React,{useEffect,useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/workshop.css";
import Fade from "react-reveal/Fade";
import ParticleBackground from "../components/ParticleBackground";
import PacmanLoader from "react-spinners/PacmanLoader";
import WorkshopCard from "../components/WorkshopCard";

const override = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
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
						color="#36d7b7"
						loading={loading}
						cssOverride={override}
						size={50}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			) : 
      <>
			<div className="body workshop-body">
        <ParticleBackground />
				<NavBar AllAuth={AllAuth}/>
        <div className="workshopHeading">
          <div className="workshopTitle">
            Workshops
          </div>
        </div>
        <div className='cards'>
          <WorkshopCard
            name="STAAD Pro"
            details="Explore STAAD Pro in our 3-4 hour workshop. Gain hands-on experience and receive a course certificate!"
          />
          <WorkshopCard
            name="BIM"
            details="Discover BIM in just 1-2 hours. Get a certificate upon completion and Elevate your skills with us!"
          />
        </div>
      <Fade bottom>
          <Footer></Footer>
        </Fade>
        </div>
    </>
    }
		</div>
	);
}

export default Competitions;