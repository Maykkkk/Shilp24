import React from "react";
import "../links/css/EventCard.css";
import "../links/css/pdf.css";


function WorkshopCard(props) {

	const [staad, setStaad] = React.useState(false);
	const [bim, setBim] = React.useState(false);

	const showStaad = () => {
		setStaad(true);
	}
	const closeStad = () => {
		setStaad(false);
	}
	const showBim = () => {
		setBim(true);
	}
	const closeBim = () => {
		setBim(false);
	}

    return (
		<>{staad &&
		<div className="detailCardContainer">
			<div className="detailCard">
				<button className="closeButton" onClick={closeStad}><b>X</b></button>
				<h1>Details</h1>
				<ul className="detailCardList">
					<li className="detailCardListItem">An Introductory workshop on Staad PRO with  the practice excersises in between</li>
					<li className="detailCardListItem"><b>Mr. Kaviyasaran D.</b> , chief engineer and founder of Avi engineering services, who is also an alum of IIT Madras will guide us</li>
					<li className="detailCardListItem">It would be a 3-4 hour workshop , Mr Kaviyasaran will teach us from the basics of Staad pro and end it with a project</li>
					<li className="detailCardListItem"><b>No prior knowledge on Staad Pro is needed</b></li>
					<li className="detailCardListItem"><b>Prerequisites:</b> Attendees should bring their laptops with Staad pro (student version) pre-installed in it.</li>
					<li className="detailCardListItem"><b>The price :</b> free with shilp registration fee. Participants have to pay shilp registration fee only</li>
					<li className="detailCardListItem"><b>Certification will be provided from department of civil engineering, IIT BHU</b></li>
				</ul>
			</div>
		</div>
		}
		{bim &&
		<div className="detailCardContainer">
			<div className="detailCard">
				<button className="closeButton" onClick={closeBim}><b>X</b></button>
				<h1>Details</h1>
				<ul className="detailCardList">
					<li className="detailCardListItem">An Interactive Masterclass on Building Information Modelling</li>
					<li className="detailCardListItem"><b>Mr. Mohamed Sabith</b>, BIM automation lead at Ramboll, has worked in COWI and L&T previously, will guide us</li>
					<li className="detailCardListItem">A 1.5 hour workshop, where Introduction to BIM, roadmap to learn and career opportunities will be discussed</li>
					<li className="detailCardListItem"><b>Prerequisites:</b> there are no prerequisites for the session, just bring your enthusiasm to learn</li>
					<li className="detailCardListItem"><b>The price :</b> free with shilp registration fee. Participants have to pay shilp registration fee only</li>
					<li className="detailCardListItem"><b>Certification will be provided from department of civil engineering, IIT BHU</b></li>
				</ul>
			</div>
		</div>
		}
		<div
			className="card"
			style={{
				backgroundImage: `url("./workshops/${props.name}.webp")`,
                border: "1px solid white"
			}}
		>
			<div className="card-content">
				<h2 className="card-title">{props.name}</h2>
				<p className="card-body" style={{padding:"0"}}>{props.details}</p>
				<button
					className="button"
				>
					Register
				</button>
				<button
					className="button"
					onClick={props.name === "STAAD Pro" ? showStaad : showBim}
				>
					Details
				</button>
			</div>
		</div>
		</>
	);
}

export default WorkshopCard