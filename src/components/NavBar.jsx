import "../links/css/navbar.css";
import CES from "../links/img/CES.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg ">
            <a className="navbar-brand mx-1 py-auto" href="#home">
                <img src={CES} alt="SHILP logo" width="64px" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav ">
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/competitions'>Competitions</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/guests'>Guests</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/events'>Events</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                    <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar