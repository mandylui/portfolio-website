// src/pages/About.jsx
import React from 'react';
import "../styles/about.css";


function About() {
  return (

    <div>
      <main>
        <h1 className="pages-title">About Me</h1>
          
        <div className="about-heading">
          <div className="about-name">Mandy Lui</div>
          <div className="job-title">User-Focused Front-End Developer</div>
          <div className="about-divider"></div>
        </div>

        <div className="about-description">description here</div>
        
    </main>

    <footer className="footer"></footer>
    </div>
    
  );
}

export default About;