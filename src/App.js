import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom"; // Update: Use Routes instead of Switch
import Home from "./pages/index";
import Links from "./pages/links";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import "./css/scrollbar.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
