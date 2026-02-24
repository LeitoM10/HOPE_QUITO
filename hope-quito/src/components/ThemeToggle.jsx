import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const showMessage = (msg) => {
    const el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = `
      position: fixed; bottom: 100px; right: 30px; background: #e53625;
      color: white; padding: 12px 24px; border-radius: 50px; font-size: 16px;
      font-weight: bold; box-shadow: 0 5px 20px rgba(229, 54, 37, 0.4);
      z-index: 10001; animation: themeMessageSlide 0.3s ease forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => {
      el.style.animation = 'themeMessageSlideOut 0.3s ease forwards';
      setTimeout(() => el.remove(), 300);
    }, 2000);
  };

  const handleClick = () => {
    toggleTheme();
    showMessage(theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro');
  };

  return (
    <button
      id="themeToggle"
      className="theme-toggle"
      onClick={handleClick}
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;