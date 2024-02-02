import React, { useState } from "react";
import "../links/css/EventCard.css";
import { Link, useNavigate } from "react-router-dom";
// import { pdfjs } from 'react-pdf';
import "../links/css/pdf.css";
import { getDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();

function EventCard(props) {
	const navigate = useNavigate();
	const isProf = props.AllAuth.isProf;
	const RegisteredEvents = props.RegisteredEvents;
	const [isRegistered, setIsRegistered] = useState(
		RegisteredEvents.includes(props.name)
	);

	const RegisterEvent = async (EventId) => {
		let data;
		if (!isProf) {
			navigate("../profile");
			return;
		}
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Events) {
					if (!data.Events.includes(EventId)) {
						data.Events.push(EventId);
					}
				} else {
					data.Events = [EventId];
				}
			}

			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			);
			setIsRegistered(true);
		});
	};

	return (
		<div className="card" style={{backgroundImage:`url("./EventPhotos/${props.name}.jpg")`}}>
			<div className="card-content">
				<h2 className="card-title">{props.name}</h2>
				<p className="card-body">{props.details}</p>
				<Link
					target="_blank"
					to={`/pdfs/${props.name}.pdf`}
					className="button"
				>
					Explore
				</Link>
				<p
					to=""
					className={"button" + (isRegistered ? " registered" : "")}
					onClick={() => {
						RegisterEvent(props.name);
					}}
				>
					{isRegistered ? "Registered" : "Register"}
				</p>
			</div>
		</div>
	);
}

export default EventCard;
