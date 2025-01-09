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
            <div className="project-description"> Mental health is ____
                
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
                <div className="project-description-bottom">Click here to check out our GitHub!</div>
           </div>
            
            <footer className="projects-footer"></footer>
        </main>
    )
}

export default Glimpse;