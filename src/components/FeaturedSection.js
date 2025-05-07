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
              words={['FullStack', 'DevOps']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="featured-text-info">
          Ingeniero informático especializado en tecnologías de la información y técnico superior de Desarrollo de Aplicaciones Web.
        </p>
        <p className="featured-text-info">
          Apasionado del desarrollo web y las tecnologías. Aplico mis habilidades técnicas y valores obtenidos durante mi formación académica, aportando soluciones innovadoras en un entorno colaborativo.
        </p>
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
          <a href="/PDanielFdez_CV.pdf" download="CV_PedroDaniel_Fernandez.pdf" target="_blank" rel="noopener noreferrer">
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
