import React from 'react';
import logo from '../assets/images/Quito_02 Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.tiktok.com/@hopequito" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118638&format=png&color=FFFFFF" alt="TikTok" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550879421169" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/somoshopequito/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-section logo-section">
          <img src={logo} alt="Logo Iglesia" />
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Pastor Thierry Vazquez</p>
          <p>📞 +593 99 999 9999</p>
          <p>📍 Av. Principal 123</p>
          <p>Quito, Ecuador</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Iglesia Nombre | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;