import React from 'react';
import '../links/css/login.css';
import SignIn from '../components/auth/SignIn';
import NavBar from '../components/NavBar';





const SignInPage = ({ setAuth, isAuth }) => {
    return (
        <div className="App">
            <div className="body">
                <NavBar setAuth={setAuth} isAuth={isAuth} />

                <SignIn setAuth={setAuth} />

            </div>
        </div>
    );
}

export default SignInPage;