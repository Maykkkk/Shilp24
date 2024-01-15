import React, { useState, useEffect } from 'react';

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
            const response = await fetch("http://localhost:5000/register", {
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
                    <input type="email" name='email' className='form-submit' placeholder='Email Id' required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input mt-2">
                    <input type="text" name="username" className='form-submit' placeholder='Username' required onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="input mt-2">
                    <input type="password" name="password" className='form-submit' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
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