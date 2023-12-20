import '../links/css/home.css';
import NavBar from '../components/NavBar';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import Shilp from '../components/shilp';
import About from '../components/About';
import ExploreMore from '../components/ExploreMore';

function Home() {
  return (
    <div className="App">
      <div className="body">
        <NavBar></NavBar>
        <div className="container d-flex align-items-center justify-content-center" id='home'>
          <div id="title" className=''>
          <h1 className='m-0 p-0 '>
            <span className="primary x">SHILP </span> 
            <span className="text-light">IIT BHU</span>
            </h1>
          <h2 className='text-light m-0 p-0'>Civil Engineering Society</h2>
          </div>
        </div>
        <div className="container" id='competitions'><Shilp/></div>
        <div className="container" id='competitions'>
          <ImageGallery></ImageGallery>
        </div>
        <div className="container-about-events-footer">
          <About/>
          <ExploreMore/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
