import { useEffect, useState } from 'react';

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

function ProjectGallery({ project }) {
  const galleryImages = project.galleryImages?.length
    ? project.galleryImages
    : project.image
      ? [{ src: project.image, alt: project.imageAlt || `${project.title} preview` }]
      : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = galleryImages[activeImageIndex];
  const hasMultipleImages = galleryImages.length > 1;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.title]);

  const goToPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    ));
  };

  const goToNextImage = () => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    ));
  };

  return (
    <aside className="project-modal-gallery" aria-label={`${project.title} image gallery`}>
      <div className="project-gallery-heading">
        <span>Gallery</span>
        <span>
          {activeImageIndex + 1} / {galleryImages.length || 1}
        </span>
      </div>

      {activeImage ? (
        <div className="project-carousel">
          <button
            className="project-carousel-arrow project-carousel-arrow--prev"
            type="button"
            onClick={goToPreviousImage}
            disabled={!hasMultipleImages}
            aria-label="Show previous project image"
          >
            ‹
          </button>

          <figure className="project-gallery-item">
            {activeImage.type === 'youtube' || activeImage.type === 'iframe' ? (
              <iframe
                src={activeImage.src}
                title={activeImage.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : activeImage.type === 'video' ? (
              <video src={activeImage.src} aria-label={activeImage.alt} controls muted playsInline />
            ) : (
              <img src={activeImage.src} alt={activeImage.alt} />
            )}
          </figure>

          <button
            className="project-carousel-arrow project-carousel-arrow--next"
            type="button"
            onClick={goToNextImage}
            disabled={!hasMultipleImages}
            aria-label="Show next project image"
          >
            ›
          </button>
        </div>
      ) : (
        <figure className="project-gallery-item project-gallery-item--placeholder">
          <ProjectPreview project={project} modal />
        </figure>
      )}
    </aside>
  );
}

function ProjectParagraphs({ text }) {
  return text
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ));
}


export { ProjectPreview, ProjectGallery, ProjectParagraphs };
