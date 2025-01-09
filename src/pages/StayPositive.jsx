// src/pages/StayPositive.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/staypositive.css";

function Glimpse () {

    const staypositiveImages = [
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
                description here
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
                <div className="project-description-bottom">more information here</div> 
                <div className="project-description-divider"></div>  
                <div className="project-description-bottom">more information here</div>
           </div>
            
            <footer className="projects-footer"></footer>
        </main>
    )
}

export default Glimpse;