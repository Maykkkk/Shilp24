import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";  
import '../links/css/shilp.css'
import shilp_logo from '../links/img/Shilp-logo.png'
import { FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Shilp() {
    const [showParticipants, setShowParticipants] = useState(false);
    const [showEvents, setShowEvents] = useState(false);
    const [showPrize, setShowPrize] = useState(false);

    const participantsRef = useRef(null);
    const eventsRef = useRef(null);
    const prizeRef = useRef(null);

    // 📌 Function to observe each number separately
    useEffect(() => {
        const observerOptions = { threshold: 0.5 };

        // Function to create an observer
        const createObserver = (ref, setState) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setState(true);
                }
            }, observerOptions);

            if (ref.current) observer.observe(ref.current);

            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        };

        const cleanup1 = createObserver(participantsRef, setShowParticipants);
        const cleanup2 = createObserver(eventsRef, setShowEvents);
        const cleanup3 = createObserver(prizeRef, setShowPrize);

        return () => {
            cleanup1();
            cleanup2();
            cleanup3();
        };
    }, []);

    return (
        <div className="contain">
            <Fade left delay={200}>
            <div className="shilp-logo">
                <img src={shilp_logo} alt="Shilp Logo"/>
            </div>
            </Fade>
            <div className="description">
                <Fade right delay={200}>
                <p>
                    <strong style={{ fontFamily: 'Times New Roman', fontWeight:"800", fontSize:"1.6vw" }}>Shilp</strong>, the annual fest by the Civil Engineering Society, is a dynamic celebration of creativity and innovation in the field. Serving as a pivotal platform, Shilp fosters collaboration, promotes innovation, and values inclusivity. 
                </p>
                </Fade>

                {/* 📌 Animated Stats */}
                <div className="stats">
                    <div className="stat-item">
                        <FaUsers className="icon" style={{ color: 'grey' }}/>
                        <h2 ref={participantsRef}>
                            <CountUp start={0} end={showParticipants ? 1500 : 0} duration={2.5} />+
                        </h2>
                        <p>Participants from across India</p>
                    </div>
                    <div className="stat-item">
                        <FaCalendarAlt className="icon" style={{ color: 'red' }}/>
                        <h2 ref={eventsRef}>
                            <CountUp start={0} end={showEvents ? 20 : 0} duration={2.5} />+
                        </h2>
                        <p>Technical and Cultural programs</p>
                    </div>
                    <div className="stat-item">
                        <FaTrophy className="icon" style={{ color: 'gold' }}/>
                        <h2 ref={prizeRef}>
                            ₹<CountUp start={0} end={showPrize ? 5 : 0} duration={2.5} decimals={1} />L+
                        </h2>
                        <p>Prize pool</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shilp;
