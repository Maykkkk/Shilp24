import {useEffect, useState} from 'react'

function Timer() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "April, 5, 2025 08:00:00"

    const getTimeRemaining = () => {
        const total = Date.parse(deadline) - Date.parse(new Date());
        setSeconds(Math.floor((total / 1000) % 60));
        setMinutes(Math.floor((total / 1000 / 60) % 60));
        setHours(Math.floor((total / (1000 * 60 * 60)) % 24));
        setDays(Math.floor(total / (1000 * 60 * 60 * 24)));
    }

    useEffect(() => {
        const interval = setInterval(()=>getTimeRemaining(),1000)
        return () => clearInterval(interval)
    },[])

  return (
    <div>
        <div className="clockdiv" style={{
    background: "linear-gradient(45deg, #8b5e3b, #5d3a1a, #a67c52, #4e342e, #7a5230, #e0c9a6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "flex"
}}>


            <div style={{display:"flex",marginRight:"10px",alignItems:"center"}}>
            <h4 className="days">{days<10 ? "0"+days:days}</h4>
            <div className="smalltext">Days</div>
            </div>
            <div style={{display:"flex",marginRight:"10px",alignItems:"center"}}>
            <h4 className="hours">{hours<10 ? "0"+hours:hours}</h4>
            <div className="smalltext">Hours</div>
            </div>
            <div style={{display:"flex",marginRight:"10px",alignItems:"center"}}>
            <h4 className="minutes">{minutes<10 ? "0"+minutes:minutes}</h4>
            <div className="smalltext">Minutes</div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
            <h4 className="seconds">{seconds<10 ? "0"+seconds:seconds}</h4>
            <div className="smalltext">Seconds</div>
            </div>
        </div>
    </div>
  )
}

export default Timer

// import { useEffect, useState } from "react";
// import "../links/css/Timer.css";

// function Timer() {
// 	const [days, setDays] = useState(0);
// 	const [hours, setHours] = useState(0);
// 	const [minutes, setMinutes] = useState(0);
// 	const [seconds, setSeconds] = useState(0);

// 	const deadline = "April, 5, 2025 08:00:00";

// 	const getTimeRemaining = () => {
// 	    const total = Date.parse(deadline) - Date.parse(new Date());
// 	    setSeconds(Math.floor((total / 1000) % 60));
// 	    setMinutes(Math.floor((total / 1000 / 60) % 60));
// 	    setHours(Math.floor((total / (1000 * 60 * 60)) % 24));
// 	    setDays(Math.floor(total / (1000 * 60 * 60 * 24)));
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(() => getTimeRemaining(), 1000);
// 		return () => clearInterval(interval);
// 	}, []);

// 	return (
// 		<div className="timer-container">
// 			<div className="clockdiv">
// 				<div className="box">
// 					<h4 className="days">{days < 10 ? "0" + days : days}</h4>
// 					<div className="smalltext">Days</div>
// 				</div>
// 				<div className="box">
// 					<h4 className="hours">
// 						{hours < 10 ? "0" + hours : hours}
// 					</h4>
// 					<div className="smalltext">Hours</div>
// 				</div>
// 				<div className="box">
// 					<h4 className="minutes">
// 						{minutes < 10 ? "0" + minutes : minutes}
// 					</h4>
// 					<div className="smalltext">Minutes</div>
// 				</div>
// 				<div className="box">
// 					<h4 className="seconds">
// 						{seconds < 10 ? "0" + seconds : seconds}
// 					</h4>
// 					<div className="smalltext">Seconds</div>
// 				</div>
// 				<div>
// 					<h2 className="subhead">Left</h2>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Timer;
