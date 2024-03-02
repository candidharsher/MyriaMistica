import React from "react";
import Logo from "./Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    const handleTwitterShare = () => {
        // URL de tu sitio web
        const url = encodeURIComponent(window.location.href);
        // Texto del tweet
        const text = encodeURIComponent("¡Me encanta Myriam Mística! ¡Tenéis que conocerla!");
        // URL completa para abrir Twitter con el tweet predefinido
        const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    
        // Abre Twitter en una nueva ventana con el tweet predefinido
        window.open(twitterUrl, "_blank");
      };
    const redirectToInstagram = () => {
        window.open("https://www.instagram.com/myriamistica","_blank");
      };
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo de Myriam Mística, tarot en Sabadell" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsInstagram onClick={redirectToInstagram}/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-column-1">
          <span onClick={handleTwitterShare}>Comparte en Twitter</span>
          <span>Newsletter</span>
        </div>
        <div className="footer-section-column-2">
          <span>+34 640 87 81 24</span>
          <span>myriamtarot.mistica@gmail.com</span>
        </div>
      </div>
    </div>
  );
  
};

export default Footer;