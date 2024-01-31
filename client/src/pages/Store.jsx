import '../links/css/home.css';
import '../links/css/events.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InnovationInStyle from '../components/innovationInStyle';
import Merch from '../components/Store/Mercahndise';
import EmptyNote from '../components/EmptyNote';

const Store = ({setAuth, isAuth}) => {
  return (
    <div className="App">
        <div className="body"><NavBar setAuth={setAuth} isAuth={isAuth} />

          
          {/* <div className="Container">
          <InnovationInStyle/>
          <Merch/> */}
          <div>
          <EmptyNote/>
          {/* </div> */}
          </div>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default Store