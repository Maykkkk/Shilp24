import React,{useState, useEffect} from "react";
import "../links/css/home.css";
import "../links/css/media.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyNote from "../components/EmptyNote";
// import demo from '../links/img/Events/3.png'
import Loader from "../components/LoadingScreen";

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
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
				{/* <ParticleBackground /> */}
				<Loader onComplete={() => setLoading(false)} />
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
