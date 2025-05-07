import React from 'react';
import '../styles/projectsSection.css'
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaAws, FaDocker, FaPhp, FaLaravel, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiSpring, SiVaadin } from 'react-icons/si';


const ProjectsSection = () => {
  return (
    <section id="projects">
      <Fade direction="down">
        <h2 className="section-title">Mis proyectos</h2>
      </Fade>
      <Zoom>
        <div className="project-container">

          <div className="project-box">
            <img src='/img/inicio.webp' alt="Wallamotop" className="project-image" />
            <div className="project-text">
              <h3>Wallamotop</h3>
              <label>
                Plataforma de subastas, similar a Wallapop, para vender motocicletas, pero la venta es en formato de puja, y el
                comprador final es quien haya hecho la oferta más alta.
              </label>
              <a href="https://github.com/PDanielFG/tfg-wallamotop" target="_blank" rel="noopener noreferrer" className="project-button">
                Ver en GitHub
              </a>
              <div className="tech-icons">
                <FaLaravel className="tech-icon laravel" title="Laravel" />
                <FaDocker className="tech-icon docker" title="Docker" />
                <FaAws className="tech-icon aws" title="AWS" />
                <FaPhp className="tech-icon php" title="PHP" />
                <FaCss3Alt className="tech-icon css" title="CSS3" />
                <FaBootstrap className="tech-icon bootstrap" title="Bootstrap" />
                <SiTailwindcss className="tech-icon tailwind" title="Tailwind CSS" />
              </div>
            </div>
          </div>


          <div className="project-box">
            <img src='/img/music.webp' alt="music" className="project-image" />
            <div className="project-text">
              <h3>PedroDaniel's Music</h3>
              <label>
                Tienda de música, enfocada en el diseño frontend y UI. Fue mi primer proyecto cuando empecé a profundizar en la usabilidad. <br></br> <br></br>
              </label>
              <a href="https://github.com/PDanielFG/instruments-web" target="_blank" rel="noopener noreferrer" className="project-button">
                Ver en GitHub
              </a>
              <div className="tech-icons">
                <FaHtml5 className="tech-icon html" title="HTML5" />
                <FaCss3Alt className="tech-icon css" title="CSS3" />
                <FaJs className="tech-icon js" title="JavaScript" />
              </div>
            </div>
          </div>



          <div className="project-box">
            <img src='/img/iw.webp' alt="iw" className="project-image" />
            <div className="project-text">
              <h3>IwGym</h3>
              <label>
                Sistema de Gestión de Reservas de Clases en un Gimnasio. Lleva a cabo también la gestión de personal, de clientes y todo lo relacionado con ellos.  <br></br> <br></br>
              </label>
              <a href="https://github.com/PDanielFG/iwGym-final" target="_blank" rel="noopener noreferrer" className="project-button">
                Ver en GitHub
              </a>
              <div className="tech-icons">
                <FaJava className="tech-icon java" title="Java" />
                <SiSpring className="tech-icon spring" title="Spring" />
                <SiVaadin className="tech-icon vaadin" title="Vaadin" />
                <FaAws className="tech-icon aws" title="AWS" />
              </div>
            </div>
          </div>


        </div>
      </Zoom>
    </section>
  );
};

export default ProjectsSection;
