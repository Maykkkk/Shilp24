import React, { useState } from "react";
import "../links/css/EventCard.css";
import { useNavigate } from "react-router-dom";
import "../links/css/pdf.css";
import { getDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

function WorkshopCard(props) {
	const navigate = useNavigate();
	const isProf = props.AllAuth.isProf;
	const RegisteredWorkshops = props.RegisteredWorkshops;

	const [isRegistred, setIsRegistered] = useState(false);
	const [staad, setStaad] = React.useState(false);
	const [bim, setBim] = React.useState(false);

	const showStaad = () => {
		setStaad(true);
	};
	const closeStad = () => {
		setStaad(false);
	};
	const showBim = () => {
		setBim(true);
	};
	const closeBim = () => {
		setBim(false);
	};

	const RegisterWorkshop = async (WorkshopId) => {
		let data;
		if (!isProf) {
			navigate("../profile");
			return;
		}
		if (RegisteredWorkshops.includes(props.name)) {
			return;
		}
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Workshops) {
					if (!data.Workshops.includes(WorkshopId)) {
						data.Workshops.push(WorkshopId);
					}
				} else {
					data.Workshops = [WorkshopId];
				}
				await setDoc(
					doc(db, "userProfile", localStorage.getItem("UID")),
					data
				).then(() => {
					setIsRegistered(true);
					toast.success(
						"Successfully registered for Workshop: " + WorkshopId
					);
				});
			}
		});

		const docWorkshop = doc(db, WorkshopId, localStorage.getItem("UID"));
		getDoc(docWorkshop)
			.then(async (docSnap) => {
				let workshopData;
				if (docSnap.exists()) {
					workshopData = docSnap.data();
				}
				if (!workshopData) {
					workshopData = {
						uid: localStorage.getItem("UID"),
						isRegistred: true,
					};
				} else {
					workshopData.isRegistred = true;
				}
				await setDoc(
					doc(db, WorkshopId, localStorage.getItem("UID")),
					workshopData
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const UnRegisterWorkshop = async (WorkshopId) => {
		let data;
		// let workshops;
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Workshops) {
					if (data.Workshops.includes(WorkshopId)) {
						data.Workshops.splice(
							data.Workshops.indexOf(WorkshopId),
							1
						);
					}
				}
			}

			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			).then(() => {
				setIsRegistered(false);
				toast.error(
					"Successfully Unregistered from Workshop: " + WorkshopId
				);
			});
		});

		const docWorkshop = doc(db, WorkshopId, localStorage.getItem("UID"));
		getDoc(docWorkshop)
			.then(async (docSnap) => {
				let workshopData;
				if (docSnap.exists()) {
					workshopData = docSnap.data();
				}
				if (workshopData) {
					workshopData.isRegistred = false;
				}
				await setDoc(
					doc(db, WorkshopId, localStorage.getItem("UID")),
					workshopData
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<>
			{staad && (
				<div className="detailCardContainer">
					<div className="detailCard">
						<button className="closeButton" onClick={closeStad}>
							<b>X</b>
						</button>
						<h1>Details</h1>
						<ul className="detailCardList">
							<li className="detailCardListItem">
								An Introductory workshop on Staad PRO with the
								practice excersises in between
							</li>
							<li className="detailCardListItem">
								<b>Mr. Kaviyasaran D.</b> , chief engineer and
								founder of Avi engineering services, who is also
								an alum of IIT Madras will guide us
							</li>
							<li className="detailCardListItem">
								It would be a 3-4 hour workshop , Mr Kaviyasaran
								will teach us from the basics of Staad pro and
								end it with a project
							</li>
							<li className="detailCardListItem">
								<b>No prior knowledge on Staad Pro is needed</b>
							</li>
							<li className="detailCardListItem">
								<b>Prerequisites:</b> Attendees should bring
								their laptops with Staad pro (student version)
								pre-installed in it.
							</li>
							<li className="detailCardListItem">
								<b>The price :</b> free with shilp registration
								fee. Participants have to pay shilp registration
								fee only
							</li>
							<li className="detailCardListItem">
								<b>
									Certification will be provided from
									department of civil engineering, IIT BHU
								</b>
							</li>
						</ul>
					</div>
				</div>
			)}
			{bim && (
				<div className="detailCardContainer">
					<div className="detailCard">
						<button className="closeButton" onClick={closeBim}>
							<b>X</b>
						</button>
						<h1>Details</h1>
						<ul className="detailCardList">
							<li className="detailCardListItem">
								An Interactive Masterclass on Building
								Information Modelling
							</li>
							<li className="detailCardListItem">
								<b>Mr. Mohamed Sabith</b>, BIM automation lead
								at Ramboll, has worked in COWI and L&T
								previously, will guide us
							</li>
							<li className="detailCardListItem">
								A 1.5 hour workshop, where Introduction to BIM,
								roadmap to learn and career opportunities will
								be discussed
							</li>
							<li className="detailCardListItem">
								<b>Prerequisites:</b> there are no prerequisites
								for the session, just bring your enthusiasm to
								learn
							</li>
							<li className="detailCardListItem">
								<b>The price :</b> free with shilp registration
								fee. Participants have to pay shilp registration
								fee only
							</li>
							<li className="detailCardListItem">
								<b>
									Certification will be provided from
									department of civil engineering, IIT BHU
								</b>
							</li>
						</ul>
					</div>
				</div>
			)}
			<div
				className="card"
				style={{
					backgroundImage: `url("./workshops/${props.name}.webp")`,
					border: "1px solid white",
				}}
			>
				<div className="card-content">
					<h2 className="card-title">{props.name}</h2>
					<p className="card-body" style={{ padding: "0" }}>
						{props.details}
					</p>
					<button
						className="button"
						onClick={
							props.name === "STAAD Pro" ? showStaad : showBim
						}
					>
						Details
					</button>
					<p
						className={
							"button" +
							(RegisteredWorkshops.includes(props.name) ||
							isRegistred
								? " registered"
								: "")
						}
						onClick={() => {
							RegisterWorkshop(props.name);
						}}
					>
						{RegisteredWorkshops.includes(props.name) || isRegistred
							? "Registered"
							: "Register"}
					</p>
					{RegisteredWorkshops.includes(props.name) || isRegistred ? (
						<p
							className="button unregister"
							onClick={() => {
								UnRegisterWorkshop(props.name);
							}}
						>
							Unregister
						</p>
					) : (
						<> </>
					)}
				</div>
			</div>
		</>
	);
}

export default WorkshopCard;
