import "../links/css/navbar.css";
import SHILP from "../links/img/SHILP.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg  fixed-top">
            <a className="navbar-brand mx-1 py-auto" href="#home">
                <img src={SHILP} alt="SHILP logo" width="64px" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                <ul className="navbar-nav ">
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#competitions">Competitions</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#guests">Guests</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/events'>Events</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar