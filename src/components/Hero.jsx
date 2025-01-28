import React from 'react';
import logoLg from "../assets/logo-500.webp";
import logoSm from "../assets/logo-300.webp";

function Hero() {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <div className="max-w-[400px] mx-auto aspect-square">
        <picture>
          <source
            srcSet={logoLg}
            media="(min-width: 768px)"
            type="image/webp"
            height="500"
            width="500"
          />
          <source
            srcSet={logoSm}
            media="(max-width: 767px)"
            type="image/webp"
            height="300"
            width="300"
          />
          <img
            src={logoLg} 
            alt="app logo"
            className="w-full"
            width="500"
            height="500" 
            fetchPriority='high'
            loading='eager'
          />
        </picture>
      </div>
      <p
        className="mt-6 text-xl md:text-2xl font-medium text-center md:text-left text-amber-50 
           leading-relaxed tracking-wide bg-black/40 px-6 py-3 rounded-lg
           shadow-xl backdrop-blur-sm"
      >
        A cup of coffee & a croissant,<br />
        <span className="text-amber-200 font-semibold">What could be better?</span>
      </p>
    </div>
  );
}

export default Hero;
