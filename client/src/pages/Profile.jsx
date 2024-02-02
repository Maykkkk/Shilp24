import React, { useEffect, useState } from "react";
import '../links/css/Profile.css'
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

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
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then((docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				if (data.Events) {
					// console.log(data)
					setRegisteredEvents(data.Events);
				}
				setMobile(data.Mobile);
				setCollege(data.College);
				setReferralCode(data.Referral);
				setYear(data.Year);
			} else {
			}
		});
	}, []);

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
				Events: RegisteredEvents,
			};
			if (!data.Mobile || !data.College || !data.Year) {
				setFailureMessage("Fill All Details");
				return;
			}
			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			);
		} catch (e) {
			setFailureMessage(e.message);
			console.error("Error adding document: ", e.message);
		}
	};

	return (
		<div>
			<NavBar AllAuth={AllAuth}></NavBar>
			{/* <h1>Profile</h1>
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
						defaultValue={mobile}
						onChange={(e) => {
							setMobile(e.target.value);
						}}
					></input>
					<label htmlFor="college">College</label>
					<input
						type="text"
						name="college"
						defaultValue={college}
						onChange={(e) => {
							setCollege(e.target.value);
						}}
					></input>
					<label htmlFor="year">Year</label>
					<input
						type="text"
						name="year"
						defaultValue={year}
						onChange={(e) => {
							setYear(e.target.value);
						}}
					></input>

					<label htmlFor="referralCode">Referral Code</label>
					<input
						type="text"
						name="referralCode"
						defaultValue={referralCode}
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
			</div> */}
			<div>
				<form onSubmit={onFormSubmit}>
			<section className="h-100" style={{ backgroundColor: 'black' }}>
				<MDBContainer className="py-5 h-100">
					<MDBRow className="justify-content-center align-items-center h-100">
						<MDBCol lg="6" className="mb-4 mb-lg-0" style={{marginTop:"10vh"}}>
							<MDBCard className="profile-card mb-3" style={{ borderRadius: '.5rem' }}>
								<MDBRow className="g-0">
									<MDBCol md="4" className="gradient-custom text-center text-white"
										style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
										<MDBCardImage src={localStorage.getItem("photoURL")}
											alt="Avatar" className="my-5 rounded " style={{ width: '80px' }} fluid />
										<MDBTypography tag="h5">{localStorage.getItem("displayName")}
										</MDBTypography>
										{/* <MDBCardText>Web Designer</MDBCardText> */}
										<MDBIcon far icon="edit mb-5" />
									</MDBCol>
									<MDBCol md="8">
										<MDBCardBody className="p-4">
										<MDBTypography tag="h6">Email</MDBTypography>
										<MDBCardText className="text-muted">{localStorage.getItem("email")}</MDBCardText>
											<hr className="mt-0 mb-4" />
											<MDBRow className="pt-1">
												{/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol> */}
												<MDBCol size="6" className="mb-3">
													<MDBTypography tag="h6">Phone</MDBTypography>
													<MDBCardText className="text-muted">
														<input
															type="text"
															name="mobile"
															defaultValue={mobile}
															onChange={(e) => {
																setMobile(e.target.value);
															}}></input></MDBCardText>
												</MDBCol>
												<MDBCol size="6" className="mb-3">
													<MDBTypography tag="h6">College</MDBTypography>
													<MDBCardText className="text-muted">
														<input
															type="text"
															name="college"
															defaultValue={college}
															onChange={(e) => {
																setCollege(e.target.value);
															}}
														></input></MDBCardText>
												</MDBCol>
											</MDBRow>

											{/* <MDBTypography tag="h6">Information</MDBTypography> */}
											<hr className="mt-0 mb-4" />
											<MDBRow className="pt-1">
												<MDBCol size="6" className="mb-3">
													<MDBTypography tag="h6">Year</MDBTypography>
													<MDBCardText className="text-muted">
														<input
															type="text"
															name="year"
															defaultValue={year}
															onChange={(e) => {
																setYear(e.target.value);
															}}
														></input></MDBCardText>
												</MDBCol>
												<MDBCol size="6" className="mb-3">
													<MDBTypography tag="h6">Referral Code</MDBTypography>
													<MDBCardText className="text-muted">
														<input
															type="text"
															name="referralCode"
															defaultValue={referralCode}
															onChange={(e) => {
																setReferralCode(e.target.value);
															}}
														></input></MDBCardText>
												</MDBCol>

												<MDBCol size="6" className="mb-3">
													{/* <MDBTypography tag="h6">Phone</MDBTypography> */}
													<MDBCardText className="text-muted"><input
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
														)}</MDBCardText>
												</MDBCol>
											</MDBRow>

											<table>
					<tr>
						<th style={{fontSize:"25px"}}>Events Registered</th>
					</tr>
					{RegisteredEvents.map((event, i) => {
						return (
							<tr key={i}>
								<td>{event}</td>
							</tr>
						);
					})}
				</table>




											<div className="d-flex justify-content-start">
												<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
												<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
												<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
											</div>
										</MDBCardBody>
									</MDBCol>
								</MDBRow>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			</form>
			</div>

		</div>
	);
};

export default Profile;
