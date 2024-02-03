import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../links/css/teamCard.css'



function TeamCard({Name, ProfilePhoto, style, LinkedIn, Gmail, Instagram}) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [100, -100], [70, -70]);
    const rotateY = useTransform(x, [-100, 100], [70, -70]);

  return (
    <motion.div 
                style={
                  window.innerWidth >= 1000
                    ? { x, y, rotateX, rotateY, z: 100 }
                    : {}
                }
                drag={
                  window.innerWidth >= 1000
                    ?true:false
                }
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
                    {LinkedIn?<li><Link to={LinkedIn}><FaLinkedin className="linkedIn" /></Link></li>:<li></li>}
                    {Gmail?<li><a href={`mailto:${Gmail}`} style={{background:"transparent", border:"none", fontSize:"27px", color:"white"}}><BiLogoGmail className='gmail'/></a></li>:<li>  </li>}
                    {Instagram?<li><Link to={Instagram}><FaInstagram className="instagram" /></Link></li>:<li></li>}
                  </ul>
                </motion.div>
  )
}

export default TeamCard;