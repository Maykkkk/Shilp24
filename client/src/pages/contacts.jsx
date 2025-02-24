import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import Loader from "../components/LoadingScreen";
import "../links/css/Contact.css";

const Contacts = ({ AllAuth }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="loader-container">
                    <Loader onComplete={() => setLoading(false)} />
                </div>
            ) : (
                <div className="body" id="contact">
					<div className="contactus">
                    <NavBar AllAuth={AllAuth} />
                    <Fade top>
                        <div className="contactusTop">Get in Touch</div>
                    </Fade>
                    <div className="contact-body">
						<Fade left>
                        <div className="contact">
                            <h2>Aman Srivastava</h2>
                            <a href="mailto:aman.srivastava.civ21@itbhu.ac.in">aman.srivastava.civ21@itbhu.ac.in</a>
                            <p>📞 +91 96251 67658</p>
                        </div>
						</Fade>
						<Fade right>
                        <div className="contact">
                            <h2>Mithilesh K</h2>
                            <a href="mailto:k.mithilesh.civ21@itbhu.ac.in">k.mithilesh.civ21@itbhu.ac.in</a>
                            <p>📞 +91 6309881816</p>
                        </div>
						</Fade>
						<Fade left>
                        <div className="contact">
                            <h2>Vishu Raj</h2>
                            <p>📞 +91 9065055049</p>
                        </div>
						</Fade>
						<Fade right>
                        <div className="contact">
                            <h2>Akhand Pratap Yadav</h2>
                            <a href="mailto:akhandp.yadav.civ21@itbhu.ac.in">akhandp.yadav.civ21@itbhu.ac.in</a>
                            <p>📞 +91 7007446710</p>
                        </div>
						</Fade>
                    </div>
					</div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Contacts;
