import React from "react";
import "../links/css/EventCard.css";
import "../links/css/pdf.css";


function WorkshopCard(props) {
    return (
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
			</div>
		</div>
	);
}

export default WorkshopCard