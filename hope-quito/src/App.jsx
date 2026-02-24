import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import FlipCard from './components/FlipCard';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Notihope from './components/Notihope';
import Visitanos from './components/Visitanos';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <FlipCard />
              </>
            } />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/notihope" element={<Notihope />} />
            <Route path="/visitanos" element={<Visitanos />} />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;