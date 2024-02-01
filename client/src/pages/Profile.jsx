import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import Alert from "@mui/material/Alert";
// import { updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Profile = ({ AllAuth }) => {
	const [FailureMessage, setFailureMessage] = useState("");
	const isProf = AllAuth.isProf;

	const [mobile, setMobile] = useState("");
	const [year, setYear] = useState("");
	const [college, setCollege] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [RegisteredEvents, setRegisteredEvents] = useState([]);

	useEffect(() => {
		const docRef = doc(db, "RegistredEvents", localStorage.getItem("UID"));
		getDoc(docRef).then((docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				setRegisteredEvents(data.RegisteredEvents);
			} else {
			}
		});
	});

	const onFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = {
				uid: localStorage.getItem("UID"),
				Email: localStorage.getItem("email"),
				Mobile: mobile,
				College: college,
				Year: year,
				Referral: referralCode,
			};
			if (!data.Mobile || !data.college || !data.year) {
				// Alert Missing Details
				return;
			}
			const docRef = await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			);
		} catch (e) {
			console.error("Error adding document: ", e.message);
		}
	};

	return (
		<div>
			<NavBar AllAuth={AllAuth}></NavBar>
			<h1>Profile</h1>
			<div>
				<img src={localStorage.getItem("photoURL")} alt="" />
			</div>
			<div>
				<form onSubmit={onFormSubmit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={localStorage.getItem("displayName")}
						disabled
					></input>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						value={localStorage.getItem("email")}
						disabled
					></input>
					<label htmlFor="mobile">Mobile No.</label>
					<input
						type="text"
						name="mobile"
						onChange={(e) => {
							setMobile(e.target.value);
						}}
					></input>
					<label htmlFor="college">College</label>
					<input
						type="text"
						name="college"
						onChange={(e) => {
							setCollege(e.target.value);
						}}
					></input>
					<label htmlFor="year">Year</label>
					<input
						type="text"
						name="year"
						onChange={(e) => {
							setYear(e.target.value);
						}}
					></input>

					<label htmlFor="referralCode">Referral Code</label>
					<input
						type="text"
						name="referralCode"
						onChange={(e) => {
							setReferralCode(e.target.value);
						}}
					></input>
					<input
						type="submit"
						className="btn btn-outline-dark"
						value={isProf ? "Save Changes" : "Complete Profile"}
					/>
					{FailureMessage ? (
						<Alert severity="error" className="mt-2">
							{FailureMessage}
						</Alert>
					) : (
						<></>
					)}
				</form>

				<table>
					<tr>
						<th>Events Registered</th>
					</tr>
					{RegisteredEvents.map((event, i) => {
						return (
							<tr key={i}>
								<td>{event}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Profile;
