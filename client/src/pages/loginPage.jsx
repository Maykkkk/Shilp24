import React from "react";
import "../links/css/login.css";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar";

const LoginPage = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />

				<Login className="loginComponent" AllAuth={AllAuth} />
			</div>
		</div>
	);
};

export default LoginPage;
