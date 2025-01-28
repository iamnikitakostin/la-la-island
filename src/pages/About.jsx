import React from 'react';
import image from "../assets/about-us.jpg";

function About() {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start items-center gap-12 border-t-4 border-gray-400 bg-gray-50 py-12 px-6"
      id="about"
    >
      <h1 className="text-4xl font-bold text-gray-800">About us</h1>
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={image}
            alt="restaurant"
            className="w-full h-[60vh] object-cover"
            loading='lazy'
            decoding='async'
          />
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Text Section */}
        <div className="flex-1 p-8 text-black bg-gradient-to-r from-gray-800 to-gray-700">
          <p className="text-lg font-light leading-relaxed">
            Welcome to <span className="font-bold">La La Island</span>, your cozy local retreat.
          </p>
          <p className="text-lg font-light leading-relaxed mt-4">
            We offer a warm atmosphere, perfect for coffee breaks, study
            sessions, or catching up with friends.
          </p>
          <p className="text-lg font-light leading-relaxed mt-4">
            Join us and experience the inviting charm of our community cafe. We
            look forward to seeing you soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
