// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Glimpse from './pages/Glimpse';
import StayPositive from './pages/StayPositive';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="home-main-container">
            <div className="home-sub-container">
              <p className="home-eyebrow">
                Front-End Developer <span aria-hidden="true">·</span> San Diego
              </p>

              <h1 className="title">
                <span>Mandy</span>
                <em>Lui.</em>
              </h1>

              <div className="home-actions">
                <Link className="projects-button" to="/projects">
                  View Projects
                </Link>
                <Link className="about-link" to="/about">
                  About Me
                </Link>
              </div>
            </div>
          </main>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glimpse" element={<Glimpse />} />
        <Route path="/staypositive" element={<StayPositive />} />
      </Routes>
    </Router>
  );
}

export default App;
