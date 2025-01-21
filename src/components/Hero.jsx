import React from 'react';
import coffee from "../assets/logo.png";

function Hero() {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <div className="max-w-[400px] mx-auto">
        <img src={coffee} alt="app logo" className="w-full" />
      </div>
      <p className="mt-6 text-lg md:text-xl font-light text-center md:text-left text-white shadow-lg leading-relaxed tracking-wide bg-black/40 px-4 py-2 rounded-md">
        A cup of coffee & a croissant,<br />
        what could be better?
      </p>

    </div>
  );
}

export default Hero;
