/* eslint-disable no-unused-vars */
import React, { useState, lazy, Suspense, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Stories = lazy(() => import('./pages/Stories/Stories'));
const Programs = lazy(() => import('./pages/Programs/Programs'));
const Impact = lazy(() => import('./pages/Impact/Impact'));
const Donate = lazy(() => import('./pages/Donate/Donate'));
const About = lazy(() => import('./pages/About/About'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
    />
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  const pages = {
    home: <Home />,
    stories: <Stories />,
    programs: <Programs />,
    impact: <Impact />,
    donate: <Donate />,
    about: <About />,
  };

  return (
    <>
      {showLoader && <Loader onLoadComplete={handleLoadComplete} />}
      
      <AnimatePresence mode="wait">
        {!showLoader && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col bg-white"
          >
            <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
            
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                {pages[currentPage]}
              </Suspense>
            </main>
            
            <Footer setCurrentPage={setCurrentPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;