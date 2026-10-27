import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ProjectGallery, ProjectParagraphs } from './ProjectDetails';
import '../styles/showcase-modal.css';

export default function ShowcaseModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="showcase-dialog"
      aria-labelledby="showcase-dialog-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="showcase-dialog-bar">
        <span>Selected work <span aria-hidden="true">/</span> {project.year}</span>
        <button type="button" onClick={onClose} aria-label="Close project details" autoFocus><span aria-hidden="true">&times;</span></button>
      </div>
      <div className="showcase-dialog-body">
        <header className="showcase-dialog-heading">
          <p className="home-eyebrow">{project.date || project.year}</p>
          <h2 id="showcase-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
        </header>
        <ProjectGallery project={project} />
        <div className="showcase-dialog-details">
          <section className="showcase-dialog-overview" aria-labelledby="showcase-overview-title">
            <h3 id="showcase-overview-title">The project</h3>
            {project.detailSections ? project.detailSections.map((section) => (
              <section key={section.title}>
                <h4>{section.title}</h4>
                <p>{section.subtitle}</p>
                <ProjectParagraphs text={section.text} />
              </section>
            )) : <ProjectParagraphs text={project.details || project.description} />}
          </section>
          <aside className="showcase-dialog-facts" aria-label="Project information">
            <section><h3>My role</h3><p>{project.role || 'Project contributor'}</p></section>
            {project.focus && <section><h3>Focus</h3><p>{project.focus}</p></section>}
            <section><h3>Tools & disciplines</h3><ul className="showcase-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></section>
          </aside>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
