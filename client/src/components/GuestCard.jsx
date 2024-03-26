import React from 'react'
import "../links/css/guests.css";

function GuestCard({name,desig, desc, url}) {
  return (
    <div className="content">
					<div className="Guestcard">
						<div className="card__side card__side--front" >
						{/* <!-- Front Content --> */}
						<div className="card__cont">
                            <img src={url} alt="" />
							<pre className='name'>
                                <h3>{`${name}`}</h3>
                                    {name === "Mr. Anupam Awasthi" ? (
                                        <h5>Deputy Chief Manager,<br/>NHSRCL</h5>
                                    ) : (
                                        <h5>{`${desig}`}</h5>
                                    )}
                            </pre>
						</div>
						</div>
						<div className="card__side card__side--back">
						{/* <!-- Back Content --> */}
                        <header>   
                            <img src={url} alt="" />
                            <div className="card__cta">
                                <p><span className="purple">{desc}</span></p>
                            </div>
                        </header>
						</div>
					</div>	
				</div>
  )
}

export default GuestCard