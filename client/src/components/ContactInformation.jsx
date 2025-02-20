import React from 'react';
import '../links/css/ContactInformation.css';

const ContactInformation = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Contact Information</h2>
      <p className="contact-text">IIT (BHU), Varanasi, Uttar Pradesh</p>
      <p className="contact-email">
        <a href="mailto:shilp@iitbhu.ac.in">shilp@iitbhu.ac.in</a>
      </p>
      <p className="contact-phone">+91</p>

      <h3 className="sponsors-heading">Our Sponsors</h3>
      <div className="sponsors">
        <div className="sponsor">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Larsen%26Toubro_logo.svg/2560px-Larsen%26Toubro_logo.svg.png" alt="L&T" />
          <p>L&T</p>
        </div>
        <div className="sponsor">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Tata_Consulting_Engineers_Logo.svg/2560px-Tata_Consulting_Engineers_Logo.svg.png" alt="Tata Conc." />
          <p>Tata Conc.</p>
        </div>
        <div className="sponsor">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/JSW_Group_logo.svg/2560px-JSW_Group_logo.svg.png" alt="JSW" />
          <p>JSW</p>
        </div>
        <div className="sponsor">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png" alt="Godrej" />
          <p>Godrej</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
