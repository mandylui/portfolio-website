// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-simple">
        <p className="about-eyebrow">A little bit</p>
        <h1 className="pages-title about-title">About Me</h1>

        <article className="about-description-card">
          <p>
            Hi! I'm Mandy, a developer who enjoys turning ideas into intuitive, 
            interactive experiences. Whether I'm designing interfaces in Figma, building web applications with 
            React, creating VR games in Unity, or experimenting with AI and AR, 
            I love finding the balance between thoughtful design and clean, maintainable code.
          </p>
          <p>
            I'm especially drawn to projects where technology can make someone's life a little easier, more engaging, or more accessible. 
            I enjoy taking products from an initial concept all the way to implementation, 
            continuously iterating on both the user experience and the technical architecture to create solutions that people genuinely enjoy using.
          </p>
          <p>
            In my spare time I enjoy going on walks & runs, trying the newest milk tea store (I love Molly Tea), and doing arts & crafts!
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
