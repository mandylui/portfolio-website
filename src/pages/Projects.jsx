import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    title: 'Glimpse',
    description:
      'A one-stop-shop album-making web app made for capturing and customising memories with ease.',
    details:
      'Glimpse brings the charm of handmade photo albums into a flexible digital workspace. I designed and developed tools for creating albums, editing canvases, adding images and decorative assets, and preserving user changes between pages.',
    image: '/assets/glimpse-home.png',
    imageAlt: 'Glimpse album dashboard',
    tags: ['Web App', 'React', 'Full-Stack'],
    year: '2024',
    route: '/glimpse',
  },
  {
    title: 'Stay Positive',
    description:
      'A cross-platform wellness experience for affirmations, meditation, and journaling.',
    details:
      'Stay Positive is a mental-health platform created by a nine-person development team. I helped shape the website and iOS experience, including the support workflow, responsive interface, and registration and welcome screens.',
    image: '/assets/staypositive-cover.png',
    imageAlt: 'Stay Positive website designs',
    tags: ['Web + iOS', 'TypeScript', 'Swift'],
    year: '2025',
    route: '/staypositive',
  },
  {
    title: 'Portfolio Website',
    description:
      'A portfolio showcasing my development work and design approach. Click to read more about my redesign process!',
    details:
      'This portfolio is an evolving design and front-end project built to present my work with clarity and personality. It combines responsive React components, custom interactions, and an editorial visual system inspired by warm natural colors.',
    image: null,
    imageAlt: '',
    tags: ['React', 'Figma', 'Web App', 'Full Stack', 'AI'],
    year: '2026',
    route: '/',
  },
  {
    title: 'GenLARP @ NCSU',
    description:
      'Explored the use of AI and LARPing at North Carolina State University and how it can be used to enhance eductational experiences for students.',
    details:
      '',
    image: '/assets/bigmac-cover.png',
    imageAlt: '',
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2026',
    route: '/',
  },
  {
    title: 'rhymASL',
    description:
      'Assisted in the conversion of a web application that utilizes AI for sign language instruction.',
    details:
      '',
    image: '/assets/rhymASL_UI.png',
    imageAlt: '',
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2025',
    route: '/',
  },
  {
    title: 'Web/App Design Intern @ GYB',
    description:
      'Designed & created client websites and modals through GoHighLevel, audited & debugged workflows.',
    details:
      '',
    image: '/assets/gyb-cover.png',
    imageAlt: '',
    tags: ['GoHighLevel', 'HTML', 'CSS', 'Business'],
    year: '2025',
    route: '/',
  },
  {
    title: 'Before You Visit: A VR Experience',
    description:
      'An immersive VR experience of life on a farm. Locate, collect, & transport chickens before your family comes to visit.',
    details:
      '',
    image: '/assets/byv-cover.png',
    imageAlt: '',
    tags: ['Unity', 'C#', 'Blender'],
    year: '2026',
    route: '/',
  },
    {
    title: 'FitCheck',
    description:
      'A proof-of-concept augmented reality application built in Lens Studio for Snap Spectacles. Enables virtual clothing try-on through real-time body region detection and AR garment overlay',
    details:
      '',
    image: '/assets/fitcheck-cover.png',
    imageAlt: '',
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2026',
    route: '/',
  },
  {
    number: '09',
    title: 'Par Vous Même',
    description:
      'A hands-free cooking expereince and interactive recipe guide that allows for a seamless & engaging cooking experience. ',
    details:
      '',
    image: '/assets/pvm-cover.png',
    imageAlt: '',
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2025',
    route: '/',
  },
  {
    number: '10',
    title: 'Molez',
    description:
      'A modern take of the classic Whack-a-Mole game.',
    details:
      '',
    image: '/assets/molez-cover.png',
    imageAlt: '',
    tags: ['Swift', 'Canva'],
    year: '2024',
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
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedProjects = [...projects].sort((a, b) => (
    sortOrder === 'newest'
      ? Number(b.year) - Number(a.year)
      : Number(a.year) - Number(b.year)
  ));

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
        <h1 className="pages-title">Projects</h1>
        <div className="projects-rule" />
      </section>

      <div className="project-sort" aria-label="Sort projects by year">
        <span className="project-sort-label">Sort by</span>
        <div className="project-sort-options">
          <button
            className={`project-sort-button ${sortOrder === 'newest' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setSortOrder('newest')}
            aria-pressed={sortOrder === 'newest'}
          >
            Newest
          </button>
          <button
            className={`project-sort-button ${sortOrder === 'oldest' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setSortOrder('oldest')}
            aria-pressed={sortOrder === 'oldest'}
          >
            Oldest
          </button>
        </div>
      </div>

      <section className="project-grid" aria-label="Portfolio projects">
        {sortedProjects.map((project) => (
          <button
            className="project-card"
            key={project.title}
            type="button"
            onClick={() => setActiveProject(project)}
            aria-label={`Open details for ${project.title}`}
          >
            <div className="project-card-media">
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
