import {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GuestCard from "../components/GuestCard";
import '../links/css/home.css';
import '../links/css/guests.css';
import Loader from "../components/LoadingScreen";

const Guests = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<>
		{loading ? (
			<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
			{/* <ParticleBackground /> */}
			<Loader onComplete={() => setLoading(false)} />
			</div>
		) :
		<div className="App">
			
			<div className="body guest-body">
				
				<NavBar AllAuth={AllAuth} />
				
				<div className=" Guesttitle">
					Our Guests
				</div>
				<div className="guestContainer">
				<h1 style={{fontStyle:"italic"}}>
					Chief Guest
				</h1>
				<div className="guestCards">
						<GuestCard name="Mr. Daljeet Singh" desig="Director, DMRC" desc="Mr. Daljit Singh completed his graduation from IIT (BHU) and is now working as the Director (works) of Delhi Metro Rail Corporation, Lucknow Metro Rail Corporation, and Patna Metro Rail Corporation. Felicitated with the Lifetime Achievement by the Tunneling Association of India is a testimony." url="./guests/guest.webp"/>
						<GuestCard name="Mr. Anupam Awasthi" desig="Deputy Chief Project Manager,NHSRCL" desc="Deputy Chief Project Manager at the National High-Speed Rail Corporation Ltd (NHSRCL). He is also an alumnus of IIT (BHU). Recognized as the recipient of the Furuichi Award from the University of Tokyo and has received a dean's award after completion of master's." url="./guests/guest2.webp"/>
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
