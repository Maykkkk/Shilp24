import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import '../links/css/Competition.css'


function competitions() {
  return (
    <div className='App'>
    <div className='body' id='competition'>
    <NavBar/>
    <div className='cards'>
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    <EventCard
      name="civil Explo"
      details="civil ka kuch kaam hota hai"
    />
    <EventCard
      name="cp related"
      details="rating badhao"
    />
    <EventCard
      name="ml related"
      details="big data machine learning modi ji"
    />
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default competitions