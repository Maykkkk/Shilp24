import "../links/css/navbar.css";
import CES from "../links/img/CES.png";

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg  fixed-top">
            <a className="navbar-brand mx-1 py-auto" href="#home">
                <img src={CES} alt="SHILP logo" width="64px" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav ">
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#competitions">Competitions</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#guests">Guests</a>
                    </li>
                    <li className="nav-item px-2 mx-2">
                        <a className="nav-link" href="#events">Events</a>
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