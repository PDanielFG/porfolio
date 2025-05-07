import React from 'react';
import '../styles/footer.css';
import { Bounce } from 'react-awesome-reveal';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <Bounce>

        <h3 className="footer-name">Pedro Daniel<span> .</span></h3>

        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/pedro-daniel-fern%C3%A1ndez-guerrero-3b11041b2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/PDanielFG" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>



        <p className="footer-copy">
          Copyright © <a href="/home">Pedro Daniel</a> - All rights reserved - Todos los derechos reservados
        </p>
      </Bounce>

    </footer>
  );
};

export default Footer;
