import React from 'react'
// import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../links/css/Contact.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer' 

function contacts() {
  return (
    <div className='App'>
    <div className='body' id='contact'>
      <div><NavBar/></div>
      <div className='top'>Contact Us</div>
      <div className='details topp'>
        <div className='col2'>Name</div>
        <div className='col2'>Mail</div>
        <div className='col2'>Phone No.</div>
      </div>
      <div className='Contacts'>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' >
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}} >
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      <Link to={""} style={{textDecoration:'none'}}>
      <div className='details' style={{textDecoration:'none'}}>
        <div className='col2' >Abhishek</div>
        <div className='col2'>iabhiishek10@gmail.com</div>
        <div className='col2'>7390947049</div>
      </div>
      </Link>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default contacts