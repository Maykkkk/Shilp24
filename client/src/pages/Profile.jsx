import React, { useState } from "react";
import NavBar from "../components/NavBar";
// import { updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Profile = ({ AllAuth }) => {
	const isProf = AllAuth.isProf;

	const [referralCode, setReferralCode] = useState("");
	const [college, setCollege] = useState("");

	const onFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = {
				uid: localStorage.getItem("UID"),
				Referral: referralCode,
				College: college,
			};
			console.log(data);
			const docRef = await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			);
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
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
					<label htmlFor="referralCode">Referral Code</label>
					<input
						type="text"
						name="referralCode"
						onChange={(e) => {
							setReferralCode(e.target.value);
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
					<input
						type="submit"
						className="btn btn-outline-dark"
						value={isProf ? "Save Changes" : "Complete Profile"}
					/>
				</form>
			</div>
		</div>
	);
};

export default Profile;
