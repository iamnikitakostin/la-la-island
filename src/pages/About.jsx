import React from 'react';
import { motion } from 'framer-motion';
import image from "../assets/about-us.webp";

function About() {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start items-center gap-12 border-t-4 border-gray-400 bg-gray-50 py-12 px-6"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-gray-800"
      >
        About us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={image}
            alt="restaurant"
            className="w-full h-[60vh] object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Text Section */}
        <div className="flex-1 p-8 text-black bg-gradient-to-r from-gray-800 to-gray-700">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-light leading-relaxed"
          >
            Welcome to <span className="font-bold">La La Island</span>, your cozy local retreat.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg font-light leading-relaxed mt-4"
          >
            We offer a warm atmosphere, perfect for coffee breaks, study sessions, or catching up with friends.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-light leading-relaxed mt-4"
          >
            Join us and experience the inviting charm of our community cafe. We look forward to seeing you soon!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;