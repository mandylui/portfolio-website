import React, { useEffect, useState } from 'react';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Glimpse',
    description:
      'A one-stop-shop album-making web app made for capturing and customising memories with ease.',
    details:
      'Glimpse brings the charm of handmade photo albums into a flexible digital workspace. I designed and developed tools for creating albums, editing canvases, adding images and decorative assets, and preserving user changes between pages.',
    image: '/assets/glimpse-home.png',
    imageAlt: 'Glimpse album dashboard',
    galleryImages: [
      {
        src: '/assets/glimpse-home.png',
        alt: 'Glimpse album dashboard',
      },
      {
        src: '/assets/glimpse-template.png',
        alt: 'Glimpse album template selection',
      },
      {
        src: '/assets/glimpse-upload-photo.png',
        alt: 'Glimpse photo upload screen',
      },
      {
        src: '/assets/glimpse-editing.png',
        alt: 'Glimpse album editing canvas',
      },
      {
        src: '/assets/glimpse-home-editing.png',
        alt: 'Glimpse home editing view',
      },
    ],
    tags: ['Web App', 'React', 'Full-Stack'],
    year: '2024',
    role: 'Full-stack developer and product designer',
    focus: 'Album creation flows, canvas editing tools, saved user changes, and responsive UI polish.',
    route: '/glimpse',
  },
  {
    number: '02',
    title: 'Stay Positive',
    description:
      'A cross-platform wellness experience for affirmations, meditation, and journaling.',
    details:
      'Stay Positive is a mental-health platform created by a nine-person development team. I helped shape the website and iOS experience, including the support workflow, responsive interface, and registration and welcome screens.',
    image: '/assets/staypositive-cover.png',
    imageAlt: 'Stay Positive website designs',
    galleryImages: [
      {
        src: '/assets/staypositive-cover.png',
        alt: 'Stay Positive cover designs',
      },
      {
        src: '/assets/sp-figma-website.png',
        alt: 'Stay Positive website Figma designs',
      },
      {
        src: '/assets/sp-figma-ios.png',
        alt: 'Stay Positive iOS Figma designs',
      },
      {
        src: '/assets/sp-help-page.png',
        alt: 'Stay Positive help page',
      },
    ],
    tags: ['Web + iOS', 'TypeScript', 'Swift'],
    year: '2025',
    role: 'Frontend and iOS contributor',
    focus: 'Website interface, support workflow, onboarding screens, and mobile experience consistency.',
    route: '/staypositive',
  },
  {
    title: 'Portfolio Website',
    description:
      'A portfolio showcasing my development work and design approach. Click to read more about my redesign process!',
    details:
      'I originally built my portfolio website in 2024 as a place to showcase my projects and experience, but after I had taken a step back and revisited it after graduating in 2026, I realized it didn’t fully reflect my personality or design style. \n\n\n\n During Jun of 2026, I set out to redesign my entire portfolio experience by reworking the visual hierarchy, refining the layout, and creating a more cohesive design system with consistent spacing, typography, and reusable React components. \n\n\n\n Throughout the process, I balanced aesthetics with performance, continuously iterating on both the UI and code structure to create something that felt more polished, professional, and uniquely mine!',
    image: null,
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/port2024-home.jpeg',
        alt: '2024 portfolio home page',
      },
      {
        src: '/assets/port2024-projs.jpeg',
        alt: '2024 portfolio projects page',
      },
      {
        src: '/assets/port2024-glimpse.jpeg',
        alt: '2024 portfolio Glimpse project page',
      },
      {
        src: '/assets/port2026-home.png',
        alt: '2026 portfolio home page',
      },
      {
        src: '/assets/port2026-projs.png',
        alt: '2026 portfolio projects page',
      },
      {
        src: '/assets/port2026-modal.png',
        alt: '2026 portfolio project modal',
      },
    ],
    tags: ['React', 'Figma', 'Web App', 'Full Stack', 'AI'],
    year: '2026',
    role: 'UI/UX Designer and Full Stack Developer',
    focus: 'Visual identity, interaction design, responsive React components, and editorial presentation.',
    route: '/',
  },
  {
    number: '04',
    title: 'GenLARP @ NCSU',
    description:
      'Explored the use of AI and LARPing at North Carolina State University and how it can be used to enhance eductational experiences for students.',
    details:
      'GENLARP was part of a research initiative focused on exploring how AI and immersive technologies could enhance educational experiences within AR/VR environments.\n\nMy work involved testing and evaluating multiple 2D-to-3D generation pipelines and comparing different 3D modeling tools + workflows to determine the most effective way to transform images into usable 3D assets for Unity-based applications.\n\nI also experimented with Stable Diffusion–based texture generation and application to assist in the creation of more realistic and customizable educational content while contributing to projects and research efforts related to immersive learning experiences.\n\nAs part of the project, I contributed to research efforts that were presented at the IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2025. I helped design and create the research poster in Figma, collaborated on writing sections of the accompanying paper, and supported the communication of our findings on AI-assisted content generation and XR learning experiences.',
    image: '/assets/bigmac-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/bigmac-poster.png',
        alt: 'GenLARP research poster',
      },
      {
        src: '/assets/bigmac-block.png',
        alt: 'GenLARP block generation preview',
      },
      {
        src: '/assets/bigmac-texture-%20generation.mov',
        alt: 'GenLARP texture generation demo',
        type: 'video',
      },
      {
        src: '/assets/bigmac-3dmodel.HEIC',
        alt: 'GenLARP 3D model preview',
      },
      {
        src: '/assets/bigmac-assign.png',
        alt: 'GenLARP assignment preview',
      },
    ],
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2026',
    role: 'Research and prototyping contributor',
    focus: 'Educational interaction design, AI-assisted experiences, and exploratory prototyping.',
    route: '/',
  },
  {
    number: '05',
    title: 'rhymASL',
    description:
      'Assisted in the conversion of a web application that utilizes AI for sign language instruction.',
    details:
      'rhymASL is an accessibility-centered learning project using AI to support sign language instruction. I assisted with translating the existing application experience into a clearer, more usable interface.',
    image: '/assets/rhymASL_UI.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/rhymASL_UI.png',
        alt: 'rhymASL interface preview',
      },
    ],
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2025',
    role: 'Design and development contributor',
    focus: 'Interface conversion, accessibility-minded UX, and AI-supported learning flows.',
    route: '/',
  },
  {
    number: '06',
    title: 'Web/App Design Intern @ GYB',
    description:
      'Designed & created client websites and modals through GoHighLevel, audited & debugged workflows.',
    details:
      'At GYB, I designed and implemented client-facing web pages and modals using GoHighLevel while also auditing automations, debugging workflows, and refining conversion-focused layouts.',
    image: '/assets/gyb-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/gyb-cover.png',
        alt: 'GYB web and app design preview',
      },
    ],
    tags: ['GoHighLevel', 'HTML', 'CSS', 'Business'],
    year: '2025',
    role: 'Web and app design intern',
    focus: 'Client websites, modal design, workflow auditing, debugging, and business-facing UX.',
    route: '/',
  },
  {
    number: '07',
    title: 'Before You Visit: A VR Experience',
    description:
      'An immersive VR experience of life on a farm. Locate, collect, & transport chickens before your family comes to visit.',
    details:
      'Before You Visit is a playful VR experience that places players on a farm with a time-sensitive chicken-gathering objective. The project blends environment design, interaction scripting, and spatial gameplay.',
    image: '/assets/byv-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/byv-cover.png',
        alt: 'Before You Visit VR experience preview',
      },
    ],
    tags: ['Unity', 'C#', 'Blender'],
    year: '2026',
    role: 'VR developer and experience designer',
    focus: 'Unity interaction design, C# gameplay scripting, 3D assets, and immersive scene building.',
    route: '/',
  },
    {
    number: '08',
    title: 'FitCheck',
    description:
      'A proof-of-concept augmented reality application built in Lens Studio for Snap Spectacles. Enables virtual clothing try-on through real-time body region detection and AR garment overlay',
    details:
      'FitCheck is an AR proof of concept for Snap Spectacles that experiments with virtual clothing try-on. The prototype uses body-region awareness to place garment overlays in real time.',
    image: '/assets/fitcheck-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/fitcheck-cover.png',
        alt: 'FitCheck AR prototype preview',
      },
    ],
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2026',
    role: 'AR prototyper',
    focus: 'Lens Studio prototyping, body-region detection concepts, and wearable AR interaction.',
    route: '/',
  },
  {
    number: '09',
    title: 'Par Vous Même',
    description:
      'A hands-free cooking expereince and interactive recipe guide that allows for a seamless & engaging cooking experience. ',
    details:
      'Par Vous Même imagines a more fluid cooking experience through hands-free recipe guidance. The concept focuses on reducing friction while users cook, follow steps, and stay engaged in the process.',
    image: '/assets/pvm-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/pvm-cover.png',
        alt: 'Par Vous Même project preview',
      },
    ],
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2025',
    role: 'Interaction designer and prototyper',
    focus: 'Hands-free interaction, recipe guidance, and AR-assisted task flow design.',
    route: '/',
  },
  {
    number: '10',
    title: 'Molez',
    description:
      'A modern take of the classic Whack-a-Mole game.',
    details:
      'Molez is a modern mobile game concept inspired by Whack-a-Mole. The project focused on creating a simple, playful interaction loop with clean visuals and approachable gameplay.',
    image: '/assets/molez-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/molez-cover.png',
        alt: 'Molez game preview',
      },
    ],
    tags: ['Swift', 'Canva'],
    year: '2024',
    role: 'Mobile app developer',
    focus: 'Swift development, game interaction patterns, and lightweight visual design.',
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
            {activeImage.type === 'video' ? (
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

            <div className="project-modal-content">
              <div className="project-modal-top">
                <div className="project-modal-intro">
                  <p className="project-modal-eyebrow">
                    {activeProject.number} · {activeProject.year}
                  </p>
                  <h2 id="project-modal-title">{activeProject.title}</h2>
                </div>

                <ProjectGallery project={activeProject} />
              </div>

              <div className="project-modal-details">
                <div className="project-modal-sections">
                  <section className="project-detail-section project-detail-section--overview">
                    <h3>Overview</h3>
                    <ProjectParagraphs text={activeProject.details || activeProject.description} />
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
