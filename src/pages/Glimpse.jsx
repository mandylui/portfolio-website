// src/pages/Glimpse.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/glimpse.css";

function Glimpse () {

    const glimpseImages = [
        "/assets/glimpse-create-account.png",
        "/assets/glimpse-editing-progress.png",
        "/assets/glimpse-editing.png",
        "/assets/glimpse-home-editing.png",
        "/assets/glimpse-home.png",
        "/assets/glimpse-login.png",
        "/assets/glimpse-name-album.png",
        "/assets/glimpse-template.png",
        "/assets/glimpse-upload-photo.png",
        "/assets/glimpse-welcome.png",
      ];

    return (
        <main>
            <div className="pages-title">Glimpse</div>
            <div className="project-description">
                Glimpse is a personal project born out of my passion for combining creativity with functionality.
                It’s an intuitive album-making web application designed to help users capture and customize their memories effortlessly.
                The platform allows users to organize photos, add decorative elements like stickers and frames, and personalize layouts with ease.
              </div>

              <div className="image-container">
                    <Carousel
                        className="image-gallery"
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        dynamicHeight={false} /* Critical fix: Prevent height recalculations */
                    >
                        {glimpseImages.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`Glimpse Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

            <div className="description-bottom">
                <div className="project-description">more information here</div> 
                <div className="project-description-divider"></div>  
                <div className="project-description">more information here</div>
           </div>
            
            <footer className="projects-footer"></footer>
        </main>
    )
}

export default Glimpse;