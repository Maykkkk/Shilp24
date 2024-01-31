import React from "react";
import "../links/css/EventCard.css";
import { Link } from "react-router-dom";
// import { pdfjs } from 'react-pdf';
import '../links/css/pdf.css'

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();

function EventCard(props) {
    
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-body">
                    {props.details}
                </p>
                <Link target="_blank" to={`/pdfs/${props.name}.pdf`}  className="button">
                    Explore
                </Link>
                <Link to=""  className="button">
                    Register
                </Link>
            </div>
        </div >
    )
}

export default EventCard;