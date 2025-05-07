import React, { useState } from 'react';
import '../styles/contactSection.css';
import { Fade, Zoom } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler para actualizar los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Enviar el formulario con EmailJS
    emailjs
      .sendForm('service_5cuq12i', 'template_eyow658', e.target, 'qpcnoavcgmLyvDDLO')
      .then(
        (result) => {
          setSuccessMessage('¡Mensaje enviado con éxito!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <Fade direction="down">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-subtitle">No dudes en contactarme si me necesitas.</p>
      </Fade>
      <Zoom>
        <div className="contact-container">
          <div className="contact-info-box">
            <h3>Encuéntrame ↩</h3>
            <p><i className="fa fa-envelope"></i> Email: pedrodanielgf2@gmail.com</p>
            <p><i className="fa fa-phone"></i> Teléfono: +34 727 71 02 81</p>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Escriba aquí su mensaje..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="send-btn" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar'} <i className="fa fa-paper-plane"></i>
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </Zoom>
    </section>
  );
};

export default ContactSection;
