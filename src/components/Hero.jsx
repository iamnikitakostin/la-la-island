import React from 'react';
import bgImage from '../assets/bg.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background image container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-amber-50">
        <div className="text-center">
          <p className="text-4xl md:text-6xl font-light text-shadow">
            A cup of coffee & a croissant,<br />
            what can be better?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;