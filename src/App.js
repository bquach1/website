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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About/>} />                
        <Route exact path='/qualifications' element={<Qualifications/>} />
        <Route exact path='/links' element={<Links/>} />
        <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;