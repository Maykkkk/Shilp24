import React from 'react';
import '../links/css/login.css';
import Login from '../components/Login/Login';
import NavBar from '../components/NavBar';




function LoginPage() {
    return (
        <div className="App">
            <div className="body loginPage">
                <NavBar></NavBar>

                <Login className="loginComponent"/>

            </div>
        </div>
    );   
}

export default LoginPage;