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

        <div className="about-description">
          Hi! I’m Mandy Lui, a junior at the University of Rochester pursuing a Bachelor's in Computer Science with a concentration in Human-Computer Interaction and a Business minor. I’m passionate about creating user-friendly designs and developing seamless front-end experiences that combine functionality with aesthetics.
         <br></br><br></br>
          I’ve worked on projects like Glimpse (a customizable album-making website), and Stay Positive (a mental health platform integrating affirmations, meditation, and journaling), which have allowed me to
          solve real-world problems through research and thoughtful design & development processes.
          <br></br><br></br>
          Outside of coding, I enjoy spending time with family and friends, hiking, doing crafts, and playing guitar!
          <br></br><br></br>
          Feel free to reach out through any of my contacts provided on this website :)
        </div>
        
    </main>

    <footer className="footer"></footer>
    </div>
    
  );
}

export default About;