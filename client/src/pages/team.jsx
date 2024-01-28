import React from "react";
import "../links/css/home.css";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import teamPhotos from "./teamPhotos";
import TeamCard from "../components/TeamCard";

const Team = ({setAuth, isAuth}) => {

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
                <TeamCard Name="Ayush Sinha" ProfilePhoto={teamPhotos.president} />
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
                <TeamCard Name="Ashutosh Gupta" ProfilePhoto={teamPhotos.conveynor} />
              </div>
              </Fade>
            </div>
            {/* Co-Conveynor */}
            <div>
              <Fade right>
              <h1>Co-Conveynors</h1>
              <div className="team-container">
                <TeamCard Name="Kanhaiya Kumar" ProfilePhoto={teamPhotos.coConveynor1} />
                <TeamCard Name="Nandini" ProfilePhoto={teamPhotos.coConveynor2} />
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
              <TeamCard Name="Jeevesh Garg" ProfilePhoto={teamPhotos.techAdvisor} />
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
              <TeamCard Name="Anup Tiwari" ProfilePhoto={teamPhotos.eventsAdvisor1} />
              <TeamCard Name="Navvay Dhingra" ProfilePhoto={teamPhotos.eventsAdvisor2} />
              <TeamCard Name="Pawan Kumar" ProfilePhoto={teamPhotos.eventsAdvisor3} />
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
              <TeamCard Name="Assim Ujjwal" ProfilePhoto={teamPhotos.publicityAdvisor} />
            </div>
            </Fade>
          </div>

          {/* Tech Head & Executives */}
          <div className="team-title" id="tech">
            <Fade left>
            <div>
              <h1>Tech Head</h1> {/*Tech Head */}
              <div className="team-container">
              <TeamCard Name="Mayank Mani Nath Gupta" ProfilePhoto={teamPhotos.techHead} />
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Tech Executives</h1> {/*Tech Executive */}
              <div className="team-container">
                <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
                <TeamCard Name="Abhijeet" ProfilePhoto={teamPhotos.techExecutive2}/>
                <TeamCard Name="Abhishek" ProfilePhoto={teamPhotos.techExecutive3}/>
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
                <TeamCard Name="Aman Srivastava" ProfilePhoto={teamPhotos.marketingHead1} />
                <TeamCard Name="Mithilesh K" ProfilePhoto={teamPhotos.marketingHead2} />
                <TeamCard Name="Prakhar Yadav" ProfilePhoto={teamPhotos.marketingHead3} />
                <TeamCard Name="Priyaranjan Kumar Khan" ProfilePhoto={teamPhotos.marketingHead4} />
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Marketing Executives</h1>
              <div className="team-container">
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
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
              <TeamCard Name="Param Srivastava" ProfilePhoto={teamPhotos.eventsHead1} />
              <TeamCard Name="Prachi Priya" ProfilePhoto={teamPhotos.eventsHead2} />
              <TeamCard Name="Pratik Nand" ProfilePhoto={teamPhotos.eventsHead3} />
              <TeamCard Name="Radhia Singh Rajawat" ProfilePhoto={teamPhotos.eventsHead4} />
              </div>
            </div>
            </Fade>

            <Fade right>
            <div>
              <h1>Event Executives</h1>
              <div className="team-container">
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
              <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
              </div>
            </div>
            </Fade>
          </div>

          {/* PR Heads*/}
          <div className="team-title" id="pr">
            <Fade left>
            <h1>Public Relations Head</h1>
            <div className="team-container">
            <TeamCard Name="Nishkarsh Sharma" ProfilePhoto={teamPhotos.prHead1} />
            <TeamCard Name="Pratham Chaudhary" ProfilePhoto={teamPhotos.prHead2} />
            <TeamCard Name="Sumana Sree" ProfilePhoto={teamPhotos.prHead3} />
              
            </div>
            </Fade>

            <Fade right>
            <h1>Public Relations Executives</h1>
            <div className="team-container">
            <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
            </div>
            </Fade>
          </div>

          {/* Design & Content Heads*/}
          <div className="team-title" id="design&content">
            <Fade left>
            <h1>Design and Content Heads</h1>
            <div className="team-container">
            <TeamCard Name="Ankit Kumar" ProfilePhoto={teamPhotos.designContentHead1} />
            <TeamCard Name="Ashwani Kumar Sharma" ProfilePhoto={teamPhotos.designContentHead2} />
            <TeamCard Name="Mansi Pandharpure" ProfilePhoto={teamPhotos.designContentHead3} />
            </div>
            </Fade>

            <Fade right>
            <h1>Design and Content Executives</h1>
            <div className="team-container">
            <TeamCard Name="Sumit Dutta" ProfilePhoto={teamPhotos.techExecutive1} />
            </div>
            </Fade>
          </div>

          {/* Publicity Head */}
          <div className="team-title" id="publicity">
            <Fade left>
            <h1>Publicity Head</h1>
            <div className="team-container">
            <TeamCard Name="Akhand Pratap Yadav" ProfilePhoto={teamPhotos.publicityHead1} />
            <TeamCard Name="Anchal Ganguli" ProfilePhoto={teamPhotos.publicityHead2} />
            <TeamCard Name="Manvi Srivastava" ProfilePhoto={teamPhotos.publicityHead3} />
            </div>
            </Fade>

            <Fade right>
            <h1>Publicity Executives</h1>
            <div className="team-container">
            <TeamCard Name="Anurag Prakash" ProfilePhoto={teamPhotos.publicityExecutive1} />
            <TeamCard Name="Ayush Kumar" ProfilePhoto={teamPhotos.publicityExecutive2} />
            <TeamCard Name="Ayush Raj" ProfilePhoto={teamPhotos.publicityExecutive3} />
            <TeamCard Name="Deepak Yadav" ProfilePhoto={teamPhotos.publicityExecutive4} />
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
