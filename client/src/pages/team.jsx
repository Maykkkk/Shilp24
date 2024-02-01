import React from "react";
import "../links/css/home.css";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import teamPhotos from "./teamPhotos";
import TeamCard from "../components/TeamCard";

const Team = ({AllAuth}) => {

  return (
    <div className="App">
      <div className="body">
        <NavBar AllAuth={AllAuth} />

        <div className="shilp-team">
          <Fade top>
            <header className="team-header">
              <h1>Meet our Team</h1>
            </header>
          </Fade>

          {/* Conveynors */}

          <div className="team-title" id="conveynor">
            <Fade left>
              <h1>Conveynor</h1>
            </Fade>
            <Fade right>
              <div className="team-container">
                <div style={{ perspective: 2000 }}>
                  <TeamCard Name="Ashutosh Gupta" ProfilePhoto={teamPhotos.conveynor} />              </div>
              </div>
            </Fade>
          </div>

          <div className="team-title" id="coConveynor">
            {/* Co-Conveynor */}
            <Fade left>
              <h1>Co-Conveynor</h1>
            </Fade>
            <Fade right>
              <div className="team-container">
                <TeamCard Name="Kanhaiya Kumar" ProfilePhoto={teamPhotos.coConveynor1} />
                <TeamCard Name="Nandini Bhimsaria" ProfilePhoto={teamPhotos.coConveynor2} />
              </div>
            </Fade>
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
                  <TeamCard Name="Abhijeet" ProfilePhoto={teamPhotos.techExecutive2} />
                  <TeamCard Name="Abhishek" ProfilePhoto={teamPhotos.techExecutive3} />
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
                  <TeamCard Name="Aditya Maurya" ProfilePhoto={teamPhotos.marketingExecutive1} />
                  <TeamCard Name="Divyanshu Gupta" ProfilePhoto={teamPhotos.marketingExecutive2} />
                  <TeamCard Name="Mugdha Chaturvedi" ProfilePhoto={teamPhotos.marketingExecutive3} />
                  <TeamCard Name="Prakhar Srivastava" ProfilePhoto={teamPhotos.marketingExecutive4} />
                  <TeamCard Name="Utkarsh Singh" ProfilePhoto={teamPhotos.marketingExecutive5} />
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
                  <TeamCard Name="Devesh Sindhi" ProfilePhoto={teamPhotos.eventsHead1} />
                  <TeamCard Name="Param Srivastava" ProfilePhoto={teamPhotos.eventsHead2} />
                  <TeamCard Name="Prachi Priya" ProfilePhoto={teamPhotos.eventsHead3} />
                  <TeamCard Name="Pratik Nand" ProfilePhoto={teamPhotos.eventsHead4} />
                  <TeamCard Name="Radhika Singh Rajawat" ProfilePhoto={teamPhotos.eventsHead5} />
                </div>
              </div>
            </Fade>

            <div>
              <Fade right>
                <h1>Event Executives</h1>
              </Fade>
              <div className="team-container">
                <Fade right>
                  <TeamCard Name="Aman Mani Shandilya" ProfilePhoto={teamPhotos.eventsExecutive1} />
                  <TeamCard Name="Arpit Gupta" ProfilePhoto={teamPhotos.eventsExecutive2} />
                  <TeamCard Name="Aryan CHaudhary" ProfilePhoto={teamPhotos.eventsExecutive3} />
                  <TeamCard Name="Aryan Maurya" ProfilePhoto={teamPhotos.eventsExecutive4} />
                  <TeamCard Name="Navneet Pandey" ProfilePhoto={teamPhotos.eventsExecutive5} />
                </Fade>
                <Fade right>
                  <TeamCard Name="Piyush Kumar" ProfilePhoto={teamPhotos.eventsExecutive6} />
                  <TeamCard Name="Shefali Jaiswal" ProfilePhoto={teamPhotos.eventsExecutive7} />
                  <TeamCard Name="Shinjan Tyagi" ProfilePhoto={teamPhotos.eventsExecutive8} />
                  <TeamCard Name="Sumit Sahu" ProfilePhoto={teamPhotos.eventsExecutive9} />
                  <TeamCard Name="Supriya Sinha" ProfilePhoto={teamPhotos.eventsExecutive10} />
                </Fade>
              </div>
            </div>
          </div>

          {/* PR Heads*/}
          <div className="team-title" id="pr">
            <Fade left>
              <h1>Public Relations Head</h1>
              <div className="team-container">
                <TeamCard Name="Ayush Sahu" ProfilePhoto={teamPhotos.prHead1} />
                <TeamCard Name="Nishkarsh Sharma" ProfilePhoto={teamPhotos.prHead2} />
                <TeamCard Name="Pratham Chaudhary" ProfilePhoto={teamPhotos.prHead3} />
                <TeamCard Name="Sumana Sree" ProfilePhoto={teamPhotos.prHead4} />
              </div>
            </Fade>

            <Fade right>
              <h1>Public Relations Executives</h1>
              <div className="team-container">
                <TeamCard Name="Aakash Srivastava" ProfilePhoto={teamPhotos.prExecutive1} />
                <TeamCard Name="Abhay Raj Singh" ProfilePhoto={teamPhotos.prExecutive2} />
                <TeamCard Name="Harsh Pant" ProfilePhoto={teamPhotos.prExecutive3} />
                <TeamCard Name="Naisarg Raj Pandey" ProfilePhoto={teamPhotos.prExecutive4} />
                <TeamCard Name="Reshma Khatoon" ProfilePhoto={teamPhotos.prExecutive5} />
                <TeamCard Name="Vipul Ahlawat" ProfilePhoto={teamPhotos.prExecutive6} />
                <TeamCard Name="Virat Patel" ProfilePhoto={teamPhotos.prExecutive7} />
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
                <TeamCard Name="Archit Thakur" ProfilePhoto={teamPhotos.designContentExecutive1} />
                <TeamCard Name="Avdhesh" ProfilePhoto={teamPhotos.designContentExecutive2} />
                <TeamCard Name="Jatin Sharma" ProfilePhoto={teamPhotos.designContentExecutive3} />
                <TeamCard Name="Nitin" ProfilePhoto={teamPhotos.designContentExecutive4} />
                <TeamCard Name="Parna Malik" ProfilePhoto={teamPhotos.designContentExecutive5} />
                <TeamCard Name="Saloni Sharma" ProfilePhoto={teamPhotos.designContentExecutive6} />
                <TeamCard Name="Satyam Chaurasiya" ProfilePhoto={teamPhotos.designContentExecutive7} />
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
                <TeamCard Name="Anurag Prakash" ProfilePhoto={teamPhotos.publicityExecutive1} style={{ objectFit: "contain", transform: "scale(1.5)", top: "40px" }} />
                <TeamCard Name="Ayush Kumar" ProfilePhoto={teamPhotos.publicityExecutive2} />
                <TeamCard Name="Ayush Raj" ProfilePhoto={teamPhotos.publicityExecutive3} />
                <TeamCard Name="Deepak Yadav" ProfilePhoto={teamPhotos.publicityExecutive4} />
                <TeamCard Name="Jatin Singh" ProfilePhoto={teamPhotos.publicityExecutive5} style={{ objectFit: "contain", transform: "scale(1.5)", top: "40px" }} />
                <TeamCard Name="Manvendra Saraswat" ProfilePhoto={teamPhotos.publicityExecutive6} />
                <TeamCard Name="Shikha Kaloniya" ProfilePhoto={teamPhotos.publicityExecutive7} />
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
