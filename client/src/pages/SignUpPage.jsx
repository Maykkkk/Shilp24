import React from 'react';



import SignUp from '../components/auth/SignUp';

import NavBar from '../components/NavBar';




const SignUpPage = ({setAuth, isAuth}) => {
    return (
        <div className="App">
            <div className="body">
                <NavBar setAuth={setAuth} isAuth={isAuth} />

                <SignUp setAuth={setAuth}/>
            </div>
        </div>
    );   
}

export default SignUpPage;