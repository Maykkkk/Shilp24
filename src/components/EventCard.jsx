import React from "react";
import "../links/css/EventCard.css";
import { Link } from "react-router-dom";

function EventCard(props) {
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-body">
                    {props.details}
                </p>
                <Link to=""  className="button">
                    Learn More
                </Link>
            </div>
        </div >
    )
}

export default EventCard;