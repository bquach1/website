import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { HashRouter as Router, Routes, Route}
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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />                
        <Route path='/qualifications' element={<Qualifications/>} />
        <Route path='/links' element={<Links/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;