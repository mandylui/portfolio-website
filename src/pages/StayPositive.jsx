// src/pages/StayPositive.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/staypositive.css";

function Glimpse () {

    const staypositiveImages = [
        "/assets/sp-figma-ios.png",
        "/assets/sp-figma-website.png",
        "/assets/sp-help-page.png",
      ];

    return (
        <main>
            <div className="pages-title">Stay Positive</div>
            <div className="project-description">
                <strong>What is Stay Positive?:</strong><br></br>
                Stay Positive is a startup company made of 9 computer scientists who've designed a mental health platform to promote emotional well-being. Our goal is to provide an integrated experience of affirmations, meditation, and journaling into a singular app.
                My role in Stay Positive has been to spearhead the website development process and helping to design the layout of our website and iOS app.
                More specifically, I've developed the websites' email/help page (TypeScript and CSS), its functions, and am currently aiding in the iOS registration and welcome page (Swift).
                <br></br><br></br>
                <strong>Inspiration behind Stay Positive:</strong><br></br>
                The concept of Stay Positive came from my team and I's personal drive to support mental health in this fast-paced, stressful world.
                We found that many of todays offered mental health tools are fragmented across multiple platforms, which makes it challenging for users to form consistent habits.
                At Stay Positive we aim to consolidate these essential practices into one platform!
                <br></br><br></br>
                <strong>Check out my work at Stay Positive!:</strong>
              </div>

              <div className="image-container">
                    <Carousel
                        className="image-gallery"
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        dynamicHeight={false} 
                    >
                        {staypositiveImages.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`Stay Positive ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

            <div className="description-bottom">
                <div className="project-description-bottom"><strong>Key Implementations & Features</strong></div> 
                <div className="sp-project-description-divider"></div>  
                <div className="project-description-bottom">
                    <strong className="glimpse-subtitle-bottom"> Integrated Mental Health Tools</strong><br></br>
                    Our app combines daily affirmations, guided meditations, and journaling prompts to create a holistic self-care routine.
                    Users can set reminders to establish consistent habits.
                    <br></br><br></br>
                    <strong className="glimpse-subtitle-bottom">User-Friendly Interface</strong><br></br>
                    Clean, accessible design in both the app and website to ensure intuitive usage.
                    High-fidelity prototypes created in Figma ensured alignment between design and development goals.
                    <br></br><br></br>
                    <strong className="glimpse-subtitle-bottom">Personalization Options</strong><br></br>
                    Affirmations and journaling prompts adapt to user preferences, providing a customized experience tailored to individual needs.
                    <br></br><br></br>
                    <strong className="glimpse-subtitle-bottom">Seamless Cross-Platform Experience</strong><br></br>
                    Designed and implemented responsive features so users can transition between the iOS app and website without losing progress.
                    <br></br><br></br>
                    <strong className="glimpse-subtitle-bottom">Feedback-Driven Development</strong><br></br>
                    Incorporated user feedback to refine the interface and improve overall satisfaction, ensuring the platform remains intuitive and engaging.
                    <br></br><br></br>

                    Check out our GitHub!: <a className="projects-links" href="https://github.com/Stay-Positive-Organization" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
           </div>
            
            <footer className="projects-footer"></footer>
        </main>
    )
}

export default Glimpse;