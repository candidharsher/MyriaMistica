import React from "react";
import { BsHouse } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { Link } from "react-scroll";

const FixedButtons = () => {
  return (
    <div className="fixed-buttons-container">
      <button className="fixed-button" href="https://wa.me/34640878124"><BsWhatsapp/></button>
      <Link to="home" smooth={true} duration={500}><button className="fixed-button"><BsHouse/></button></Link>
    </div>
  );
}

export default FixedButtons;