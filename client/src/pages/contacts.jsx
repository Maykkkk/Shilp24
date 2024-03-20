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
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
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
						color="#36d7b7"
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
					<div className="contactusTop">Contact Us</div>
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
						 	Mithilesh K
							<br />
							<Link to="k.mithilesh.civ21@itbhu.ac.in">
								k.mithilesh.civ21@itbhu.ac.in
							</Link>
							<br />
							+91 6309881816
						</div>
						<div className="name3 contact fs-5">
							Vishu Raj
							<br />
							+91 9065055049
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
