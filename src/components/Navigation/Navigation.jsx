/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import useThemeStore from '../../store/themeStore';

const Navigation = ({ setCurrentPage, currentPage }) => {
  const { theme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
          timeoutId = null;
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Stories', id: 'stories' },
    { label: 'Programs', id: 'programs' },
    { label: 'Impact', id: 'impact' },
    { label: 'Donate', id: 'donate' },
    { label: 'About', id: 'about' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 0px 0px rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.JPG" alt="Lije Hoy Logo" className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-cover" />
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              ልጄ ሆይ
            </span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => handleNavClick(item.id)}
                className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${currentPage === item.id
                  ? 'text-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="h-0.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mt-1"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSelector />
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 sm:py-6 space-y-1 sm:space-y-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-gray-100 dark:border-gray-700">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all font-semibold text-base sm:text-lg ${currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
