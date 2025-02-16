import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';

const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 250);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loaded]);

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="w-16 h-16 border-4 border-[#f5a201] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#1e2328]">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#1e2328] flex items-center justify-center z-50"
          >
            <div className="w-16 h-16 border-4 border-[#f5a201] border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <Landing setLoaded={setLoaded} />

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Menu />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContactUs />
      </Suspense>
    </div>
  );
};

export default App;