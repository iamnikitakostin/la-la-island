import React from 'react';
import coffee from "../assets/logo.png";

function Hero() {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <div className="max-w-[400px] mx-auto aspect-square">
        <img
          srcSet="/src/assets/logo-500.webp 500w,
                  /src/assets/logo-300.webp 300w"
          sizes="(max-width: 768px) 300px, 500px"
          src="/src/assets/logo-500.webp"
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
