import React from 'react';
import '../links/css/login.css';
import Login from '../components/Login/Login';
import NavBar from '../components/NavBar';





const LoginPage = ({ setAuth, isAuth }) => {
    return (
        <div className="App">
            <div className="body loginPage">
                <NavBar setAuth={setAuth} isAuth={isAuth} />

                <Login className="loginComponent" setAuth={setAuth} />

            </div>
        </div>
    );
}

export default LoginPage;