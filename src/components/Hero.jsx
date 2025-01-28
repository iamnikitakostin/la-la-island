import React from 'react';
import logoLg from "../assets/logo-500.webp";
import logoSm from "../assets/logo-300.webp";

function Hero() {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <div className="max-w-[400px] mx-auto aspect-square">
        <img
          srcSet={`${logoLg} 500w,
                  ${logoSm} 300w`}
          sizes="(max-width: 768px) 300px, 500px"
          src={logoLg}
          alt="app logo"
          className="w-full"
        />
      </div>
      <p className="mt-6 text-xl md:text-2xl font-medium text-center md:text-left text-amber-50 
           leading-relaxed tracking-wide bg-black/40 px-6 py-3 rounded-lg
           shadow-xl backdrop-blur-sm">
        A cup of coffee & a croissant,<br />
        <span className="text-amber-200 font-semibold">What could be better?</span>
      </p>


    </div>
  );
}

export default Hero;
