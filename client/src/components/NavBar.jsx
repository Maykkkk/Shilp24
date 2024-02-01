import "../links/css/navbar.css";
import SHILP from "../links/img/SHILP.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const NavBar = ({ AllAuth }) => {
	const isAuth = AllAuth.isAuth;
	const setAuth = AllAuth.setAuth;

	const onLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem("displayName");
		localStorage.removeItem("photoURL");
		localStorage.removeItem("UID");
		setAuth(false);
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
								className="nav-link active"
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/competitions">
								Competitions
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/guests">
								Guests
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/events">
								Events
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/contacts">
								Contacts
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/store">
								Store
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/accommodations">
								Accommodations
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/team">
								Team
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/media">
								Media
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link className="nav-link" to="/gallery">
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
								<Link className="nav-link" to="/profile">
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
