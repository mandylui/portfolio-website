import React from 'react';
import '../styles/contact.css';

const contactLinks = [
  {
    label: 'LinkedIn',
    detail: 'Connect with me professionally',
    href: 'https://www.linkedin.com/in/mandyrlui/',
    icon: '/assets/linkedin-icon.png',
    external: true,
  },
  {
    label: 'Email',
    detail: 'mroselui@gmail.com',
    href: 'mailto:mroselui@gmail.com',
    icon: '/assets/mail-icon.png',
  },
  {
    label: 'GitHub',
    detail: 'View my code and projects',
    href: 'https://github.com/mandylui',
    icon: '/assets/github-icon.png',
    external: true,
  },
];

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-simple">
        <p className="contact-eyebrow">Let’s connect</p>
        <h1 className="pages-title contact-title">Contact</h1>

        <section className="contact-card-grid" aria-label="Contact links">
          {contactLinks.map((contact) => (
            <a
              className="contact-card"
              href={contact.href}
              key={contact.label}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon-wrap">
                <img src={contact.icon} alt="" aria-hidden="true" />
              </span>
              <span>
                <span className="contact-card-title">{contact.label}</span>
                <span className="contact-card-detail">{contact.detail}</span>
              </span>
              <span className="contact-card-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Contact;
