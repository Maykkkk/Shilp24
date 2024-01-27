import React,{ useState } from "react";
import "../links/css/home.css";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import teamPhotos from "./teamPhotos";
import { Link } from "react-router-dom";

import { useMotionValue, useTransform, motion } from "framer-motion";

const Team = ({setAuth, isAuth}) => {
  const [cardState,setCardState] = useState([
    {id:"president",x : useMotionValue(0),y:useMotionValue(0)},
    {id:"conveynor",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"coConveynor1",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"coConveynor2",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"techAdvisor",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"eventsAdvisor1",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"eventsAdvisor2",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"eventsAdvisor3",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"publicityAdvisor",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"techHead",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"techExecutive1",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"techExecutive2",x:useMotionValue(0),y:useMotionValue(0)},
    {id:"techExecutive3",x:useMotionValue(0),y:useMotionValue(0)},
  ]);
  const [rotateState,setRotateState] = useState([
    {id:"president", rotateX:useTransform(cardState[0].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[0].x,[100,-100],[70,-70]),},
    {id:"conveynor", rotateX:useTransform(cardState[1].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[1].x,[100,-100],[70,-70]),},
    {id:"coConveynor1", rotateX:useTransform(cardState[2].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[2].x,[100,-100],[70,-70]),},
    {id:"coConveynor2", rotateX:useTransform(cardState[3].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[3].x,[100,-100],[70,-70]),},
    {id:"techAdvisor", rotateX:useTransform(cardState[4].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[4].x,[100,-100],[70,-70]),},
    {id:"eventsAdvisor1", rotateX:useTransform(cardState[5].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[5].x,[100,-100],[70,-70]),},
    {id:"eventsAdvisor2", rotateX:useTransform(cardState[6].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[6].x,[100,-100],[70,-70]),},
    {id:"eventsAdvisor3", rotateX:useTransform(cardState[7].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[7].x,[100,-100],[70,-70]),},
    {id:"publicityAdvisor", rotateX:useTransform(cardState[8].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[8].x,[100,-100],[70,-70]),},
    {id:"techHead", rotateX:useTransform(cardState[9].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[9].x,[100,-100],[70,-70]),},
    {id:"techExecutive1", rotateX:useTransform(cardState[10].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[10].x,[100,-100],[70,-70]),},
    {id:"techExecutive2", rotateX:useTransform(cardState[11].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[11].x,[100,-100],[70,-70]),},
    {id:"techExecutive3", rotateX:useTransform(cardState[12].y,[-100,100],[70,-70]), rotateY:useTransform(cardState[12].x,[100,-100],[70,-70]),},
  ]);

  

  return (
    <div className="App">
      <div className="body">
        <NavBar setAuth={setAuth} isAuth={isAuth} />

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
              <div style={{perspective: 2000}}>
              <motion.div key={"president"}
              style={{x: cardState[0].x, y: cardState[0].y, rotateX: rotateState[0].rotateX, rotateY: rotateState[0].rotateY,z:100}}
              drag
              dragElastic={0.2}
              dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}}
              className="team-card">
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
              </motion.div>
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
                <motion.div key={"conveynor"}
                
                style={{x: cardState[1].x, y: cardState[1].y, rotateX: rotateState[1].rotateX, rotateY: rotateState[1].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragMomentum={true}
                transition={{ type: 'inertia', stiffness: 100, damping: 30 }}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
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
                </motion.div>
              </div>
              </Fade>
            </div>
            {/* Co-Conveynor */}
            <div>
              <Fade right>
              <h1>Co-Conveynors</h1>
              <div className="team-container">
                <motion.div key={"coConveynor1"}
                style={{x: cardState[2].x, y: cardState[2].y, rotateX: rotateState[2].rotateX, rotateY: rotateState[2].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card y">
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
                </motion.div>

                <motion.div key={"coConveynor2"}
                style={{x: cardState[3].x, y: cardState[3].y, rotateX: rotateState[3].rotateX, rotateY: rotateState[3].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
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
                </motion.div>
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
              <motion.div 
              style={{x: cardState[4].x, y: cardState[4].y, rotateX: rotateState[4].rotateX, rotateY: rotateState[4].rotateY,z:100}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
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
              <motion.div 
              style={{x: cardState[5].x, y: cardState[5].y, rotateX: rotateState[5].rotateX, rotateY: rotateState[5].rotateY,z:100}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{x: cardState[6].x, y: cardState[6].y, rotateX: rotateState[6].rotateX, rotateY: rotateState[6].rotateY,z:100}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
              

              <motion.div 
              style={{x: cardState[7].x, y: cardState[7].y, rotateX: rotateState[7].rotateX, rotateY: rotateState[7].rotateY,z:100}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
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
              <motion.div 
              style={{x: cardState[8].x, y: cardState[8].y, rotateX: rotateState[8].rotateX, rotateY: rotateState[8].rotateY,z:100}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>
          </div>

          {/* Tech Head & Executives */}
          <div className="team-title" id="tech">
            <Fade left>
            <div>
              <h1>Tech Head</h1> {/*Tech Head */}
              <div className="team-container">
                <motion.div 
                style={{x: cardState[9].x, y: cardState[9].y, rotateX: rotateState[9].rotateX, rotateY: rotateState[9].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
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
                </motion.div>
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Tech Executives</h1> {/*Tech Executive */}
              <div className="team-container">
                <motion.div 
                style={{x: cardState[10].x, y: cardState[10].y, rotateX: rotateState[10].rotateX, rotateY: rotateState[10].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.techExecutive1} alt="ProfilePhoto" />
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
                </motion.div>

                <motion.div 
                style={{x: cardState[11].x, y: cardState[11].y, rotateX: rotateState[11].rotateX, rotateY: rotateState[11].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.techExecutive2} alt="ProfilePhoto" />
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
                </motion.div>

                <motion.div 
                style={{x: cardState[12].x, y: cardState[12].y, rotateX: rotateState[12].rotateX, rotateY: rotateState[12].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={teamPhotos.techExecutive3} alt="ProfilePhoto" />
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
                </motion.div>
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
                <motion.div 
                style={{x: cardState[0].x, y: cardState[0].y, rotateX: rotateState[0].rotateX, rotateY: rotateState[0].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
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
                </motion.div>

                <motion.div 
                style={{x: cardState[1].x, y: cardState[1].y, rotateX: rotateState[1].rotateX, rotateY: rotateState[1].rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
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
                </motion.div>

                <div
                className="team-card">
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

                <div
                className="team-card">
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
                <div
                className="team-card">
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

                <div
                className="team-card">
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

                <div
                className="team-card">
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
                <div
                className="team-card">
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

                <div
                className="team-card">
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

                <div
                className="team-card">
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

                <div
                className="team-card">
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

                <div
                className="team-card">
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
                <div
                className="team-card">
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

                <div
                className="team-card">
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

                <div
                className="team-card">
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
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
              
            </div>
            </Fade>

            <Fade right>
            <h1>Public Relations Executives</h1>
            <div className="team-container">
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>
          </div>

          {/* Design & Content Heads*/}
          <div className="team-title" id="design&content">
            <Fade left>
            <h1>Design and Content Heads</h1>
            <div className="team-container">
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>

            <Fade right>
            <h1>Design and Content Executives</h1>
            <div className="team-container">
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>
          </div>

          {/* Publicity Head */}
          <div className="team-title" id="publicity">
            <Fade left>
            <h1>Publicity Head</h1>
            <div className="team-container">
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>

              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>

            <Fade right>
            <h1>Publicity Executives</h1>
            <div className="team-container">
              <motion.div 
              style={{}}
              drag
              dragElastic={0.18}
              dragConstraints={{top: 0, left:0 , right: 0, bottom: 0}}
              whileTap={{cursor:"grabbing"}} 
              className="team-card">
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
              </motion.div>
            </div>
            </Fade>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Team;
