import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/onboard" />} />
        <Route path="/onboard" element={<Onboarding/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
