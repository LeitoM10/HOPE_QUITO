import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/Quito_02 Logo.png';
import menuIcon from '../assets/images/Quito_12 Mark.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const iconRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    // animación del icono
    iconRef.current.classList.add('spin');
    setTimeout(() => iconRef.current.classList.remove('spin'), 600);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <img
        ref={iconRef}
        src={menuIcon}
        className="menu-icon"
        onClick={toggleMenu}
        alt="Menú"
      />
      <nav ref={navRef} className={menuOpen ? 'show' : ''}>
        <a href="/nosotros">Nosotros</a>
        <a href="/galeria">Galería</a>
        <a href="/notihope">Notihope</a>
        <a href="/visitanos">Eventos</a>
        <a href="/visitanos">Visítanos</a>
      </nav>
    </header>
  );
};

export default Header;
