import {useState, useEffect} from "react";
import EmptyNote from "../components/EmptyNote";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/home.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "../components/ParticleBackground";



const Guests = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
		{loading ? (
			<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
				<ParticleBackground />
				<PacmanLoader
					color="#36d7b7"
					loading={loading}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		) :
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />
				<EmptyNote />
			</div>
			<Footer />
		</div>
		}
		</>
	);
};

export default Guests;
