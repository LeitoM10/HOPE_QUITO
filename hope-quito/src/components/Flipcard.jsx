import React, { useState, useEffect } from 'react';
import frontImg from '../assets/images_hope/WhatsApp Image 2026-02-20 at 8.38.37 PM.jpeg';
import backImg from '../assets/images_hope/ChatGPT Image 20 feb 2026, 09_53_10 p.m..png';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice] = useState(() => window.matchMedia('(hover: none)').matches);

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(prev => !prev);
  };

  // Reiniciar al cambiar orientación (opcional)
  useEffect(() => {
    if (!isTouchDevice) setIsFlipped(false);
  }, [isTouchDevice]);

  return (
    <section className="seccion-imagen">
      <div
        className={`flip-card ${isFlipped ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImg} alt="Imagen 1" />
          </div>
          <div className="flip-card-back">
            <img src={backImg} alt="Imagen 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;