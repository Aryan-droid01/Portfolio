import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import gunSvg from '../../../assets/gun.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'contact', 'about'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Project' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-circle" onClick={() => scrollToSection('home')} aria-label="Home"></div>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <button 
                onClick={() => scrollToSection(item.id)} 
                className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <button onClick={() => scrollToSection('contact')} className="nav-btn">
            Lets Talk <img src={gunSvg} className="nav-btn-icon" alt="cta gun icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
