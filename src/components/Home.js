import React from 'react';
import Navbar from './Navbar';
import  bannerbackground  from "./Assets/home-banner-2.png";
import  BannerImage  from "./Assets/home-banner-image-1.png";
import { Link } from "react-scroll";


export const Home = () => {
  return (
    <div className="HomeContainer">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={bannerbackground} alt="Tirada de cartas tarot"/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Tarotista presencial, espiritualidad y videncia
                </h1>
                <p className="primary-text">
                    Sesiones de Tarot presenciales en Sabadell
                </p>
                
                <Link to="contact" smooth={true} duration={500}><button className="secondary-button">Pide tu cita </button></Link><fiArrowRight/>
                
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="Sesiones de tarot en Sabadell"/> 
            </div>
        </div>
        </div>
  )
}
