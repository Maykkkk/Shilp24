import React, { useState, useEffect } from 'react';



import Login from '../components/Login/Login';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';




function LoginPage() {
    return (
        <div className="App">
            <div className="body">
                <NavBar></NavBar>

                <Login />

                <Footer></Footer>
            </div>
        </div>
    );   
}

export default LoginPage;