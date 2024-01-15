import React, { useState, useEffect } from 'react';

import "../../links/css/login.css"

// import { GoogleLogin } from 'react-google-login';



function Login() {
    
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const onFormSubmit = async e => {
        e.preventDefault();
        try {
            const body = { 
                "email": email, 
                "password": password 
            };
            // const response = 
            const response = await fetch("http://localhost:5000/login", {
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
        <div className="loginContainer">
            <div className='login'>
            <form className='form' onSubmit={onFormSubmit}>
                <div className="input mt-2">
                    <input type="email" name='email' className='form-submit' placeholder='Email Id' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input mt-2">
                    <input type="password" name="password" className='form-submit' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="input mt-2">
                    <input type="submit" className='btn btn-success' value="Submit"/>
                </div>
            </form>
            </div>
        </div>
    );
}
export default Login;