import { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedEvents from './components/FeaturedEvents';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Update theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      {/* 3D Background */}
      <ThreeBackground darkMode={darkMode} />

      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero darkMode={darkMode} />

        {/* Categories Section */}
        <Categories darkMode={darkMode} />

        {/* Featured Events Section */}
        <FeaturedEvents darkMode={darkMode} />

        {/* Stats Section */}
        <Stats darkMode={darkMode} />

        {/* Testimonials Section */}
        <Testimonials darkMode={darkMode} />

        {/* Newsletter Section */}
        <Newsletter darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
