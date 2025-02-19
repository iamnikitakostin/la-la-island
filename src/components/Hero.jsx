import React, { useState } from 'react';
import { motion } from 'framer-motion';

import logoDesktop from "../assets/logo-500.avif";
import logoMobile from "../assets/logo-64.webp";
import logoLaptop from "../assets/logo-300.avif";

const blurDataURL =
  "data:image/webp;base64,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"; // Add a proper base64-encoded placeholder

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

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
        className="max-w-[400px] mx-auto aspect-square relative"
        style={{ viewTransitionName: 'hero-image' }}
      >
        {/* Blurred Placeholder */}
        <img
          src={blurDataURL}
          alt="Blurred placeholder"
          className={`absolute inset-0 object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`
          }
          width={300}
/>

        {/* Real Image */}
        <picture>
          <source srcSet={logoDesktop} media="(min-width: 1280px)" />
          <source srcSet={logoLaptop} media="(min-width: 368px)" width={300} />
          <img
            src={logoMobile}
            alt="La La Island logo"
            width={300}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
          />
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
