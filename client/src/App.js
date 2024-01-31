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
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isAuthenticated ? (
              <Home
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/events"
          element={
            isAuthenticated ? (
              <Events
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/competitions"
          element={
            isAuthenticated ? (
              <Competitions
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/guests"
          element={
            isAuthenticated ? (
              <Guests
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/contacts"
          element={
            isAuthenticated ? (
              <Contacts
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/store"
          element={
            isAuthenticated ? (
              <Store
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/accommodations"
          element={
            isAuthenticated ? (
              <Accommodation
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          exact
          path="/team"
          element={
            isAuthenticated ? (
              <Team
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          exact
          path="/media"
          element={
            isAuthenticated ? (
              <Media
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          exact
          path="/gallery"
          element={
            isAuthenticated ? (
              <Gallery
                setAuth={setIsAuthenticated}
                isAuth={isAuthenticated}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>

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