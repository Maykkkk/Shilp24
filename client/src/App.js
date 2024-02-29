import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./pages/home";
import Events from "./pages/events";
import Competitions from "./pages/competitions";
import Guests from "./pages/guests";
import Contacts from "./pages/contacts";
import Store from "./pages/Store";
import Accommodation from "./pages/Accommodation";
import Team from "./pages/team";
import Media from "./pages/media";
import LoginPage from "./pages/loginPage";
import Admin from "./pages/admin";
// import RegisterPage from "./pages/registerPage";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [isProfileComplete, setIsProfileComplete] = useState(true);

	const AllAuth = {
		setAuth: setIsAuthenticated,
		isAuth: isAuthenticated,
		setIsProf: setIsProfileComplete,
		isProf: isProfileComplete,
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				const docRef = doc(
					db,
					"userProfile",
					localStorage.getItem("UID")
				);
				getDoc(docRef).then((docSnap) => {
					if (docSnap.exists()) {
						const userData = docSnap.data();
						if (
							userData.Email &&
							userData.Mobile &&
							userData.College &&
							userData.Year
						) {
							setIsProfileComplete(true);
						} else {
							setIsProfileComplete(false);
						}
					} else {
						setIsProfileComplete(false);
					}
				});
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home AllAuth={AllAuth} />} />

				<Route
					exact
					path="/events"
					element={
						isAuthenticated ? (
							<Events AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/competitions"
					element={
						isAuthenticated ? (
							<Competitions AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/guests"
					element={
						isAuthenticated ? (
							<Guests AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/contacts"
					element={
						isAuthenticated ? (
							<Contacts AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/store"
					element={
						isAuthenticated ? (
							<Store AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					exact
					path="/accommodations"
					element={
						isAuthenticated ? (
							<Accommodation AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				></Route>
				<Route
					exact
					path="/team"
					element={
						isAuthenticated ? (
							<Team AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				></Route>
				<Route
					exact
					path="/media"
					element={
						isAuthenticated ? (
							<Media AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				></Route>
				<Route
					exact
					path="/gallery"
					element={
						isAuthenticated ? (
							<Gallery AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				></Route>

				<Route
					exact
					path="/profile"
					element={
						isAuthenticated ? (
							<Profile AllAuth={AllAuth} />
						) : (
							<Navigate to="/login" />
						)
					}
				></Route>

				{/* Auth */}
				<Route
					exact
					path="/login"
					element={
						!isAuthenticated ? (
							<LoginPage AllAuth={AllAuth} />
						) : (
							<Navigate to="/" />
						)
					}
				></Route>
				<Route
					exact
					path="/admin"
					element={<Admin AllAuth={AllAuth} />}
				></Route>
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</BrowserRouter>
	);
}

export default App;
