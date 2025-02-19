import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressivePicture from './ProgressivePicture';
import logoDesktop from "../assets/logo-500.avif";
import logoMobile from "../assets/logo-64.webp";
import logoLaptop from "../assets/logo-300.avif";

const blurDataURL = "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"; 

const Hero = () => {
  const [loaded, setLoaded] = useState(true);


  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      {/* Preload the LCP image in document head */}
      <link
        rel="preload"
        as="image"
        href={logoLaptop}
        type="image/webp"
        fetchpriority="high"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="max-w-[400px] mx-auto aspect-square"
        style={{ viewTransitionName: 'hero-image' }}
      >
         <picture className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <source srcSet={logoDesktop} media="(min-width: 1280px)" />
          <source srcSet={logoLaptop} media="(min-width: 368px)" width={300}/>
          <img src={logoMobile} alt="La La Island logo" width={200}/>
        </picture>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-xl md:text-2xl font-medium text-center md:text-left text-amber-50 leading-relaxed tracking-wide bg-black/40 px-6 py-3 rounded-lg shadow-xl backdrop-blur-sm min-h-[120px]"
      >
        <span className="inline-block">
          A cup of coffee & a croissant,<br />
          <span className="text-amber-200 font-semibold">
            What could be better?
          </span>
        </span>
      </motion.p>
    </div>
  );
};

export default Hero;