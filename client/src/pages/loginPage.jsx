import React,{useState, useEffect} from "react";
import "../links/css/login.css";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar";
import Loader from "../components/LoadingScreen";

const LoginPage = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
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

				<Login className="loginComponent" AllAuth={AllAuth} />
			</div>
			}
		</div>
	);
};

export default LoginPage;
