import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import shilp from "../../links/img/SHILP.png"
//import Alert from '@mui/material/Alert'
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import "../../links/css/login.css"
import { useMotionValue, useTransform, motion } from "framer-motion";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const SignUp = () => {

  const x = useMotionValue(-542);
  const y = useMotionValue(-298);
  const rotateX= useTransform(y,[-338,-138],[20,-20]);
  const rotateY= useTransform(x,[-642,-442],[-20,20]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState("");
  const firestore = getFirestore();


  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, { username: username, email: email });

      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="background" style={{perspective: 2000}}>
    <motion.div className="loginContainer"
        style={window.innerWidth >= 1000? {x,y,rotateX,rotateY,z:100}:{}}
        drag= {true}
        dragElastic={0.18} 
        dragConstraints={{top: -238, left: -541, right: -541, bottom: -238}} 
        whileTap={{cursor: "grabbing"}}
    >
        <div className="content">
            <img src={shilp} alt="" />
            <div className="text-sci">
                <h2>Welcome! <br /><span>To the <span>Shilp</span> Website</span></h2>


                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/civil-engineering-society-iit-bhu/"><FaLinkedin className='linkedIn' /></a>
                    <a href="https://www.instagram.com/ces_iitbhu/"><FaInstagram className='instagram' style={{ margin: "0 0 0 1vw" }} /></a>
                    <a href="https://www.facebook.com/groups/157760987681133/"><FaSquareFacebook className='facebook' style={{ margin: "0 0 0 1vw" }} /></a>
                    <a href="https://www.youtube.com"><IoLogoYoutube className='youtube' style={{ margin: "0 0 0 1vw" }} /></a>
                </div>
            </div>
        </div>

        <div className='login'>
            <div className="form-box">
                <form className='form' onSubmit={SignUp}>
                    <h2>Register</h2>
                    <div className="input-box">
                        <div className="input mt-2">
                            <span><i className='bx bxs-envelope'></i></span>
                            <input type="email" name='email' className='form-submit' placeholder='Email Id'  onChange={e => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input mt-2">
                            <span><i className='bx bxs-user'></i></span>
                            <input type="text" name="username" className='form-submit' placeholder='Username'  onChange={e => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input mt-2">
                            <span><i className='bx bxs-lock-alt'></i></span>
                            <input type="password" name="password" className='form-submit' placeholder='Password'  onChange={e => setPassword(e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="input mt-2">
                        <input type="submit" className='btn btn-success' value="Submit" />
                    </div>
                    <div className="log-to-register">
                        <p>Already Registered? <Link to="/SignIn" className='register-link'>Login here!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </motion.div>
    </div>
</>
  );
};

export default SignUp;