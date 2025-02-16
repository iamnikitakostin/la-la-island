import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[400px] mx-auto aspect-square"
      >
        <picture>
          <link
            rel="preload"
            as="image"
            href="https://res.cloudinary.com/dr1aqzogg/image/upload/f_auto,q_auto/ljlw37nva0cp14guacyr"
            type="image/webp"
          />
          <source
            srcSet="
              https://res.cloudinary.com/dr1aqzogg/image/upload/w_50,f_auto,q_10/ljlw37nva0cp14guacyr 50w,
              https://res.cloudinary.com/dr1aqzogg/image/upload/w_300,f_auto,q_auto/ljlw37nva0cp14guacyr 300w,
              https://res.cloudinary.com/dr1aqzogg/image/upload/w_500,f_auto,q_auto/ljlw37nva0cp14guacyr 500w
            "
            sizes="(min-width: 768px) 500px, 300px"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dr1aqzogg/image/upload/w_300,f_auto,q_auto/fqb4bsim8bfkqbf4pscw"
            alt="app logo"
            width="300"
            height="300"
            fetchpriority="high"
            decoding="async"
            loading="eager"
            className="w-full transition-opacity duration-300 bg-gray-200"
            onLoad={(e) => {
              e.target.classList.add('opacity-100');
              e.target.classList.remove('opacity-0');
            }}
          />
        </picture>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-xl md:text-2xl font-medium text-center md:text-left text-amber-50 leading-relaxed tracking-wide bg-black/40 px-6 py-3 rounded-lg shadow-xl backdrop-blur-sm"
      >
        A cup of coffee & a croissant,<br />
        <span className="text-amber-200 font-semibold">What could be better?</span>
      </motion.p>
    </div>
  );
};

export default Hero;