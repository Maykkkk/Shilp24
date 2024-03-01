import {useState, useEffect} from "react";
import "../links/css/home.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";
import Shilp from "../components/shilp";
import About from "../components/About";
import ExploreMore from "../components/ExploreMore";
import ParticleBackground from "../components/ParticleBackground";
import PacmanLoader from "react-spinners/PacmanLoader";


const override = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderColor: "red",
  };

const Home = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);


	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
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
			) : <div className="home-body">
			<ParticleBackground />
			<NavBar AllAuth={AllAuth} />
			<Hero />
			<Shilp />
			<div className="container" id="gallery">
				<ImageGallery></ImageGallery>
			</div>
			<div className="container-about-events-footer">
				<About />
				<ExploreMore />
			</div>
			<div className="Bottom">
				<Footer />
			</div>
		</div>
		}
		</div>
	);
};

export default Home;
