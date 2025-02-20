import {useState, useEffect} from "react";
import "../links/css/home.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Shilp from "../components/shilp";
import About from "../components/About";
import ExploreMore from "../components/ExploreMore";
import EventSchedule from "../components/EventSchedule";
import ContactInformation from "../components/ContactInformation";
// import ParticleBackground from "../components/ParticleBackground";
// import PacmanLoader from "react-spinners/PacmanLoader";
import Loader from "../components/LoadingScreen"

// const override = {
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	borderColor: "red",
//   };

const Home = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);


	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
					{/* <ParticleBackground /> */}
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) : <div className="home-body">
			{/* <ParticleBackground /> */}
			<NavBar AllAuth={AllAuth} />
			<Hero />
			<Shilp />
			<About />
			<ExploreMore />
			<EventSchedule />
			<ContactInformation/>
			<Footer />
		</div>
		}
		</div>
	);
};

export default Home;
