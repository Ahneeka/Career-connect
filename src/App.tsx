import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import WelcomeScreen from './pages/WelcomeScreen';
import PracticeSession from './pages/PracticeSession';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/onboard" />} />
        <Route path="/onboard" element={<Onboarding/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/welcome" element={<WelcomeScreen/>} />
        <Route path="/practice" element={<PracticeSession />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
