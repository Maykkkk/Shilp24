import React,{useState, useEffect} from "react";
// import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar";
import "../links/css/Contact.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import { MdEmail } from "react-icons/md";
import Fade from "react-reveal/Fade";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "../components/ParticleBackground";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
  };

const Contacts = ({ AllAuth }) => {

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
			<div className="body" id="contact">
				<div>
					<NavBar AllAuth={AllAuth} />
				</div>
				<Fade top>
					<div className="top">Contact Us</div>
				</Fade>
				<div className="outer-body contact-outer-body">
					{/* <Zoom> */}
					<div className=" contact-inner-body inner-body">
						<div className="name1 contact fs-5">
							Aman Srivastava
							<br />
							<Link to="mailto:aman.srivastava.civ21@itbhu.ac.in">
								aman.srivastava.civ21@itbhu.ac.in
							</Link>
							<br />
							+91 96251 67658
						</div>
						<div className="name2 contact fs-5">
							Anchal Ganguli
							<br />
							<Link to="mailto:anchal.ganguly.civ21@itbhu.ac.in">
								anchal.ganguly.civ21@itbhu.ac.in
							</Link>
							<br />
							+91 8765522325
						</div>
						<div className="name3 contact fs-5">
							Manvi Srivastava
							<br />
							<Link to="mailto:manvi.srivastava.civ21@itbhu.ac.in">
								manvi.srivastava.civ21@itbhu.ac.in
							</Link>
							<br />
							+91 9696220428
						</div>
						<div className="name4 contact fs-5">
							Akhand Pratap Yadav
							<br />
							<Link to="mailto:akhandp.yadav.civ21@itbhu.ac.in">
								akhandp.yadav.civ21@itbhu.ac.in
							</Link>
							<br />
							+91 7007446710
						</div>
					</div>
					{/* </Zoom> */}
				</div>
				<Footer />
			</div>
			}
		</div>
	);
};

export default Contacts;
