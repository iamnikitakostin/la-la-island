import React from 'react';
import { motion } from 'framer-motion';
import ProgressivePicture from './ProgressivePicture';
import logoDesktop from "../assets/logo-500.avif";
import logoLaptop from "../assets/logo-300.avif";

const blurDataURL = "data:image/webp;base64,..."; // Your base64 string

const Hero = () => {
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
        <ProgressivePicture
          sources={[
            { 
              srcSet: logoDesktop, 
              media: "(min-width: 1280px)",
              width: 500,
              height: 500
            },
            { 
              srcSet: logoLaptop, 
              media: "(min-width: 768px)",
              width: 300,
              height: 300
            },
          ]}
          defaultSrc={logoLaptop}
          alt="La La Island logo"
          blurDataURL={blurDataURL}
          className="w-full h-full object-cover"
          imgClassName="transition-opacity duration-300 opacity-0"
          width={300}
          height={300}
          fetchpriority="high"
          decoding="async"
        />
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