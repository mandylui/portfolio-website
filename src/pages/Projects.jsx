// src/pages/Projects.jsx
import React from 'react';
import '../styles/projects.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Glimpse from "./Glimpse";

function Projects() {
      return (
        <main>
          <div className="projects-container">
              <h1 className="pages-title">Projects</h1>
              <div className="title-subheading">Click on a project to learn more</div>
      
              {/* Glimpse Project */}
              
              <div className="project">
              <div className="divider"></div>

                <Link className="project-title" to="/glimpse">Glimpse</Link>
                <div className="project-subheading">Dynamic album-editing application combining aspects of creative freedom and traditional drag and drop album-editing services</div>
              </div>
      
              {/* Stay Positive Project */}
              <div className="project">
                <div className="divider"></div>
                <div className="project-title">Stay Positive</div>
                <div className="project-subheading">
                  A mindfulness and meditation platform designed to spread optimism and positivity.
                </div>
                <div className="images">

                </div>
              </div>
      
              {/* Portfolio Website */}
              <div className="project">
              <div className="divider"></div>
                <div className="project-title">Portfolio Website</div>
                <div className="project-subheading">
                  This website which showcases my work and achievements as a front-end developer.
                </div>
              </div>
          </div>

          <footer className="footer"></footer>

        </main>
      );
    }
    
    export default Projects;