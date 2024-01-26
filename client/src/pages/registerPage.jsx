import React from 'react';



import Register from '../components/Login/Register';

import NavBar from '../components/NavBar';




function LoginPage() {
    return (
        <div className="App">
            <div className="body">
                <NavBar></NavBar>

                <Register />
            </div>
        </div>
    );   
}

export default LoginPage;