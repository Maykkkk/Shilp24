import React, { useState, useEffect } from "react";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Contacts from "../components/Contact Information";
import Loader from "../components/LoadingScreen";

const Team = ({ AllAuth }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
                {/* <ParticleBackground /> */}
                <Loader onComplete={() => setLoading(false)} />
                </div>
            ) : (
                <div className="body">
                    <NavBar AllAuth={AllAuth} />

                    <div className="shilp-team">
                        <header className="team-header">
                            <h1>Meet Our SHILP Team</h1>
                        </header>

                        {Contacts.map((e) => (
                            <div className="team-title" id="coConveynor" key={e.id}>
                                <div className="team-title-heading">{e.Designation}</div>
                                <div className="team-container">
    {e.data.map((f, index) =>
        f.Name === "Anurag Prakash" || f.Name === "Anshika Singh" || f.Name === "Pratik Nand" ? (
            <TeamCard
                key={`team-${f.Name}-${index}`} // ✅ Unique key added here
                Name={f.Name}
                ProfilePhoto={f.url}
                LinkedIn={f.Linkedin}
                Gmail={f.Email}
                Instagram={f.Instagram}
                style={{ objectFit: "contain", transform: "scale(1.5)", top: "40px" }}
            />
        ) : (
            <TeamCard
                key={`team-${f.Name}-${index}`} // ✅ Unique key added here
                Name={f.Name}
                ProfilePhoto={f.url}
                LinkedIn={f.Linkedin}
                Gmail={f.Email}
                Instagram={f.Instagram}
            />
        )
    )}
</div>

                            </div>
                        ))}
                    </div>

                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Team;
