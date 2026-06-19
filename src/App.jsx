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
import StayPositive from './pages/StayPositive';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <main>
              <div className="home-main-container">                
                <div className="home-sub-container">
                  <div className="title">Mandy <i><br></br>Lui</i></div>
                  <div className="home-divider">
                    <b>___________________</b>
                  </div>
                  <div className="description">
                    Hello, my name is Mandy! I’m a front-end developer based <br></br>in San Diego.
                  </div>
                  </div>
              </div>
            </main>
            
          </div>
          
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