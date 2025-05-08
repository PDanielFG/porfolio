import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/featuredSection.css';

const FeaturedSection = () => {
  return (
    <section id="home" className="featured-box">
      <div className="featured-text">
        <span className='nombre'>Soy Pedro Daniel</span>
        <h1 className="featured-name">
          <span className="typewriter-text">
            <Typewriter
              words={['FullStack', 'DevOps', 'Java', 'Laravel']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={130}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="featured-text-info">
        Ingeniero informático especializado en Tecnologías de la Información y Técnico Superior en Desarrollo de Aplicaciones Web, con experiencia en desarrollo full stack y despliegue de soluciones en entornos de producción.        </p>
        <p className="featured-text-info">
        Apasionado por la tecnología y el desarrollo de software, con habilidades sólidas en programación (Java, JavaScript, PHP, C++), diseño de arquitecturas web, bases de datos (MySQL, MongoDB) y metodologías DevOps (Docker, Kubernetes, Terraform). Enfocado en crear soluciones innovadoras y eficientes, aplicando conocimientos técnicos y valores de colaboración para resolver desafíos en equipo.        </p>
        <div className="featured-text-info">
          <a href="mailto:pedrodanielgf2@gmail.com">pedrodanielgf2@gmail.com</a>
          {" // "}
          <a href="tel:+34727710281">+34 727 71 02 81</a>
        </div>

        <div className="featured-socials">
          <a href="https://www.linkedin.com/in/pedro-daniel-fern%C3%A1ndez-guerrero-3b11041b2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/PDanielFG" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="/PDanielFdezGuerrero_CV.pdf" download="CV_PedroDaniel_Fernandez.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn blue-btn">Descargar CV</button>
          </a>
        </div>




      </div>

      <div className="featured-image floating-image">
        <img src="/yoo.png" alt="Pedro Daniel" />
      </div>
    </section>
  );
};

export default FeaturedSection;
