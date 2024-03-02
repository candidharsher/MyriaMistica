import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const setMessageSent = false;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_q3e2p3c",
      "template_hmc3n7n",
      form.current,
      "F8PL3NwcLWN_H_cOl"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("Mensaje enviado");
        setMessageSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <div className="contact-page-wrapper">
      <h1>Coméntanos lo que desees...&nbsp;&nbsp;&nbsp;</h1> <br/> {/* Si el mensaje se ha enviado correctamente, muestra el mensaje de éxito */}
      {setMessageSent ? (
        <p className="success-message">¡Tu mensaje ha sido enviado con éxito!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>
            Tu nombre <br/>
            <input type="text" name="user_name" />
          </label>
          <label>
            Tu e-mail <br/>
            <input type="email" name="user_email" />
          </label>
          <label>
            Tu mensaje <br/>
            <textarea name="message" />
          </label>
          <input type="submit" value="¡Enviar!" className="secondary-button"/>
        </form>
      )}
    </div>
  );
};

export default Contact;
