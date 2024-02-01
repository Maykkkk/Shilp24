import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../links/css/Competition.css'
import EmptyNote from '../components/EmptyNote'
import Fade from 'react-reveal/Fade';

const competitions = ({setAuth, isAuth}) => {
  return (
    <div className='App'>
    <div className='body'>
    <NavBar setAuth={setAuth} isAuth={isAuth} />
    {/* <div className='cards'>
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
    </div> */}
    <EmptyNote/>
    <Fade bottom>
          <Footer></Footer>
        </Fade>
    </div>
    </div>
  )
}

export default competitions