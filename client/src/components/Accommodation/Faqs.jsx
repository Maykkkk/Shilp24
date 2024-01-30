import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';

function AllCollapseExample(){
  return (
    <Zoom>
    <div className="outer-body faq-outer-body">
        
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        How to avail accommodation?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        1. Click on Register now <br />
                        2. Complete the payment procedure. <br />
                        Confirmation will be sent to you. Report at accommodation desk</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        What is the payment procedure?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">The payment procedure will be online. You will have to report at the accommodation desk near the SHILP room with the email printout and the mandatory documents. Failing to bring any of the documents may lead to the cancellation of your accommodation.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How do I know that my payment is confirmed?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Confirmation is not confirmed till a confirmation mail is not received in 24 hours. If not received confirmation in 24 hours, then mail your transaction ID, SHILP ID, name, amount to shilp@itbhu.ac.in with the subject as Transaction ID :: team ID :: Confirmation mail not received.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Documents that guests should carry?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        1. Any valid Govt photo ID <br />
                        2. Print out of Email confirmation <br />
                        3. Gate pass <br />
                        4. Valid college ID for participants <br />
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Should I carry my ID card with me?
                    </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        It is mandatory for all guest participants to carry college IDs. This is for your own convenience. Moreover, you will be asked to produce your college ID cards at the time of allotment of rooms.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        What are the Accommodation charges?
                    </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        The accommodation charges and other necessary details regarding the payment will be available under the tab Accommodation Charges.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        What kind of accommodation is provided?
                    </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Accommodation is provided on a shared basis inside campus hostels or outside hotels. One mattress, and enough space for keeping luggage, and other essential commodities will be provided. Girls and boys will be accommodated separately. The number of guests in a room will be decided by SHILP .</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        Does tha accommodation facilities include food facilities?
                    </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">No, the accommodation charges do not include food facilities. Guests can purchase their meals from  hostel canteens or hostel messes at just INR 50 per meal.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        What are the food facilities inside IIT BHU?
                    </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"> You can also eat in the many canteens, messes inside the campus.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                        Can I enter IIT BHU campus at any time?
                    </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">You can enter IIT Main gate anytime by showing a valid photo ID proof during 6am to 10pm, however, you need to have accommodation inside the campus to stay in the campus after 10pm.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                        Can we get accommodation on the spot at SHILP?
                    </button>
                    </h2>
                    <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">No confirmation of accommodation will be provided. It is completely subject to the availability of rooms.</div>
                    </div>
                </div>
            </div>
    </div>
    </Zoom>
  );
}
export default AllCollapseExample;