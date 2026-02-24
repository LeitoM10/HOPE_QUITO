import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Quito_02 Logo.png';
import menuIcon from '../assets/images/Quito_12 Mark.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const iconRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    iconRef.current.classList.add('spin');
    setTimeout(() => iconRef.current.classList.remove('spin'), 600);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header>
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <img
        ref={iconRef}
        src={menuIcon}
        className="menu-icon"
        onClick={toggleMenu}
        alt="Menú"
      />
      <nav ref={navRef} className={menuOpen ? 'show' : ''}>
        <Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
        <Link to="/galeria" onClick={() => setMenuOpen(false)}>Galería</Link>
        <Link to="/notihope" onClick={() => setMenuOpen(false)}>Notihope</Link>
        <Link to="/eventos" onClick={() => setMenuOpen(false)}>Eventos</Link>
        <Link to="/visitanos" onClick={() => setMenuOpen(false)}>Visítanos</Link>
      </nav>
    </header>
  );
};

export default Header;