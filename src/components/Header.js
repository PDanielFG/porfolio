import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
        threshold: 0.6,
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

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300); // tiempo igual al de la animación CSS
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuOpen) toggleMenu();
  };

  const sectionsList = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className={`nav-menu ${menuOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
          {sectionsList.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
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
