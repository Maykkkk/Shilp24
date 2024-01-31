import "../links/css/home.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";
import Shilp from "../components/shilp";
import About from "../components/About";
import ExploreMore from "../components/ExploreMore";
import ParticleBackground from "../components/ParticleBackground";

const Home = ({ AllAuth }) => {
	return (
		<div className="App">
			<div className="body">
				<ParticleBackground />
				<NavBar AllAuth={AllAuth} />
				<Hero />
				<Shilp />
				<div className="container" id="gallery">
					<ImageGallery></ImageGallery>
				</div>
				<div className="container-about-events-footer">
					<About />
					<ExploreMore />
				</div>
				<div className="Bottom">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
