import React from 'react'
// import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../links/css/Contact.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
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
        <div className='details topp'>
          <div className='col2'>Name</div>
          <div className='col2'>Mail</div>
          <div className='col2'>Phone No.</div>
        </div>
        <div className='Contacts'>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no1' >
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }} >
            <div className='details s-no2' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no3' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no4' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no5' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no6' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no7' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <div className='details s-no8' style={{ textDecoration: 'none' }}>
              <div className='col2' >Abhishek</div>
              <div className='col2' id='desktop-email'>iabhiishek10@gmail.com</div>
              <div className="col2" id='mobile-email'><MdEmail /></div>
              <div className='col2'>7390947049</div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default contacts