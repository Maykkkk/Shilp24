import React from 'react';
import '../../links/css/Merch.css';
import front from '../../links/img/Merch Photos/3.png'
import back from '../../links/img/Merch Photos/6.png'

function Merch() {
 return (
    <div className="merch-container">
      <h1 className="top">SHILP MERCHANDISE</h1>

      <div className="shop-item">
        <h2>Front</h2>
        <img className="merch-img" src={front} alt=""/>
        
        
      </div>

      <div className="shop-item">
        <h2>Back</h2>
        <img className="merch-img" src={back} alt=""/>
        {/* <p className='price'>INR 700 <span className='strike'>900</span></p> */}
        
      </div>

      <div className='butcontain'>
      <p className='price'>INR 349 <span className='strike'>500</span></p>
      <button className='buy-button'><a href="https://forms.gle/9AtpYj3M2xaNoZL2A" style={{color: 'white', textDecoration: 'none'}}>Buy Now</a></button>
      </div>

      {/* <div className="shop-item">
        <h2>Hoodie</h2>
        <img className="merch-img" src={hoodie} alt=""/>
        <p className='price'>INR 1000 <span className='strike'>1200</span></p>
        <button className='buy-button'>Buy Now</button>
      </div> */}

    </div>
 );
};

export default Merch;
