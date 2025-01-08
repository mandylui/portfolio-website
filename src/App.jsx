// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Glimpse from './pages/Glimpse';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <div className="title">Mandy Lui</div>
            <div className="description">
              Hello, my name is Mandy! I’m a front-end developer based <br></br>in San Diego and currently attending the University of Rochester pursuing a Bachelor’s degree in computer science and a minor in business.
            </div>
          </main>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glimpse" element={<Glimpse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;