import React from "react";
import "../links/css/EventCard.css";

function EventCard(props) {
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-body">
                    {props.details}
                </p>
                <a href="#" className="button">
                    Learn More
                </a>
            </div>
        </div >
    )
}

export default EventCard;