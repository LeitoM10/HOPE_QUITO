import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import FlipCard from './components/Flipcard';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Carousel />
        <FlipCard />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;