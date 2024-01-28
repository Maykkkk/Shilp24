import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./pages/home";
import Events from "./pages/events";
import Competitions from "./pages/competitions";
import Guests from "./pages/guests";
import Contacts from "./pages/contacts";
import Store from "./pages/Store";
import Accommodation from "./pages/Accommodation";
import Team from "./pages/team";
import Media from "./pages/media";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/events" element={<Events setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/competitions" element={<Competitions setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/guests" element={<Guests setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/contacts" element={<Contacts setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/store" element={<Store setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/accommodations" element={<Accommodation setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/team" element={<Team setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />
        <Route path="/media" element={<Media setAuth={setIsAuthenticated} isAuth={isAuthenticated} />} />

        {/* Auth */}
        <Route
          path="/SignInPage"
          element={
            !isAuthenticated ? (
              <SignInPage setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/SignUpPage"
          element={
            !isAuthenticated ? (
              <SignUpPage setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
