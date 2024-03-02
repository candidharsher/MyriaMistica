import React from 'react'
import AboutBackground from "./Assets/about-background-1.png";
import AboutBackgroundImage from "./Assets/about-background-image-1.png";
export const About = () => {
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/myriamistica","_blank");
  };
    return (
      
        <div className="about-section-container">
          
          <div className="about-background-image-container">
            <img src={AboutBackground} alt="Nudo de bruja, tarot, energías, piedras preciosas, wicca" />
          </div>
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Hechizos y rituales en Sabadell, wicca en Sabadell" />
          </div>
          <div className="about-section-text-container">
            <h1 className="primary-heading">
            Descubre una experiencia holística de bienestar
            </h1>
            <p className="primary-text">
            Desde consultas reveladoras de Tarot, donde encontrarás guía y claridad para tus preguntas más profundas, hasta sesiones de reordenamiento energético para liberar bloqueos y restaurar el flujo vital en tu ser.
            </p>
            <p className="primary-text">
            Sumérgete en el mundo del Tarot evolutivo, una práctica que te invita a explorar tu crecimiento personal y espiritual de manera única. Confía en Myriam Mística para guiarte en tu camino hacia el equilibrio y la transformación interior.
            </p>
            <div className="about-buttons-container">
              <button className="secondary-button" onClick={redirectToInstagram}>Saber más</button>
            </div>
          </div>
        </div>
      );
};

export default About;