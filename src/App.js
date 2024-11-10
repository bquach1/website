import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Links from "./pages/links";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import "./css/scrollbar.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
