import React from 'react';
import '../styles/contact.css';
import "../styles/glimpse.css"; 

function Contact () {
    return (
        <div>
            <main>
                <div>
                    <h1 className="pages-title">Contact</h1> 
                </div>

                <div className="contacts-container">
                    <div className="contacts">
                        <a href="https://www.linkedin.com/in/mandyrlui/" target="_blank" rel="noopener noreferrer">
                            <img className="contact-icons" src="/assets/linkedin-icon.png" alt="LinkedIn Icon" /></a>
                            <a className="contacts-name" href="https://www.linkedin.com/in/mandyrlui/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className="contacts">
                        <a href="mailto:mandyrlui@gmail.com">
                            <img className="contact-icons" src="/assets/mail-icon.png" alt="Email Icon" /></a>
                        <a className="contacts-name"  href="mailto:mandyrlui@gmail.com">Email</a>
                    </div>

                    <div className="contacts">
                    <a href="https://github.com/mandylui" target="_blank" rel="noopener noreferrer">
                            <img className="contact-icons" src="/assets/github-icon.png" alt="GitHub Icon" /></a>
                        <a className="contacts-name" href="https://github.com/mandylui" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                

            </main>

            <footer className="contact-footer"></footer>
        </div>
    )
}

export default Contact;