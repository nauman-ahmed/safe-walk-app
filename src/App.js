import "./App.css";
import React from "react";
import Location from "./pages/location";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/" element={<Location />} /> */}
        <Route path="/signup" element={<SignupPage />} />

        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/map" element={<Location />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
