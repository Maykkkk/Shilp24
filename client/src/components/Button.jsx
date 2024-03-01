import React from 'react'
import "../links/css/button.css";
import { Link } from "react-router-dom";

function Button({name, url, target}) {
  return (
    <div className='events-buttonContainer'>
        <Link target={target} to={url} class="events-button">
            <div class="plate"></div>
            <div class="plate"></div>
            <div class="plate"></div>
            <div class="plate"></div>
            <div class="plate"></div>
            <div class="events-button__wrapper">
            <span class="events-button__text">{name}</span>
            </div>
            <div class="events-button__box">
            <div class="inner inner__top"></div>
            <div class="inner inner__front"></div>
            <div class="inner inner__bottom"></div>
            <div class="inner inner__back"></div>
            <div class="inner inner__left"></div>
            <div class="inner inner__right"></div>
            </div>
        </Link>
    </div>
  )
}

export default Button