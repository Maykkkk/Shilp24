import '../links/css/home.css';
import NavBar from '../components/NavBar';
import ClashCarnival from '../components/ClashCarnival';
import Footer from '../components/Footer';
function events() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <div className="body">
            <ClashCarnival></ClashCarnival>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default events