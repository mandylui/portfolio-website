import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/projects.css';

import projects from '../data/projects';
import { ProjectPreview, ProjectGallery, ProjectParagraphs } from '../components/ProjectDetails';

function Projects() {
  const [searchParams] = useSearchParams();
  const [activeProject, setActiveProject] = useState(() => (
    projects.find((project) => project.title === searchParams.get('project')) || null
  ));
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

            <div className="project-modal-content">
              <div className="project-modal-top">
                <div className="project-modal-intro">
                  <p className="project-modal-eyebrow">
                    {activeProject.number} · {activeProject.date || activeProject.year}
                  </p>
                  <h2 id="project-modal-title">{activeProject.title}</h2>
                </div>

                <ProjectGallery project={activeProject} />
              </div>

              <div className="project-modal-details">
                <div className="project-modal-sections">
                  <section className="project-detail-section project-detail-section--overview">
                    <h3>Overview</h3>
                    {activeProject.detailSections ? activeProject.detailSections.map((section) => (
                      <section className="project-overview-section" key={section.title}>
                        <h4>{section.title}</h4>
                        <p>{section.subtitle}</p>
                        <ProjectParagraphs text={section.text} />
                      </section>
                    )) : (
                      <ProjectParagraphs text={activeProject.details || activeProject.description} />
                    )}
                  </section>

                  <section className="project-detail-section">
                    <h3>My role</h3>
                    <p>{activeProject.role || 'Project contributor'}</p>
                  </section>

                  <section className="project-detail-section">
                    <h3>Tags</h3>
                    <div className="project-tags project-modal-tags">
                      {activeProject.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default Projects;
