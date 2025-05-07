import React from 'react';
import '../styles/aboutSection.css';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPhp, FaJava, FaPython, FaDatabase, FaVaadin, FaNodeJs, FaDocker, FaAws, FaLinux, FaGit, FaNetworkWired } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiTailwindcss, SiLaravel, SiSpring, SiExpress, SiKubernetes } from 'react-icons/si';


const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Fade direction="down">
        <h2 className="section-title">Sobre mí</h2>
      </Fade>

      <div className="about-container">
        <div className="skills-wrapper">
          {/* <div className="about-card intro-card">
            <Slide direction="left" delay={100}>
              <h3>My introduction</h3>
              <p>
                I am well-versed in HTML, CSS and JavaScript, and other cutting edge frameworks and libraries,
                which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.
              </p>
              <a href="#" className="download-btn">
                Download CV <i className="fas fa-download"></i>
              </a>
            </Slide>
          </div> */}

          {/* Frontend */}
          <div className="about-card skill-column">
            <Slide direction="right" delay={100}>
              <h4 className='titulo'>Frontend</h4>
              <div className="icon-grid">
                <FaHtml5 title="HTML5" className="tech-icon html" size={60} />
                <FaCss3Alt title="CSS3" className="tech-icon css" size={60} />
                <FaBootstrap title="Bootstrap" className="tech-icon bootstrap" size={60} />
                <FaJs title="JavaScript" className="tech-icon js" size={60} />
                <FaVaadin title='Vaadin' className='tech-icon vaadin' size={60} />
                <FaReact title="React" className="tech-icon react" size={60} />
                <SiTailwindcss title='TailWind' className='tech-icon tailwind' size={60} />
              </div>
            </Slide>
          </div>

          {/* Backend */}
          <div className="about-card skill-column">
            <Slide direction="right" delay={100}>
              <h4 className='titulo'>Backend</h4>
              <div className="icon-grid">
                <FaPhp title="PHP" className="tech-icon php" size={60} />
                <FaJava title="Java" className="tech-icon java" size={60} />
                <FaPython title="Python" className="tech-icon python" size={60} />
                <SiCplusplus title="C++" className="tech-icon cpp" size={60} />
                <SiLaravel title="Laravel" className="tech-icon laravel" size={60} />
                <SiSpring title="Spring" className="tech-icon spring" size={60} />
                <SiExpress title="Express" className="tech-icon express" size={60} />
                <FaNodeJs title="Node.js" className="tech-icon nodejs" size={60} />
              </div>
            </Slide>
          </div>

          {/* Database */}
          <div className="about-card skill-column">
            <Slide direction="right" delay={100}>
              <h4 className='titulo'>Database</h4>
              <div className="icon-grid">
                <SiMysql title="MySQL" className="tech-icon mysql" size={60} />
                <SiMongodb title="MongoDB" className="tech-icon mongodb" size={60} />
                <FaDatabase title="General DB" className="tech-icon db" size={60} />
              </div>
            </Slide>
          </div>
          <div className="about-card skill-column">
            <Slide direction="right" delay={100}>
              <h4 className='titulo'>Aptitudes variadas</h4>
              <div className="icon-grid">
                <FaDocker title="Docker" className="tech-icon docker" size={60} />
                <SiKubernetes title="Kubernetes" className="tech-icon kubernetes" size={60} />
                <FaAws title="AWS" className="tech-icon aws" size={60} />
                <FaGit title="Git" className="tech-icon git" size={60} />
                <FaLinux title="Linux" className="tech-icon linux" size={60} />
                <FaNetworkWired title="Networking (CCNA/CCNP)" className="tech-icon network" size={60} />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
