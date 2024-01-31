import React from 'react'
// import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../links/css/Contact.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// import { MdEmail } from "react-icons/md";
import Fade from 'react-reveal/Fade';

const contacts = ({ setAuth, isAuth }) => {
  return (
    <div className='App'>
      <div className='body' id='contact'>
        <div>
          <NavBar setAuth={setAuth} isAuth={isAuth} />
        </div>
        <Fade top>
          <div className='top'>Contact Us</div>
        </Fade>
        <div className='outer-body contact-outer-body'>
          {/* <Zoom> */}
          <div className=" contact-inner-body inner-body">
            <div className="name1 contact fs-5">
              Aman Srivastava<br />
              <a href="mailto:aman.srivastava.civ21@itbhu.ac.in">aman.srivastava.civ21@itbhu.ac.in</a><br />
              +91 96251 67658
            </div>
            <div className="name2 contact fs-5">
              Anchal Ganguli<br />
              <a href="mailto:anchal.ganguly.civ21@itbhu.ac.in">anchal.ganguly.civ21@itbhu.ac.in</a><br />
              +91 8765522325
            </div>
            <div className="name3 contact fs-5">
              Manvi Srivastava<br />
              <a href="mailto:manvi.srivastava.civ21@itbhu.ac.in">manvi.srivastava.civ21@itbhu.ac.in</a><br />
              +91 9696220428
            </div>
            <div className="name4 contact fs-5">
              Akhand Pratap Yadav<br />
              <a href="mailto:prakhar.yadav.civ21@itbhu.ac.in">prakhar.yadav.civ21@itbhu.ac.in</a><br />
              +91 6207 191 509
            </div>
          </div>
          {/* </Zoom> */}
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default contacts