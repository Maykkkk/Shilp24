import "../links/css/navbar.css";
import SHILP from "../links/img/SHILP.png";
import { Link, useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = ({ AllAuth }) => {
	const location = useLocation();
	const setAuth = AllAuth.setAuth;
	const isAuth = AllAuth.isAuth;

	const onLogout = (e) => {
		e.preventDefault();
		signOut(auth)
			.then(() => {
				localStorage.removeItem("displayName");
				localStorage.removeItem("photoURL");
				localStorage.removeItem("UID");
				setAuth(false);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<Fade top>
			<nav className="navbar navbar-dark navbar-expand-xl ">
				<a className="navbar-brand mx-1 py-auto" href="#home">
					<img src={SHILP} alt="SHILP logo" width="64px" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarText"
				>
					<ul className="navbar-nav ">
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/" ? " active" : "")
								}
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/competitions"
										? " active"
										: "")
								}
								to="/competitions"
							>
								Competitions
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/guests"
										? " active"
										: "")
								}
								to="https://www.youtube.com/watch?v=xvFZjo5PgG0"
							>
								Guests
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/events"
										? " active"
										: "")
								}
								to="/events"
							>
								Events
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/contacts"
										? " active"
										: "")
								}
								to="/contacts"
							>
								Contacts
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/store"
										? " active"
										: "")
								}
								to="/store"
							>
								Store
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/accommodations"
										? " active"
										: "")
								}
								to="/accommodations"
							>
								Accommodations
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/team"
										? " active"
										: "")
								}
								to="/team"
							>
								Team
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/media"
										? " active"
										: "")
								}
								to="https://www.youtube.com/watch?v=xvFZjo5PgG0"
							>
								Media
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/gallery"
										? " active"
										: "")
								}
								to="/gallery"
							>
								Gallery
							</Link>
						</li>

						{isAuth ? (
							<>
								<li className="nav-item px-2 mx-2">
									<button
										className="nav-link"
										to="/register"
										onClick={(e) => {
											onLogout(e);
										}}
									>
										Logout
									</button>
								</li>
								<Link
									className={
										"nav-link" +
										(location.pathname === "/profile"
											? " active"
											: "")
									}
									to="/profile"
								>
									<img
										src={localStorage.getItem("photoURL")}
										alt="Profile Pic"
										className="ProfilePic"
									/>
								</Link>
							</>
						) : (
							<></>
						)}
					</ul>
				</div>
			</nav>
		</Fade>
	);
};

export default NavBar;
