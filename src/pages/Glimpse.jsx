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
                <strong>What is Glimpse?:</strong>
                <br></br>
                Glimpse is a web-based application I created during the summer of 2024 aimed to enhance the process of custom [digital] photo albums
                through intuitive compiling, editing, and personalization features integrated within the application.

                <br></br><br></br>
                <strong>Insipration Behind Glimpse:</strong>
                <br></br>
                Creating Glimpse orinated from my desire to combine features from simple photo album editors and creative graphic design apps like Canva or Picsart.
                As someone who lives in a picture-crazed household, there are often times where my family and I enjoy putting together physcical photo albums to look back on.
                As many activities have transitioned to digital platforms, my family and I embraced the trend of creating photo albums online.
                However, the experience lacked the charm and joy of crafting physical photo albums by hand.
                <br></br>
                Developing Glimpse was the gateway that allowed me to bridge this gap by providing a user-friendly, customizable platform for anyone to create the creative and sentimental keepsakes I know and love.
                <br></br><br></br>
                <strong>Take a look at Glimpse!:</strong>
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
                <div className="project-description-bottom">
                    <strong>The Process:</strong>
                    <br></br>
                    1. UX Design
                    <br></br><br></br><br></br><br></br><br></br>2. Code<br></br> 3.Test
                    
                </div> 
                <div className="project-description-divider"></div>  
                <div className="project-description-bottom">
                    <br></br>
                    <strong>Prototyping</strong> <br></br>
                    - Prototyping was honestly the longest process of creating Glimpse. With my research in finding which editing features should be included and how to make it as intutive as possible, on top of
                      creating the design of the website layout through Figma was both time-consuming and rewarding. While it did take a long time, I beleive it's imperative in order to create an application that 
                      maximizes its ability to be functional, visually appealing, and easy to navigate.
                    <br></br><br></br>
                    View my Figma file here: https://www.figma.com/design/agKrdohr555Rzduuwi3toG/glimpse?node-id=46-410&t=vxkDoyjUAJUflU9H-1
                </div>
           </div>
            
            <footer className="projects-footer"></footer>
        </main>
    )
}

export default Glimpse;