import React, { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// import NavBar from "../components/NavBar";

const Admin = ({ AllAuth }) => {
	const [Password, setPassword] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [userId, setUserId] = useState("");
	const [isUserData, setIsUserData] = useState(false);

	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [year, setYear] = useState("");
	const [college, setCollege] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [accommodationStatus, setAccommodationStatus] =
		useState("Unaccommodated");

	const [RegisteredEvents, setRegisteredEvents] = useState([]);
	const [RegisteredEventsPaid, setRegisteredEventsPaid] = useState({});

	const [RegisteredWorkshops, setRegisteredWorkshops] = useState([]);

	const [paidRegistration, setPaidRegistration] = useState(false);

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (Password === process.env.REACT_APP_ADMIN_PASS) {
			setIsAdmin(true);
		}
	};

	const fetchUserData = async (e) => {
		e.preventDefault();
		setIsUserData(false);
		const docRef = doc(db, "userProfile", userId);
		await getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data();
				if (data.Events) {
					setRegisteredEvents(data.Events);
					console.log(data.Events);
					let paid = {};
					for (let event of data.Events) {
						const eventDoc = doc(db, event, userId);
						await getDoc(eventDoc).then((eventDocSnap) => {
							if (eventDocSnap.exists()) {
								const eventData = eventDocSnap.data();
								paid[event] = eventData.paid;
							}
						});
					}
					setRegisteredEventsPaid(paid);
				}
				setDisplayName(data.Name);
				setEmail(data.Email);
				setMobile(data.Mobile);
				setCollege(data.College);
				setReferralCode(data.Referral);
				setYear(data.Year);
				setIsUserData(true);
				setAccommodationStatus(data.accommodationStatus);
				setRegisteredWorkshops(data.Workshops);
				if (data.hasOwnProperty("PaidRegistration")) {
					setPaidRegistration(data.PaidRegistration);
				}
			}
		});
	};

	const saveDetails = async (e) => {
		e.preventDefault();
		for (let event of RegisteredEvents) {
			const data = {
				isRegistered: true,
				paid: RegisteredEventsPaid[event],
				uid: userId,
			};
			await setDoc(doc(db, event, userId), data);
		}
		const data = {
			uid: userId,
			Name: displayName,
			Email: email,
			Mobile: mobile,
			College: college,
			Year: year,
			Referral: referralCode,
			Events: RegisteredEvents,
			Workshops: RegisteredWorkshops,
			accommodationStatus: accommodationStatus,
			PaidRegistration: paidRegistration,
		};
		await setDoc(doc(db, "userProfile", userId), data);
		toast.success("Profile Successfully Updated!");
	};
	return (
		<div>
			<div className="App">
				{/* <NavBar AllAuth={AllAuth}></NavBar> */}
				{isAdmin ? (
					<div>
						<div>
							<form onSubmit={fetchUserData}>
								<label htmlFor="userId">User Id: &nbsp; </label>
								<input
									type="text"
									name="userId"
									onChange={(e) => {
										setUserId(e.target.value);
									}}
								/>
								<input type="submit" value="Fetch User Data" />
							</form>

							{isUserData ? (
								<div>
									<table>
										<tr>
											<td htmlFor="name">Name&nbsp; </td>
											<td>
												<input
													type="text"
													name="name"
													value={displayName}
													disabled
												></input>
											</td>
										</tr>
										<tr>
											<td htmlFor="email">
												Email&nbsp;{" "}
											</td>
											<td>
												<input
													type="text"
													name="email"
													value={email}
													disabled
												></input>
											</td>
										</tr>
										<tr>
											<td htmlFor="mobile">
												Mobile No.&nbsp;{" "}
											</td>
											<td>
												<input
													type="text"
													name="mobile"
													defaultValue={mobile}
													disabled
												></input>
											</td>
										</tr>
										<tr>
											<td htmlFor="college">
												College&nbsp;{" "}
											</td>
											<td>
												<input
													type="text"
													name="college"
													defaultValue={college}
													disabled
												></input>
											</td>
										</tr>
										<tr>
											<td htmlFor="year">Year&nbsp; </td>
											<td>
												<input
													type="text"
													name="year"
													defaultValue={year}
													disabled
												></input>
											</td>
										</tr>

										<tr>
											<td htmlFor="referralCode">
												Referral Code &nbsp;{" "}
											</td>
											<td>
												<input
													type="text"
													name="referralCode"
													defaultValue={referralCode}
													disabled
												></input>
											</td>
										</tr>
									</table>
									<form onSubmit={saveDetails}>
										<label
											htmlFor="accommodationStatus"
											style={{ fontWeight: 700 }}
										>
											Accommodation Status: &nbsp;
										</label>
										<select
											name="accommodationStatus"
											value={accommodationStatus}
											onChange={(e) => {
												setAccommodationStatus(
													e.target.value
												);
											}}
										>
											<option value="Unaccommodated">
												Unaccommodated
											</option>
											<option value="Accommodation">
												Only Accommodation
											</option>
											<option value="Accommodation + Food">
												Accommodation + Food
											</option>
											<option value="IIT BHU Student">
												IIT BHU Student
											</option>
										</select>
										<table>
											<tr>
												<th
													style={{
														fontSize: "25px",
													}}
												>
													Events Registered
												</th>
											</tr>
											<tr>
												<th> Events</th>
												<th className="px-4">Paid</th>
											</tr>
											{RegisteredEvents.length ? (
												<>
													<tr>
														<td>
															Registration Fees
														</td>
														<td>
															<input
																type="checkbox"
																name="registration"
																defaultChecked={
																	paidRegistration
																}
																onChange={(
																	e
																) => {
																	setPaidRegistration(
																		e.target
																			.checked
																	);
																}}
															/>
														</td>
													</tr>
												</>
											) : (
												<></>
											)}
											{RegisteredEvents.map(
												(event, i) => {
													return (
														<tr key={i}>
															<td>{event}</td>
															<td>
																<input
																	type="checkbox"
																	name={event}
																	defaultChecked={
																		RegisteredEventsPaid[
																			event
																		]
																	}
																	onChange={(
																		e
																	) => {
																		let paid =
																			RegisteredEventsPaid;
																		paid[
																			event
																		] =
																			e.target.checked;
																		setRegisteredEventsPaid(
																			paid
																		);
																	}}
																/>
															</td>
														</tr>
													);
												}
											)}
										</table>
										<input type="submit" value="Save" />
									</form>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				) : (
					<div>
						<form onSubmit={onFormSubmit}>
							<label htmlFor="password">Password: &nbsp; </label>
							<input
								type="text"
								name="password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<input type="submit" value="Submit" />
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Admin;
