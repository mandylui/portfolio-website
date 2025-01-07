// src/pages/Projects.jsx
import React from 'react';
import '../styles/projects.css';
import Gallery from "react-grid-gallery";

function Projects() {


      return (
        <div className="projects-container">
          <main>
            <h1 className="pages-title">Projects</h1>
    
            {/* Glimpse Project */}
            <div className="project">
              <div className="project-title">Glimpse</div>
              <div className="division-line">-------------------</div>
              <div className="project-description">
                Glimpse is a personal project born out of my passion for combining creativity with functionality.<br />
                It’s an intuitive album-making web application designed to help users capture and customize their memories effortlessly.<br />
                The platform allows users to organize photos, add decorative elements like stickers and frames, and personalize layouts with ease.
              </div>
              <div className="images">
              </div>
            </div>
    
            {/* Stay Positive Project */}
            <div className="project">
              <div className="project-title">Stay Positive</div>
              <div className="division-line">----------------------------</div>
              <div className="project-description">
                Stay Positive is a motivational platform designed to spread optimism and positivity.
              </div>
              <div className="images">

              </div>
            </div>
    
            {/* Portfolio Website */}
            <div className="project">
              <div className="project-title">Portfolio Website</div>
              <div className="division-line">-----------------------------------</div>
              <div className="project-description">
                This portfolio website showcases my work and achievements as a front-end developer.
              </div>
            </div>
          </main>
        </div>
        
      );
    }
    
    export default Projects;