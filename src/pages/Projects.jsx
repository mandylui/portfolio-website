import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Glimpse',
    description:
      'An intuitive album-making web app for capturing and customising memories.',
    details:
      'Glimpse brings the charm of handmade photo albums into a flexible digital workspace. I designed and developed tools for creating albums, editing canvases, adding images and decorative assets, and preserving user changes between pages.',
    image: '/assets/glimpse-home.png',
    imageAlt: 'Glimpse album dashboard',
    tags: ['Web App', 'React', 'Full-Stack'],
    year: '2024',
    route: '/glimpse',
  },
  {
    number: '02',
    title: 'Stay Positive',
    description:
      'A cross-platform wellness experience for affirmations, meditation, and journaling.',
    details:
      'Stay Positive is a mental-health platform created by a nine-person development team. I helped shape the website and iOS experience, including the support workflow, responsive interface, and registration and welcome screens.',
    image: '/assets/sp-figma-website.png',
    imageAlt: 'Stay Positive website designs',
    tags: ['Web + iOS', 'TypeScript', 'Swift'],
    year: '2025',
    route: '/staypositive',
  },
  {
    number: '03',
    title: 'Portfolio Website',
    description:
      'A warm, editorial portfolio showcasing my development work and design approach.',
    details:
      'This portfolio is an evolving design and front-end project built to present my work with clarity and personality. It combines responsive React components, custom interactions, and an editorial visual system inspired by warm natural colors.',
    image: null,
    imageAlt: '',
    tags: ['Portfolio', 'React', 'Responsive'],
    year: '2026',
    route: '/',
  },
];

function ProjectPreview({ project, modal = false }) {
  if (project.image) {
    return (
      <img
        className={modal ? 'project-modal-image' : 'project-card-image'}
        src={project.image}
        alt={project.imageAlt}
      />
    );
  }

  return (
    <div className={modal ? 'portfolio-preview portfolio-preview--modal' : 'portfolio-preview'}>
      <span className="portfolio-preview-circle portfolio-preview-circle--blush" />
      <span className="portfolio-preview-circle portfolio-preview-circle--sage" />
      <span className="portfolio-preview-name">Mandy<br /><em>Lui.</em></span>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1 className="pages-title">Projects.</h1>
        <div className="projects-rule" />
      </section>

      <section className="project-grid" aria-label="Portfolio projects">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.title}
            type="button"
            onClick={() => setActiveProject(project)}
            aria-label={`Open details for ${project.title}`}
          >
            <div className="project-card-media">
              <span className="project-number">{project.number}</span>
              <ProjectPreview project={project} />
            </div>

            <div className="project-card-content">
              <div className="project-card-heading">
                <h2>{project.title}</h2>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>

              <p>{project.description}</p>

              <div className="project-card-meta">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </div>
          </button>
        ))}
      </section>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="project-modal-media">
              <span className="project-number">{activeProject.number}</span>
              <ProjectPreview project={activeProject} modal />
            </div>

            <div className="project-modal-content">
              <p className="project-modal-eyebrow">Selected work · {activeProject.year}</p>
              <h2 id="project-modal-title">{activeProject.title}</h2>
              <p>{activeProject.details}</p>

              <div className="project-tags project-modal-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link className="project-modal-link" to={activeProject.route}>
                {activeProject.route === '/' ? 'Back to home' : 'View full case study'}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default Projects;
