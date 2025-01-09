import aboutPicture from "../assets/about-us.jpg";

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#3b3f46]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-center text-[#fff] mb-16">About us</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={aboutPicture}
              alt="cafe interior"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-[#fff] font-light">
              Welcome to La La Island, your cozy local retreat.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We offer a warm atmosphere, perfect for coffee breaks, study sessions, or catching up with friends.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Join us and experience the inviting charm of our community cafe.
              We look forward to seeing you soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;