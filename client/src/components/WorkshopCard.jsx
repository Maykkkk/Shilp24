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
					<li className="detailCardListItem"><b>Mr. Kaviyasaran D.</b>, chief engineer and founder of Avi engineering services, who is also an alum of IIT Madras will guide us</li>
					<li className="detailCardListItem">It would be a 3-4 hour workshop , Mr Kaviyasaran will teach us from the basics of Staad pro and end it with a project</li>
					<li className="detailCardListItem"><b>No prior knowledge on Staad Pro is needed</b></li>
					<li className="detailCardListItem"><b>Prerequisites:</b> Attendees should bring their laptops with Staad pro (student version) pre-installed in it.</li>
					<li className="detailCardListItem"><b>The price :</b> free with shilp registration fee. Participants have to pay shilp registration fee only</li>
				</ul>
			</div>
		</div>
		}
		{bim &&
		<div className="detailCardContainer">
			<div className="detailCard">
				<button className="closeButton" onClick={closeBim}><b>X</b></button>
				<h1>Details</h1>
				<h6 style={{marginTop:"25vh"}}>Discover BIM in just 1-2 hours. Get a certificate upon completion and Elevate your skills with us!</h6>
				{/* <ul className="detailCardList">
					<li className="detailCardListItem">An Introductory workshop on Staad PRO with  the practice excersises in between</li>
					<li className="detailCardListItem">Kaviyasaran_d, chief engineer and founder of Avi engineering services, who is also an alum of IIT Madras will guide us</li>
					<li className="detailCardListItem">It would be a 3-4 hour workshop , he will teach us from the basics of Staad pro and end it with a project</li>
					<li className="detailCardListItem"><b>No prior knowledge on Staad Pro is needed</b></li>
					<li className="detailCardListItem"><b>Prerequisites:</b> Attendees should bring their laptops with Staad pro (student version) pre-installed in it.</li>
					<li className="detailCardListItem"><b>The price :</b> free with shilp registration fee. Participants have to pay shilp registration fee only</li>
				</ul> */}
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