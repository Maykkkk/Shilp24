import React, { useState } from 'react';
import shilp from "../../links/img/SHILP.png"
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import "../../links/css/login.css"

// import { GoogleLogin } from 'react-google-login';



function Login() {
    
    const [email, setEmail] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const onFormSubmit = async e => {
        e.preventDefault();
        try {
            const body = { 
                "email": email, 
                "username": username,
                "password": password 
            };
            // const response = 
            const response = await fetch("https://shilp24-iitbhu.el.r.appspot.com/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(await response.json());
            // window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }


    return(
        <>
            <div className="background"></div>
            <div className="loginContainer">
                <div className="content">
                    <img src={shilp} alt="" />
                    <div className="text-sci">
                        <h2>Welcome! <br /><span>To the <span>Shilp</span> Website</span></h2>

                    
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/civil-engineering-society-iit-bhu/"><FaLinkedin className='linkedIn'/></a>
                            <a href="https://www.instagram.com/ces_iitbhu/"><FaInstagram className='instagram' style={{margin:"0 0 0 1vw"}}/></a>
                            <a href="https://www.facebook.com/groups/157760987681133/"><FaSquareFacebook className='facebook' style={{margin:"0 0 0 1vw"}}/></a>
                            <a href="https://www.youtube.com"><IoLogoYoutube className='youtube' style={{margin:"0 0 0 1vw"}}/></a>
                        </div>
                    </div>
                </div>

                <div className='login'>
                    <div className="form-box">
                        <form className='form' onSubmit={onFormSubmit}>
                            <h2>Register</h2>
                            <div className="input-box">
                                <div className="input mt-2">
                                    <span><i class='bx bxs-envelope'></i></span>
                                    <input type="email" name='email' className='form-submit' placeholder='Email Id' required onChange={e => setEmail(e.target.value)}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input mt-2">
                                    <span><i class='bx bxs-user'></i></span>
                                    <input type="text" name="username" className='form-submit' placeholder='Username' required onChange={e => setUsername(e.target.value)}/>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input mt-2">
                                    <span><i class='bx bxs-lock-alt'></i></span>
                                    <input type="password" name="password" className='form-submit' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="input mt-2">
                                <input type="submit" className='btn btn-success' value="Submit"/>
                            </div>

                            <div className="log-to-register">
                            <p>Already Registered? <Link to="/login" className='register-link'>Login here!</Link></p>
                        </div>
                        </form>
                </div>
                </div>
            </div>
        </>
    );
}
export default Login;