import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProgressivePicture from '../components/ProgressivePicture';
import desktopBackground from '../assets/bg-xl.avif';
import laptopBackground from '../assets/bg-lg.avif';
import tabletBackground from '../assets/bg-md.avif';
import mobileBackground from '../assets/bg-sm.avif';

const blurDataURL = "data:image/jpeg;base64,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";

function Landing({ setLoaded }) {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen max-h-screen overflow-hidden">
      <div className="absolute">
      <ProgressivePicture
        sources={[
          { srcSet: desktopBackground, media: "(min-width: 1280px)" },
          { srcSet: laptopBackground, media: "(min-width: 768px)" },
          { srcSet: tabletBackground, media: "(min-width: 480px)" },
        ]}
        defaultSrc={mobileBackground}
        blurDataURL={blurDataURL}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        isFullscreen={true}
      />
      
      <div className="absolute inset-0 bg-[rgba(73,82,59,0.6)] z-10"></div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-6 gap-12"
      >
        <Hero />
        <Nav setLoaded={setLoaded} />
      </motion.div>
    </div>
  );
}

export default Landing;