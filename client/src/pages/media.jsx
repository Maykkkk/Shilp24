import React,{useState, useEffect} from "react";
import "../links/css/home.css";
import "../links/css/media.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyNote from "../components/EmptyNote";
// import demo from '../links/img/Events/3.png'
import ParticleBackground from "../components/ParticleBackground";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
  };

const Media = ({ AllAuth }) => {

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
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<EmptyNote />
				<Footer />
			</div>
}
		</div>
	);
};

export default Media;
