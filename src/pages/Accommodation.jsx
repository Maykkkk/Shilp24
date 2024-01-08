import React,{ useState} from 'react'
import '../links/css/home.css';
import '../links/css/accommodation.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutUs from '../components/Accommodation/AboutUs'
import AccomodationPolicies from '../components/Accommodation/AccommodationPolicies'
import Instructions from '../components/Accommodation/Instructions'
import Faqs from '../components/Accommodation/Faqs'
import ReachingIITBHU from '../components/Accommodation/ReachingIITBHU'
import ContactUs from '../components/Accommodation/ContactUs'



function Accommodation() {
    const [onButton, setOnButton] = useState("aboutUs")
    
    const buttonStyle = {
        backgroundColor: "rgba(209, 33, 86, 1)",
        fontSize:"1.8vw"
    }

  return (
    <div className="App">
        <div className="body">
        <NavBar></NavBar>
        <div className="accommodation-heading">
            <h1><span>ACCOMMODATION</span> AT <div className="desktop-view">SHILP IIT BHU</div></h1>
        </div>
        <div className="accommodation-tabs">
            <div className="buttons">    
                <button className='btn' style={onButton==="aboutUs"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("aboutUs")}>About Us</button>
                <button className='btn' style={onButton==="accommodationPolicies"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("accommodationPolicies")}>Accomodation Policies</button>
                <button className='btn' style={onButton==="instructions"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("instructions")}>Instructions</button>
                <button className='btn' style={onButton==="faqs"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("faqs")}>FAQs</button>
                <button className='btn' style={onButton==="reachingIITBHU"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("reachingIITBHU")}>Reaching IIT BHU</button>
                <button className='btn' style={onButton==="contactUs"? buttonStyle:{backgroundColor:"rgba(54, 24, 68, 1)"}} onClick={()=>setOnButton("contactUs")}>Contact Us</button>
            </div>
            {
                onButton==="aboutUs"? <AboutUs className="about-us"></AboutUs>
                    :
                onButton==="accommodationPolicies"?<AccomodationPolicies/>
                :
                onButton==="instructions"?<Instructions/>
                :
                onButton==="faqs"?<Faqs/>
                :
                onButton==="reachingIITBHU"?<ReachingIITBHU/>
                :
                onButton==="contactUs"?<ContactUs/>
                :
                null
            }
        </div>
        <Footer className='footer'></Footer>
        </div>
    </div>
  )
}

export default Accommodation