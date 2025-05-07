import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Agregado para controlar el menú hamburguesa

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // 60% visible
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen); // Función para alternar el estado del menú

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}> {/* Clase 'open' cuando el menú está abierto */}
          {['home', 'sobre mí', 'proyectos', 'contacto'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Botón de menú hamburguesa */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
