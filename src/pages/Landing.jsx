import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import bg from '../assets/bg.jpg';

function Landing({ setLoaded }) {
  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(73,82,59,0.6)] z-0"></div>

      {/* Hero and Navigation */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-6 gap-12">
        <Hero />
        <Nav setLoaded={setLoaded} />
      </div>
    </div>
  );
}

export default Landing;
