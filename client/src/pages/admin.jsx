import React, { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// import NavBar from "../components/NavBar";

const Admin = ({ AllAuth }) => {
	const masterPass = "ces_3.14159";

	const [Password, setPassword] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [userId, setUserId] = useState("");
	const [isUserData, setIsUserData] = useState(false);

	const [mobile, setMobile] = useState("");
	const [year, setYear] = useState("");
	const [college, setCollege] = useState("");
	const [referralCode, setReferralCode] = useState("");
	const [RegisteredEvents, setRegisteredEvents] = useState([]);
	const [RegisteredEventsPaid, setRegisteredEventsPaid] = useState({});

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (Password === masterPass) {
			setIsAdmin(true);
		}
	};

	const fetchUserData = async (e) => {
		e.preventDefault();
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
				setMobile(data.Mobile);
				setCollege(data.College);
				setReferralCode(data.Referral);
				setYear(data.Year);
				setIsUserData(true);
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
			await setDoc(doc(db, event, userId), data).then(() => {});
		}
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
													value={localStorage.getItem(
														"displayName"
													)}
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
													value={localStorage.getItem(
														"email"
													)}
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
													onChange={(e) => {
														setMobile(
															e.target.value
														);
													}}
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
													onChange={(e) => {
														setCollege(
															e.target.value
														);
													}}
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
													onChange={(e) => {
														setYear(e.target.value);
													}}
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
													onChange={(e) => {
														setReferralCode(
															e.target.value
														);
													}}
													disabled
												></input>
											</td>
										</tr>
									</table>
									<form onSubmit={saveDetails}>
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
																defaultChecked={
																	false
																}
																name="registration"
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
