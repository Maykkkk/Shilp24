import React from 'react'
import "../links/css/button.css";
import { Link } from "react-router-dom";

function Button({name, url, target}) {
  return (
    <div className='events-buttonContainer'>
        <Link target={target} to={url} className="events-button">
            <div className="plate"></div>
            <div className="plate"></div>
            <div className="plate"></div>
            <div className="plate"></div>
            <div className="plate"></div>
            <div className="events-button__wrapper">
            <span className="events-button__text">{name}</span>
            </div>
            <div className="events-button__box">
            <div className="inner inner__top"></div>
            <div className="inner inner__front"></div>
            <div className="inner inner__bottom"></div>
            <div className="inner inner__back"></div>
            <div className="inner inner__left"></div>
            <div className="inner inner__right"></div>
            </div>
        </Link>
    </div>
  )
}

export default Button