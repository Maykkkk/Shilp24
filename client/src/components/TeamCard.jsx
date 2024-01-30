import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";


function TeamCard({Name, ProfilePhoto, style,LinkedIn, Facebook, Instagram}) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [100, -100], [70, -70]);
    const rotateY = useTransform(x, [-100, 100], [70, -70]);

  return (
    <motion.div 
                style={{x,y,rotateX,rotateY,z:100}}
                drag
                dragElastic={0.18}
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor:"grabbing"}} 
                className="team-card">
                  <div className="team-content">
                    <div className="imgBx">
                      <img src={ProfilePhoto} alt="ProfilePhoto" style={style}/>
                    </div>
                    <div className="contentBx">
                      <h3>{Name}</h3>
                    </div>
                  </div>
                  <ul className="sci">
                  <li><Link to=""><FaLinkedin className="linkedIn" /></Link></li>
                    <li><Link to=""><FaFacebook className="facebook" /></Link></li>
                    <li><Link to=""><FaInstagram className="instagram" /></Link></li>
                  </ul>
                </motion.div>
  )
}

export default TeamCard;