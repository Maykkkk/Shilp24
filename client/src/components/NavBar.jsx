import "../links/css/navbar.css";
import SHILP from "../links/img/SHILP.png";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function NavBar() {
    return (
        <Fade top>
        <nav className="navbar navbar-dark navbar-expand-xl ">
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
                        <Link className="nav-link" to='/competitions'>Competitions</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Guests</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/events'>Events</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                    <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                    <Link className="nav-link" to='/store'>Store</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                    <Link className="nav-link" to='/accommodations'>Accommodations</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                    <Link className="nav-link" to='/team'>Team</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <Link className="nav-link" to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </Fade>
    )
}

export default NavBar