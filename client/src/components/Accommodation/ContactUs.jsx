import React from 'react'
import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className='outer-body contact-outer-body'>
        <Zoom>
        <div className=" contact-inner-body inner-body">
            <div className="name1 contact fs-5">
                AMAN SRIVASTAVA <br />
                <Link to="mailto:aman.srivastava.civ21@itbhu.ac.in">aman.srivastava.civ21@itbhu.ac.in</Link><br />
                +91 96251 67658
            </div>
            <div className="name2 contact fs-5">
                MITHILESH K<br />
                <Link to="mailto:k.mithilesh.civ21@itbhu.ac.in">k.mithilesh.civ21@itbhu.ac.in</Link><br />
                +91 63098 81816
            </div>
            <div className="name3 contact fs-5">
                PRAKHAR YADAV<br />
                <Link to="mailto:prakhar.yadav.civ21@itbhu.ac.in">prakhar.yadav.civ21@itbhu.ac.in</Link><br />
                +91 96166 95186
            </div>
            <div className="name4 contact fs-5">
                PRIARANJAN KUMAR KHAN<br />
                <Link to="mailto:prakhar.yadav.civ21@itbhu.ac.in">prakhar.yadav.civ21@itbhu.ac.in</Link><br />
                +91 6207 191 509
            </div>
        </div>
        </Zoom>
    </div>
  )
}

export default ContactUs;