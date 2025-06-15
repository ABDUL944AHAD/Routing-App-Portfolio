import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Project from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navbarof from './components/navbar';
import './App.css';
import './index.css'

function App() {
  return (
    <Router>
      
      <Navbarof />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
