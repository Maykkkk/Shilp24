import React, { useEffect, useState } from "react";
import "../links/css/Profile.css";
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import Fade from "react-reveal/Fade";
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBTypography,
	MDBIcon,
} from "mdb-react-ui-kit";

import Alert from "@mui/material/Alert";
// import { updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import ParticleBackground from "../components/ParticleBackground";
import { toast } from "react-toastify";
// import { Fade } from "@mui/material";

const Profile = ({ AllAuth }) => {
	const [FailureMessage, setFailureMessage] = useState("");
	const isProf = AllAuth.isProf;
	const setIsProf = AllAuth.setIsProf;

	const [mobile, setMobile] = useState("");
	const [year, setYear] = useState("");
	const [college, setCollege] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [RegisteredEvents, setRegisteredEvents] = useState([]);
	const [RegisteredWorkshops, setRegisteredWorkshops] = useState([]);
	const [RegisteredEventsPaid, setRegisteredEventsPaid] = useState({});
	const [isIITBHUser, setIsIITBHUser] = useState(false);
	const [accommodationStatus, setAccommodationStatus] =
		useState("Unaccommodated");
	const [paidRegistration, setPaidRegistration] = useState(false);

	useEffect(() => {
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then((docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				if (data.Events) {
					setRegisteredEvents(data.Events);
					let paid = {};
					for (let event of data.Events) {
						const eventDoc = doc(
							db,
							event,
							localStorage.getItem("UID")
						);
						getDoc(eventDoc).then((eventDocSnap) => {
							if (eventDocSnap.exists()) {
								const eventData = eventDocSnap.data();
								paid[event] = eventData.paid;
							}
							setRegisteredEventsPaid(paid);
						});
					}
				}
				if (data.Workshops) {
					setRegisteredWorkshops(data.Workshops);
				}
				if (data.Mobile) {
					setMobile(data.Mobile);
				}
				if (data.College) {
					setCollege(data.College);
				}
				if (data.Referral) {
					setReferralCode(data.Referral);
				}
				if (data.Year) {
					setYear(data.Year);
				}
				if (data.accommodationStatus) {
					setAccommodationStatus(data.accommodationStatus);
				}
				if (data.PaidRegistration) {
					setPaidRegistration(data.PaidRegistration);
				}
			}
		});
		setIsIITBHUser(localStorage.getItem("email").endsWith("itbhu.ac.in"));
	}, []);

	const onFormSubmit = async (e) => {
		e.preventDefault();
		setFailureMessage("");
		try {
			let data = {
				uid: localStorage.getItem("UID"),
				Name: localStorage.getItem("displayName"),
				Email: localStorage.getItem("email"),
				Mobile: mobile,
				College: college,
				Year: year,
				Referral: referralCode,
				Events: RegisteredEvents,
				Workshops: RegisteredWorkshops,
				accommodationStatus: isIITBHUser
					? "IIT BHU Student"
					: accommodationStatus,
				PaidRegistration: paidRegistration,
			};
			if (!referralCode) {
				data.Referral = "";
			}

			console.log(data);
			if (!data.Mobile || !data.College || !data.Year) {
				setFailureMessage("Fill All Details");
				return;
			}
			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			).then(() => {
				toast.success("Profile Successfully Updated!");
				setIsProf(true);
			});
		} catch (e) {
			setFailureMessage(e.message);
			console.error("Error adding document: ", e.message);
		}
	};

	return (
		<div>
			<div className="App">
				<div className="body profile-body">
					<ParticleBackground />
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

					<form onSubmit={onFormSubmit}>
						<section
							className="h-100"
							style={{ backgroundColor: "#271e29" }}
						>
							<MDBContainer className="py-5 h-110">
								<MDBRow className="justify-content-center align-items-center h-100">
									<MDBCol
										lg="6"
										className="mb-4 mb-lg-0"
										style={{ marginTop: "10vh" }}
									>
										<MDBCard
											className="mb-3 profile-card"
											style={{ borderRadius: ".5rem" }}
										>
											<MDBRow className="g-0">
												<MDBCol
													md="4"
													className="gradient-custom text-center text-white"
													style={{
														borderTopLeftRadius:
															".5rem",
														borderBottomLeftRadius:
															".5rem",
													}}
												>
													<MDBCardImage
														src={localStorage.getItem(
															"photoURL"
														)}
														alt="Avatar"
														className="my-5 rounded "
														style={{
															width: "80px",
														}}
														fluid
													/>
													<MDBTypography tag="h5">
														{localStorage.getItem(
															"displayName"
														)}
													</MDBTypography>
													<MDBRow className="justify-content-center align-items-center userId">
														<MDBCardText>
															UserId: &nbsp;
															{localStorage.getItem(
																"UID"
															)}
														</MDBCardText>
													</MDBRow>
													<MDBIcon
														far
														icon="edit mb-5"
													/>
												</MDBCol>
												<MDBCol md="8">
													<MDBCardBody className="p-4">
														<MDBTypography tag="h6">
															Email
														</MDBTypography>
														<MDBCardText className="text-muted">
															{localStorage.getItem(
																"email"
															)}
														</MDBCardText>
														<hr className="mt-0 mb-4" />
														<MDBRow className="pt-1">
															{/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol> */}
															<MDBCol
																size="6"
																className="mb-3"
															>
																<MDBTypography tag="h6">
																	Phone
																</MDBTypography>
																<MDBCardText className="text-muted">
																	<input
																		type="text"
																		name="mobile"
																		defaultValue={
																			mobile
																		}
																		onChange={(
																			e
																		) => {
																			setMobile(
																				e
																					.target
																					.value
																			);
																		}}
																	></input>
																</MDBCardText>
															</MDBCol>
															<MDBCol
																size="6"
																className="mb-3"
															>
																<MDBTypography tag="h6">
																	College
																</MDBTypography>
																<MDBCardText className="text-muted">
																	<input
																		type="text"
																		name="college"
																		defaultValue={
																			college
																		}
																		onChange={(
																			e
																		) => {
																			setCollege(
																				e
																					.target
																					.value
																			);
																		}}
																	></input>
																</MDBCardText>
															</MDBCol>
														</MDBRow>

														{/* <MDBTypography tag="h6">Information</MDBTypography> */}
														<hr className="mt-0 mb-4" />
														<MDBRow className="pt-1">
															<MDBCol
																size="6"
																className="mb-3"
															>
																<MDBTypography tag="h6">
																	Year
																</MDBTypography>
																<MDBCardText className="text-muted">
																	<input
																		type="text"
																		name="year"
																		defaultValue={
																			year
																		}
																		onChange={(
																			e
																		) => {
																			setYear(
																				e
																					.target
																					.value
																			);
																		}}
																	></input>
																</MDBCardText>
															</MDBCol>
															<MDBCol
																size="6"
																className="mb-3"
															>
																<MDBTypography tag="h6">
																	Referral
																	Code
																</MDBTypography>
																<MDBCardText className="text-muted">
																	<input
																		type="text"
																		name="referralCode"
																		defaultValue={
																			referralCode
																		}
																		onChange={(
																			e
																		) => {
																			setReferralCode(
																				e
																					.target
																					.value
																			);
																		}}
																	></input>
																</MDBCardText>
															</MDBCol>

															<MDBCol
																size="6"
																className="mb-3"
															>
																{/* <MDBTypography tag="h6">Phone</MDBTypography> */}
																<MDBCardText className="text-muted">
																	<input
																		type="submit"
																		className="btn btn-outline-dark"
																		value={
																			isProf
																				? "Save Changes"
																				: "Complete Profile"
																		}
																	/>
																	{FailureMessage ? (
																		<Alert
																			severity="error"
																			className="mt-2"
																		>
																			{
																				FailureMessage
																			}
																		</Alert>
																	) : (
																		<></>
																	)}
																</MDBCardText>
															</MDBCol>
														</MDBRow>

														<table
															style={{
																width: "100%",
																margin: "0",
															}}
														>
															<tr
																className="DashboardHeader"
																style={{
																	width: "133%",
																	display:
																		"flex",
																	justifyContent:
																		"center",
																}}
															>
																<th
																	className="fs-2 profileHeader"
																	style={{
																		fontSize:
																			"25px",
																	}}
																>
																	Dashboard
																</th>
															</tr>
															<tr
																className="DashboardDescription"
																style={{
																	display:
																		"flex",
																	flex: "wrap",
																}}
															>
																<th>
																	All statuses
																	of the
																	payment
																	would be
																	updated once
																	verified.
																	Please wait
																	for some
																	time.
																</th>
															</tr>
															<tr>
																<th
																	className="fs-5"
																	style={{
																		border: "2px solid purple",
																	}}
																>
																	{" "}
																	Events
																</th>
																<th
																	className="fs-5 "
																	style={{
																		border: "2px solid purple",
																	}}
																>
																	Fees
																</th>
																<th
																	className="px-1 fs-5 "
																	style={{
																		border: "2px solid purple",
																	}}
																>
																	Paid
																</th>
															</tr>
															{RegisteredEvents.length ? (
																<>
																	<tr
																		style={{
																			border: "2px solid purple",
																		}}
																	>
																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"700",
																			}}
																		>
																			Registration
																			Fees
																		</td>

																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"600",
																			}}
																		>
																			{isIITBHUser ? (
																				<>
																					<strike>
																						99
																					</strike>
																					&nbsp;
																					0
																				</>
																			) : (
																				<>
																					99
																				</>
																			)}
																		</td>
																		<td
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			{paidRegistration
																				? "✓"
																				: "✖"}
																		</td>
																	</tr>
																</>
															) : (
																<></>
															)}
															{RegisteredEvents.map(
																(event, i) => {
																	return (
																		<tr
																			key={
																				i
																			}
																		>
																			<td
																				style={{
																					border: "2px solid purple",
																					fontStyle:
																						"italic",
																					fontWeight:
																						"500",
																				}}
																			>
																				{
																					event
																				}
																			</td>
																			<td
																				style={{
																					border: "2px solid purple",
																					fontStyle:
																						"italic",
																					fontWeight:
																						"500",
																				}}
																			>
																				{isIITBHUser ? (
																					<>
																						<strike>
																							49
																						</strike>
																						&nbsp;
																						0
																					</>
																				) : (
																					<>
																						49
																					</>
																				)}
																			</td>
																			<td
																				style={{
																					border: "2px solid purple",
																				}}
																			>
																				{RegisteredEventsPaid[
																					event
																				]
																					? "✓"
																					: "✖"}
																			</td>
																		</tr>
																	);
																}
															)}
															{RegisteredEvents.length ? (
																<>
																	<tr
																		style={{
																			border: "2px solid purple",
																		}}
																	>
																		<th>
																			Total
																		</th>
																		<th>
																			{isIITBHUser ? (
																				<>
																					<strike>
																						{99 +
																							49 *
																								RegisteredEvents.length}
																					</strike>
																					&nbsp;
																					0
																				</>
																			) : (
																				<>
																					{99 +
																						49 *
																							RegisteredEvents.length}
																				</>
																			)}
																		</th>
																	</tr>
																	<tr
																		className="WorkshopDescription"
																		style={{
																			fontSize:
																				"4vh",
																		}}
																	>
																		<th
																			colSpan={
																				3
																			}
																		>
																			<b>
																				REGISTRATION
																				CLOSED
																			</b>
																		</th>
																	</tr>
																</>
															) : (
																<></>
															)}
														</table>

														<MDBCardText
															className="text-muted"
															style={{
																marginTop:
																	"15px",
															}}
														>
															{/* <a
																className="btn btn-outline-dark"
																href="https://docs.google.com/forms/d/1CudQNhLcl_up_cCgQziIuHvccFzRTX4y_Oda1kztogU/edit"
																target="_blank"
																rel="noreferrer"
															>
																Fee Payment
															</a> */}
															{FailureMessage ? (
																<Alert
																	severity="error"
																	className="mt-2"
																>
																	{
																		FailureMessage
																	}
																</Alert>
															) : (
																<></>
															)}
														</MDBCardText>

														<table
															style={{
																width: "100%",
																margin: "0",
															}}
														>
															<tr
																style={{
																	width: "130%",
																	display:
																		"flex",
																	justifyContent:
																		"center",
																}}
															>
																<th
																	className="fs-3 profileHeader"
																	style={{
																		fontSize:
																			"25px",
																	}}
																>
																	Workshops
																</th>
															</tr>
															<tr
																className="WorkshopDescription"
																style={{
																	display:
																		"flex",
																	flex: "wrap",
																}}
															>
																<th>
																	You have to
																	pay shilp
																	registration
																	fees of Rs.
																	99 to avail
																	the{" "}
																	<b>FREE</b>{" "}
																	workshops.
																</th>
															</tr>
															<tr>
																<th
																	className="fs-5 "
																	style={{
																		border: "2px solid purple",
																	}}
																>
																	{" "}
																	Registered
																	Workshops
																</th>
																<th
																	className="fs-5 "
																	style={{
																		border: "2px solid purple",
																	}}
																>
																	{" "}
																	Status
																</th>
															</tr>
															{RegisteredWorkshops.map(
																(
																	workshop,
																	i
																) => {
																	return (
																		<tr
																			key={
																				i
																			}
																		>
																			<td
																				style={{
																					border: "2px solid purple",
																					fontStyle:
																						"italic",
																					fontWeight:
																						"500",
																				}}
																			>
																				{
																					workshop
																				}
																			</td>

																			<td
																				style={{
																					border: "2px solid purple",
																				}}
																			>
																				{paidRegistration
																					? "✓"
																					: "✖"}
																			</td>
																		</tr>
																	);
																}
															)}
														</table>
														<br />

														{isIITBHUser ||
														accommodationStatus ===
															"IIT BHU Student" ? (
															<></>
														) : (
															<>
																<table
																	style={{
																		width: "100%",
																		margin: "0",
																	}}
																>
																	<tr
																		className="accommodationHeader"
																		style={{
																			width: "133%",
																			display:
																				"flex",
																			position:
																				"relative",
																			justifyContent:
																				"center",
																		}}
																	>
																		<th
																			className="profileHeader"
																			style={{
																				fontSize:
																					"25px",
																			}}
																		>
																			Accommodation
																		</th>
																	</tr>
																	<tr>
																		<th
																			className=" "
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			Accommodation
																			Type
																		</th>
																		<th
																			className=" "
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			Fees
																		</th>
																		<th
																			className=" "
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			Status
																		</th>
																	</tr>
																	<tr
																		style={{
																			border: "2px solid purple",
																		}}
																	>
																		<td
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			Only
																			Accommodation
																			for
																			3
																			days
																		</td>

																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"600",
																			}}
																		>
																			499/-
																		</td>
																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"600",
																			}}
																		>
																			{accommodationStatus ===
																			"Accommodation"
																				? "✓"
																				: "✖"}
																		</td>
																	</tr>
																	<tr
																		style={{
																			border: "2px solid purple",
																		}}
																	>
																		<td
																			style={{
																				border: "2px solid purple",
																			}}
																		>
																			Accommodation+
																			fooding
																			for 3 days
																		</td>

																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"600",
																			}}
																		>
																			899/-
																		</td>
																		<td
																			style={{
																				border: "2px solid purple",
																				fontWeight:
																					"600",
																			}}
																		>
																			{accommodationStatus ===
																			"Accommodation + Food"
																				? "✓"
																				: "✖"}
																		</td>
																	</tr>
																</table>

																<MDBCardText
																	className="text-muted"
																	style={{
																		marginTop:
																			"15px",
																	}}
																>
{/* 																	<a
																		className="btn btn-outline-dark"
																		href="https://forms.gle/7cLuc4N2ty37Gym57"
																		target="_blank"
																		rel="noreferrer"
																	>
																		Accommodation
																		Payment
																	</a> */}
																	{FailureMessage ? (
																		<Alert
																			severity="error"
																			className="mt-2"
																		>
																			{
																				FailureMessage
																			}
																		</Alert>
																	) : (
																		<></>
																	)}
																</MDBCardText>
															</>
														)}

														<div className="d-flex justify-content-start">
															<a href="#!">
																<MDBIcon
																	fab
																	icon="facebook me-3"
																	size="lg"
																/>
															</a>
															<a href="#!">
																<MDBIcon
																	fab
																	icon="twitter me-3"
																	size="lg"
																/>
															</a>
															<a href="#!">
																<MDBIcon
																	fab
																	icon="instagram me-3"
																	size="lg"
																/>
															</a>
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

					{/* <Fade bottom>
						<Footer className="footer"></Footer>
					</Fade> */}
				</div>
			</div>
		</div>
	);
};

export default Profile;
