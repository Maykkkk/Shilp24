import React from 'react';



import Register from '../components/Login/Register';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';




function LoginPage() {
    return (
        <div className="App">
            <div className="body">
                <NavBar></NavBar>

                <Register />
            </div>
            <Footer/>
        </div>
    );   
}

export default LoginPage;