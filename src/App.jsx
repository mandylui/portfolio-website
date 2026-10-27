// src/App.jsx
import './App.css';
import { useEffect, useRef, useState } from 'react';
import projects from './data/projects';
import ShowcaseModal from './components/ShowcaseModal';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Glimpse from './pages/Glimpse';
import StayPositive from './pages/StayPositive';

const featuredProjects = [
  {
    title: 'Glimpse', category: 'Full-stack development',
    description: 'A creative home for your memories. Design personalized photo albums with an interactive canvas, custom layouts, and saved collections.',
    image: '/assets/glimpse-home.png', alt: 'Glimpse photo album dashboard',
    tags: ['React', 'Flask', 'Product design'], to: '/glimpse', tone: 'sage',
  },
  {
    title: 'Grow Your Business', category: 'Client websites & automation',
    projectTitle: 'Web/App Design Intern @ GYB',
    description: 'Digital tools built for real businesses. Responsive client websites, interactive calculators, and workflow automations developed during my internship at GYB.',
    image: '/assets/gyb-cover.png', alt: 'Grow Your Business client website preview',
    tags: ['GoHighLevel', 'JavaScript', 'HTML / CSS'], tone: 'blush',
  },
  {
    title: 'GenLARP', category: 'AI & immersive research',
    description: 'Exploring new ways to learn. AI-assisted 3D assets and textures for immersive educational experiences at NC State.',
    image: '/assets/bigmac-cover.png', alt: 'GenLARP immersive learning research preview',
    tags: ['AI', 'Unity', 'Research'], to: '/projects?project=GenLARP%20%40%20NCSU', tone: 'sand',
  },
];

function Home() {
  const pageRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.reveal = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const elements = page.querySelectorAll('[data-reveal]');
    elements.forEach((element) => {
      element.dataset.reveal = 'pending';
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => { element.dataset.reveal = 'visible'; });
    };
  }, []);

  return (
    <main className="home-page" ref={pageRef}>
      <div className="home-ambient" aria-hidden="true" />
      <section className="home-main-container" aria-labelledby="home-title">
        <div className="home-sub-container">
          <p className="home-eyebrow">Front-End Developer <span aria-hidden="true">&middot;</span> San Diego</p>
          <h1 className="title" id="home-title"><span>Mandy</span><em>Lui.</em></h1>
          <div className="home-actions">
            <Link className="projects-button" to="/projects">Explore my work <span className="home-button-arrow" aria-hidden="true">&rarr;</span></Link>
            <Link className="about-link" to="/about">About Me</Link>
          </div>
        </div>
        <figure className="botanical-art">
          <span className="botanical-blob botanical-blob--blush" aria-hidden="true" />
          <img className="home-profile-img" src="/assets/profile-img.png" alt="Mandy smiling by the ocean at sunset" />
        </figure>

      </section>
      <section className="home-showcase" id="selected-work" aria-labelledby="showcase-title">
        <div className="showcase-heading" data-reveal="visible">
          <div>
            <p className="home-eyebrow">From ideas to experiences</p>
            <h2 id="showcase-title" tabIndex={-1}><em>Project Showcase</em></h2>
          </div>
          <Link className="showcase-all" to="/projects">All projects <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <div className="showcase-grid">
          {featuredProjects.map((project, index) => (
            <div className="showcase-reveal" data-reveal="visible" style={{ '--reveal-delay': `${index * 100}ms` }} key={project.title}>
              <button className={`showcase-card showcase-card--${project.tone}`} type="button" aria-haspopup="dialog" onClick={() => setActiveProject(projects.find((item) => item.title === (project.projectTitle || (project.title === 'GenLARP' ? 'GenLARP @ NCSU' : project.title))))}>
                <div className="showcase-media">
                  <span className="showcase-number" aria-hidden="true">0{index + 1} / 03</span>
                  <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                </div>
                <div className="showcase-content">
                  <p className="showcase-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="showcase-description">{project.description}</p>
                  <ul className="showcase-tags" aria-label="Technologies and disciplines">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <span className="showcase-action">Explore project <span aria-hidden="true">↗</span></span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
      {activeProject && <ShowcaseModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glimpse" element={<Glimpse />} />
        <Route path="/staypositive" element={<StayPositive />} />
      </Routes>
    </Router>
  );
}

export default App;
