import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-start text-center md:text-left md:w-1/2 z-10 px-6">
      <div className="max-w-[400px] mx-auto aspect-square">
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dr1aqzogg/image/upload/f_auto,q_auto/ljlw37nva0cp14guacyr"
            media="(min-width: 768px)"
            type="image/webp"
            width="500"
            height="500"
          />
          <img
            src="https://res.cloudinary.com/dr1aqzogg/image/upload/f_auto,q_auto/fqb4bsim8bfkqbf4pscw"
            alt="app logo"
            className="w-full"
            width="300"
            height="300"
            fetchpriority="high"
            decoding="async"
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