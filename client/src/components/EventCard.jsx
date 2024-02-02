import React, { useState } from "react";
import "../links/css/EventCard.css";
import { Link, useNavigate } from "react-router-dom";
// import { pdfjs } from 'react-pdf';
import "../links/css/pdf.css";
import { getDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();

function EventCard(props) {
	const navigate = useNavigate();
	const isProf = props.AllAuth.isProf;
	const RegisteredEvents = props.RegisteredEvents;
	const [isRegistred, setIsRegistered] = useState(false);

	const RegisterEvent = async (EventId) => {
		let data;
		if (!isProf) {
			navigate("../profile");
			return;
		}
		if (RegisteredEvents.includes(props.name)) {
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
			).then(() => {
				setIsRegistered(true);
				toast.success("Successfully registered for Event: " + EventId);
			});
		});
	};

	const UnRegisterEvent = async (EventId) => {
		let data;
		// let events;
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Events) {
					if (data.Events.includes(EventId)) {
						data.Events.splice(data.Events.indexOf(EventId), 1);
					}
				}
			}

			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			).then(() => {
				setIsRegistered(false);
				toast.error("Successfully Unregistered from Event: " + EventId);
			});
		});
	};
	return (
		<div
			className="card"
			style={{
				backgroundImage: `url("./EventPhotos/${props.name}.webp")`,
			}}
		>
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
					className={
						"button" +
						(RegisteredEvents.includes(props.name) || isRegistred
							? " registered"
							: "")
					}
					onClick={() => {
						RegisterEvent(props.name);
					}}
				>
					{RegisteredEvents.includes(props.name) || isRegistred
						? "Registered"
						: "Register"}
				</p>
				{RegisteredEvents.includes(props.name) || isRegistred ? (
					<p
						className="button unregister"
						onClick={() => {
							UnRegisterEvent(props.name);
						}}
					>
						Unregister
					</p>
				) : (
					<> </>
				)}
			</div>
		</div>
	);
}

export default EventCard;
