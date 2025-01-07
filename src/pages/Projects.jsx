// src/pages/Projects.jsx
import React from 'react';
import '../styles/projects.css';

function Projects() {
  return (
    <main>
      <div>
        <h1 className="pages-title">Projects</h1>

        <div className="project">
          <div className="project-title">Glimpse</div>
          <div className="division-line">-------------------</div>
          <div className="project-description">
            Glimpse is a personal project born out of my passion for combining creativity with functionality.<br></br>
            It’s an intuitive album-making web application designed to help users capture and customize their memories effortlessly. Inspired<br></br>
            by my love for digital scrap booking and storytelling, Glimpse addresses the challenge of creating visually<br></br>
            appealing, shareable albums without the steep learning curve of professional design tools.
            <br></br><br></br>
            The platform allows users to organize photos, add decorative elements like stickers and frames, and personalize<br></br>
            layouts with ease. By simplifying the design process, Glimpse empowers anyone to preserve and share their special<br></br>
            moments in a fun, creative, and meaningful way.
          </div>
          <div className="images">[insert picture gallery here]</div>
        </div>

        <div className="project">
          <div className="project-title">Stay Positive</div>
          <div className="division-line">----------------------------</div>
          <div className="project-description">
            descrption here
          </div>
          <div className="images">[insert picture gallery here]</div>
        </div>

        <div className="project">
          <div className="project-title">Portfolio Website</div>
          <div className="division-line">-----------------------------------</div>
          <div className="project-description">
            descrption here
          </div>
        </div>

      </div>
    </main>
  );
}

export default Projects;