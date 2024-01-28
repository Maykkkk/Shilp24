import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./pages/home";
import Events from "./pages/events";
import Competitions from "./pages/competitions";
import Guests from "./pages/guests";
import Contacts from "./pages/contacts";
import Store from "./pages/Store";
import Accommodation from "./pages/Accommodation";
import Team from "./pages/team";
import Media from "./pages/media";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const checkAuth = async() =>{
      try {
        const respose = await fetch("http://localhost:5000/auth/is-verify", {
          method: "GET",
          headers: { token: localStorage.token }
        });
  
        const parseRes = await respose.json();
  
        if(parseRes === true){
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error(error.message);
      }
  }

  useEffect(() => {
    checkAuth();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/events" element={<Events setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/competitions" element={<Competitions setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/guests" element={<Guests setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/contacts" element={<Contacts setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/store" element={<Store setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route exact path="/accommodations" element={<Accommodation setAuth={setIsAuthenticated} isAuth={isAuthenticated} />}></Route>
        <Route exact path="/team" element={<Team setAuth={setIsAuthenticated} isAuth={isAuthenticated} />}></Route>
        <Route exact path="/media" element={<Media setAuth={setIsAuthenticated} isAuth={isAuthenticated} />}></Route>

        {/* Auth */}
        <Route
          exact
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
        <Route
          exact
          path="/register"
          element={
            !isAuthenticated ? (
              <RegisterPage setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;