import React from "react";
import Pendulo from "./Assets/pendulo.png";
import Energia from "./Assets/desbloqueo.png";
import Consultas from "./Assets/consultas.png";

const Work = () => {
  const workInfoData = [
    {
      image: Pendulo,
      title: "Péndulo",
      text: "Tu guía para despejar dudas y encontrar claridad en la respuesta que hay en tu interior",
    },
    {
      image: Energia,
      title: "Desbloqueo",
      text: "Experimenta la liberación de bloqueos energéticos para recuperar tu equilibrio y bienestar",
    },
    {
      image: Consultas,
      title: "Consultas",
      text: "Explora las respuestas que el tarot tiene para ti, propuestas reveladoras para iluminar tu camino",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">¿Cómo funciona?</h1>
        <p className="primary-text">
        Una atención personalizada y la energía del momento se fusionan en consultas presenciales con cita previa, sólo así se puede encontrar un ambiente propicio para una experiencia transformadora
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;