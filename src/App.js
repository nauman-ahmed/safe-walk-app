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
import ProfilePage from "./pages/Profile";
import { setAuthToken } from "./API/setCommonHeader"
import HistoryPage from "./pages/History";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const checkAuth = async () => {
    let flag = false;
    localStorage.getItem("authorization") ? flag=true : flag=false

    if(flag){
      setAuthToken(localStorage.getItem("authorization"))
    }

  }

  useEffect(()=>{
      checkAuth()
  },[])

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/map" element={<Location />} />
        <Route path="/history" element={<HistoryPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
     <ToastContainer />
    </>
    
  );
}

export default App;