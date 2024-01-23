import React from "react";
import "../links/css/home.css";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import teamPhotos from "./teamPhotos";
import { Link } from "react-router-dom";

function media() {

  return (
    <div className="App">
      <div className="body">
        <NavBar></NavBar>
        <div className="shilp-team">
          <Fade top>
          <header className="team-header">
            <h1>Meet our Team</h1>
          </header>
          </Fade>
          <div className="team-title" id="president">
            <Fade left>
            <h1>PRESIDENT(Students), CES</h1>
            </Fade>
            <Fade right>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    
                    <img src={teamPhotos.president} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Conveynors */}
          <div className="team-title" id="conveyners">
            {/* Conveynor */}
            <div>
              <Fade left>
              <h1>Conveynor</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.conveynor} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                    <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
              </Fade>
            </div>
            {/* Co-Conveynor */}
            <div>
              <Fade right>
              <h1>Co-Conveynors</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.coConveynor1} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.coConveynor2} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
              </Fade>
            </div>
          </div>

          {/* Tech Advisors */}
          <div className="team-title" id="techAdvisor">
            <Fade left>
            <h1>Tech Advisor</h1>
            </Fade>
            <Fade right>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.techAdvisor} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Events-Advisor */}
          <div className="team-title" id="eventAdvisor">
            <Fade left>
            <h1>Events-Advisors</h1>
            </Fade>
            <Fade right>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.eventsAdvisor1} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.eventsAdvisor2} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
              

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.eventsAdvisor3} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Publicity Advisors */}
          <div className="team-title" id="publicityAdvisor">
            <Fade left>
            <h1>Publicity Advisor</h1>
            </Fade>
            <Fade right>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.publicityAdvisor} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Tech Head & Executives */}
          <div className="team-title" id="tech">
            <Fade left>
            <div>
              <h1>Tech Head</h1> {/*Tech Head */}
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.techHead} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Tech Executives</h1> {/*Tech Executive */}
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>
          </div>

          {/* Marketing */}
          <div className="team-title" id="marketing">
            <Fade left>
            <div>
              <h1>Marketing Heads</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.marketingHead1} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.marketingHead2} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.marketingHead3} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.marketingHead4} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Marketing Executives</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>
          </div>

          {/* Event Heads*/}
          <div className="team-title" id="events">
            <Fade left>
            <div>
              <h1>Event Heads</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.eventsHead1} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.eventsHead2} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.eventsHead3} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.eventsHead4} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>                

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.eventsHead5} alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Event Executives</h1>
              <div className="team-container">
                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>

                <div className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src="" alt="ProfilePhoto" />
                    </div>
                    <div className="contentBx">
                      <h3>Name</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>
          </div>

          {/* PR Heads*/}
          <div className="team-title" id="pr">
            <Fade left>
            <h1>Public Relations Head</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.prHead1} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.prHead2} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.prHead3} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.prHead4} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
              
            </div>
            </Fade>

            <Fade right>
            <h1>Public Relations Executives</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src="" alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Design & Content Heads*/}
          <div className="team-title" id="design&content">
            <Fade left>
            <h1>Design and Content Heads</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.designContentHead1} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.designContentHead2} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.designContentHead3} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>

            <Fade right>
            <h1>Design and Content Executives</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src="" alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>

          {/* Publicity Head */}
          <div className="team-title" id="publicity">
            <Fade left>
            <h1>Publicity Head</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.publicityHead1} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.publicityHead2} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>

              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src={teamPhotos.publicityHead3} alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                </ul>
              </div>
            </div>
            </Fade>

            <Fade right>
            <h1>Publicity Executives</h1>
            <div className="team-container">
              <div className="team-card">
                <div className="team-content">
                  <div className="imgBx">
                    <img src="" alt="ProfilePhoto" />
                  </div>
                  <div className="contentBx">
                    <h3>Name</h3>
                  </div>
                </div>
                <ul className="sci">
                  <li><a href="#"><FaLinkedin className="linkedIn" /></a></li>
                  <li><a href="#"><FaFacebook className="facebook" /></a></li>
                  <li><a href="#"><FaInstagram className="instagram" /></a></li>
                </ul>
              </div>
            </div>
            </Fade>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default media;
