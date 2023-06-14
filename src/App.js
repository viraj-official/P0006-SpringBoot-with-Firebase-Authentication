import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import Project from "./views/Project";
import Profile from "./views/Profile";
import Header from "./components/Header";
import Protected from "./components/Protected";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./config/Firebase";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        setIsSignedIn(true);
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        setIsSignedIn(false);
      }
    });
  }, []);

  return (
    <div>
      {isSignedIn !== null && (
        <Router>
          <div className="app">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <Header />
                    <Home />
                  </div>
                }
              />
              <Route
                exact
                path="/dashboard"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <div>
                      <Header />
                      <Dashboard />
                    </div>
                  </Protected>
                }
              />
              <Route
                exact
                path="/projects"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <div>
                      <Header />
                      <Project />
                    </div>
                  </Protected>
                }
              />
              <Route
                exact
                path="/about"
                element={
                  <div>
                    <Header />
                    <About />
                  </div>
                }
              />
              <Route
                exact
                path="/profile"
                element={
                  <Protected isSignedIn={isSignedIn}>
                    <div>
                      <Header />
                      <Profile />
                    </div>
                  </Protected>
                }
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
