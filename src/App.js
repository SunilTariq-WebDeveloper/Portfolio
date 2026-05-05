import React, { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';

// Lazy Loading - Components ab alag se load honge (faster initial load)
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Dark mode detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDark) => {
      setDarkMode(isDark);
    };

    applyTheme(mediaQuery.matches);

    const handleChange = (e) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Loader timeout (2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {/* Suspense wrapper - lazy loaded components ke liye */}
          <Suspense fallback={<div className="min-h-screen bg-white dark:bg-black" />}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;