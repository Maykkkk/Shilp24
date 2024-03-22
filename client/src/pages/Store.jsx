import { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/events.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import InnovationInStyle from '../components/innovationInStyle';
import Merch from '../components/Store/Mercahndise';
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "../components/ParticleBackground";


const override = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderColor: "red",
  };

const Store = ({ AllAuth }) => {

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
				<ParticleBackground />
				<NavBar AllAuth={AllAuth} />

				<div className="Container">
          {/* <InnovationInStyle/> */}
          <Merch/>
				<div>
					{/* <EmptyNote /> */}
					</div>
				</div>
				<Footer></Footer>
			</div>
			}
		</div>
	);
};

export default Store;
