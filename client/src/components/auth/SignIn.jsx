import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
//import Alert from '@mui/material/Alert';
import "../../links/css/login.css"
import shilp from "../../links/img/SHILP.png"
import { Link, useNavigate } from "react-router-dom";
import { useMotionValue, useTransform, motion } from "framer-motion";

const SignIn = ({setAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const x = useMotionValue(-542);
  const y = useMotionValue(-298);
  const rotateX= useTransform(y,[-338,-138],[20,-20]);
  const rotateY= useTransform(x,[-642,-442],[-20,20]);

   const SignIn = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with the provided credentials
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, update authentication status and navigate to the home page
      setAuth(true);
      navigate("/");
    } catch (error) {
      // If login fails, handle the error (e.g., display an error message)
      console.log(error.code, error.message);

      if (error.message === 'auth/invalid-credential') {
        // Provide user-friendly message for invalid email or user not found
        alert('Invalid email or user not found. Please register first.');
        navigate("/SignUp");
      } else if (error.message === 'auth/wrong-password') {
        // Provide user-friendly message for wrong password
        alert('Incorrect password. Please try again.');
      } else {
        // For other errors, log the error to the console
        console.error(error);
      }
    }
  };

  return (
    <>
            <div className="background" style={{perspective:2000}}>
            <motion.div
              style={window.innerWidth >= 1000? {x,y,rotateX,rotateY,z:100}:{}}
              drag= {true}
              dragElastic={0.18} 
              dragConstraints={{top: -238, left: -542, right: -542, bottom: -238}} 
              whileTap={{cursor: "grabbing"}}
              className="loginContainer">
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
                        <form className='form' onSubmit={SignIn}>
                            <h2>Sign In</h2>
                            <div className="input-box">
                                <div className="input mt-2">
                                    <span><i className='bx bxs-envelope'></i></span>
                                    <input type="email" name='email' className='form-submit' placeholder='Email Id' onChange={e => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input mt-2">
                                    <span><i className='bx bxs-lock-alt'></i></span>
                                    <input type="password" name="password" className='form-submit' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>

                            <div className="input mt-2">
                                <input type="submit" className='btn btn-success' value="Submit" />
                            </div>
                            {/* {LoginFailure ?
                                <Alert severity="error" className='mt-2'>{FailureMessage}</Alert>
                                :
                                <></>
                            } */}
                            <div className="log-to-register">
                                <p>Don't have an account? <Link to="/SignUp" className='register-link'>Register here!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    // <div className="sign-in-container">
    //   <form onSubmit={signIn}>
    //     <h1>Log In to your Account</h1>
    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     ></input>
    //     <input
    //       type="password"
    //       placeholder="Enter your password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     ></input>
    //     <button type="submit">Log In</button>
    //   </form>
    // </div>
  );
};

export default SignIn;