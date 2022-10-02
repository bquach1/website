import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Links from './pages/links';
import Contact from './pages/contact';
import Qualifications from './pages/qualifications';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/website' element={<Home />} />
        <Route path='/website/about' element={<About/>} />                
        <Route path='/website/qualifications' element={<Qualifications/>} />
        <Route path='/website/links' element={<Links/>} />
        <Route path='/website/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;