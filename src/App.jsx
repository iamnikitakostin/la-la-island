import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

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

  return (
    <div className="min-h-screen w-full   bg-[#1e2328]">
    {!loaded && (
      <div className={`fixed inset-0 bg-[#1e2328] flex items-center justify-center z-50 ${
        loaded ? 'animate-fadeOut' : ''
      }`}>
        <div className="w-16 h-16 border-4 border-[#f5a201] border-t-transparent rounded-full animate-spin" />
      </div>
    )}
    <Landing setLoaded={setLoaded} />
    <About />
    <Menu />
    <Gallery />
    <ContactUs />
  </div>
  );
};

export default App;