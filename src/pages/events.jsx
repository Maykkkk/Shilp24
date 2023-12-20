import '../links/css/home.css';
import '../links/css/events.css';
import NavBar from '../components/NavBar';
import InnovationOdyssey from '../components/InnovationOdyssey';
import TechShowcase from '../components/TechShowcase';
import CivilExpo from '../components/CivilExpo';
import ClashCarnival from '../components/ClashCarnival';
import Footer from '../components/Footer';
function events() {
  return (
    <div className="App">
        <div className="body">
          <NavBar></NavBar>
          <InnovationOdyssey/>
          <div className="Container">
            <TechShowcase></TechShowcase>
            <CivilExpo></CivilExpo>
          </div>
          <ClashCarnival></ClashCarnival>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default events