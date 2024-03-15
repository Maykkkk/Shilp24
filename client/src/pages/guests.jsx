import {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GuestCard from "../components/GuestCard";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "../components/ParticleBackground";
import '../links/css/home.css';
import '../links/css/guests.css';


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
				
				<div className=" Guesttitle">
					Our Guests
				</div>
				<div className="guestContainer">
					<h1 className="fs-1">Chief Guest</h1>
					<div className="guestCards">
						<GuestCard name="Mr. Daljeet Singh" desig="Director, DMRC" desc="Experienced Works Director with a demonstrated history of working in the railroad manufacture industry. Skilled in AutoCAD, Highways, Transportation Planning, Bridge, and Engineering. Strong operations professional graduated from B Tech in civil engg from IIT (BHU) Varanasi." url="./guests/guest.webp"/>
					</div>
					
				</div>	

				<Footer />
			</div>
		</div>
		
		}
		</>
	);
};

export default Guests;
