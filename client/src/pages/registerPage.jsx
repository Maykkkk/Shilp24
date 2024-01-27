import React from 'react';



import Register from '../components/Login/Register';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';




const RegisterPage = ({setAuth, isAuth}) => {
    return (
        <div className="App">
            <div className="body">
                <NavBar setAuth={setAuth} isAuth={isAuth} />

                <Register setAuth={setAuth}/>
            </div>
            <Footer/>
        </div>
    );   
}

export default RegisterPage;