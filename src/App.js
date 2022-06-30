import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import Values from "./components/pages/Values";
import Vision from "./components/pages/Vision";
import SignUp from "./components/pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/values" element={<Values />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
