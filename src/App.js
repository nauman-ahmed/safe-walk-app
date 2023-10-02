import "./App.css";
import React, { useEffect } from "react";
import Location from "./pages/location";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import LandingPage from "./pages/Landing";

function App() {

  useEffect(()=>{
    
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Location />} /> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />


        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/map" element={<Location />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
