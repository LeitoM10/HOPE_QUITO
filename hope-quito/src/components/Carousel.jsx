import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images_hope/WhatsApp Image 2026-02-20 at 7.18.42 PM (1).jpeg';
import slide2 from '../assets/images_hope/WhatsApp Image 2026-02-20 at 7.18.42 PM (2).jpeg';
import slide3 from '../assets/images_hope/WhatsApp Image 2026-02-20 at 7.18.42 PM.jpeg';

const slides = [
  { img: slide1, title: 'Bienvenidos a Hope Quito', text: 'Un lugar para crecer, creer y servir' },
  { img: slide2, title: 'Una Iglesia para Todos', text: 'Compartiendo esperanza en Ecuador' },
  { img: slide3, title: 'Ven y Sé Parte', text: 'Te esperamos con los brazos abiertos' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-full">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.img} alt={`Hope Quito ${i + 1}`} />
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      <div className="dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;