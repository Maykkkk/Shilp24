import React from 'react';
import '../../links/css/Merch.css';
import tshirt from '../../links/img/image_1-removebg-preview.png'
import hoodie from '../../links/img/image_3-removebg-preview.png'

function Merch() {
 return (
    <div className="merch-container">
      <h1 className="top">SHILP MERCHANDISE</h1>

      <div className="shop-item">
        <h2>T-shirt 1</h2>
        <img className="merch-img" src={tshirt} alt=""/>
        <p className='price'>INR 700 900</p>
        <button className='buy-button'>Buy Now</button>
      </div>

      <div className="shop-item">
        <h2>T-shirt 2</h2>
        <img className="merch-img" src={tshirt} alt=""/>
        <p className='price'>INR 700 900</p>
        <button className='buy-button'>Buy Now</button>
      </div>

      <div className="shop-item">
        <h2>Hoodie</h2>
        <img className="merch-img" src={hoodie} alt=""/>
        <p className='price'>INR 1000 1200</p>
        <button className='buy-button'>Buy Now</button>
      </div>

    </div>
 );
};

export default Merch;