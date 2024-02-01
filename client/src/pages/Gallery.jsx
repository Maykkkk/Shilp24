import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import image1 from "../links/img/galleryPhoto/1.webp";
import image2 from "../links/img/galleryPhoto/2.webp";
import image3 from "../links/img/galleryPhoto/3.webp";
import image4 from "../links/img/galleryPhoto/4.webp";
import Footer from "../components/Footer";

function Gallery({ AllAuth }) {
	return (
		<div className="App">
			<div className="body gallery-body">
				<NavBar AllAuth={AllAuth} />

				<div className="gallerycontain">
					<div className="imgGallery">
						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image2} alt="" />
						</div>
						<div>
							<img className="galimg" src={image3} alt="" />
						</div>

						<div>
							<img className="galimg" src={image4} alt="" />
						</div>
						<div>
							<img className="galimg" src={image2} alt="" />
						</div>

						<div>
							<img className="galimg" src={image3} alt="" />
						</div>
						<div>
							<img className="galimg" src={image4} alt="" />
						</div>

						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image2} alt="" />
						</div>
						<div>
							<img className="galimg" src={image3} alt="" />
						</div>

						<div>
							<img className="galimg" src={image4} alt="" />
						</div>
						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image1} alt="" />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Gallery;
