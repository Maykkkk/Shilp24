import React from 'react';



import Register from '../components/Login/Register';

import NavBar from '../components/NavBar';




const RegisterPage = ({setAuth, isAuth}) => {
    return (
        <div className="App">
            <div className="body">
                <NavBar setAuth={setAuth} isAuth={isAuth} />

                <Register setAuth={setAuth}/>
            </div>
        </div>
    );   
}

export default RegisterPage;