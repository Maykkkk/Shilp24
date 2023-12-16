import "../links/css/navbar.css";
import CES from "../links/img/CES.png";

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
            <a class="navbar-brand mx-1 py-auto" href="\">
                <img src={CES} alt="SHILP logo" width="64px" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav ms-auto ml-2 ml-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/competitions">Competitions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/guests">Guests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar