import React,{useState, useEffect} from "react";
import Register from "../components/Login/Register";
import NavBar from "../components/NavBar";
import PacmanLoader from "react-spinners/PacmanLoader";
import ParticleBackground from "../components/ParticleBackground";

const override = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderColor: "red",
  };


const RegisterPage = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
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

				<Register setAuth={setAuth} />
			</div>
			}
		</div>
	);
};

export default RegisterPage;
