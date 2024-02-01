import React from "react";

import Register from "../components/Login/Register";

import NavBar from "../components/NavBar";

const RegisterPage = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<NavBar AllAuth={AllAuth} />

				<Register setAuth={setAuth} />
			</div>
		</div>
	);
};

export default RegisterPage;
