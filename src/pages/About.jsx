import React from 'react';
import { motion } from 'framer-motion';
import image from "../assets/about-us.webp";
import { Coffee, Users, Clock, MapPin } from 'lucide-react';

function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start items-center gap-12 border-t-4 border-gray-400 bg-gray-50 py-16 px-6 relative"
      id="about"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-200 to-transparent opacity-70"></div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-4"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">Where coffee meets community</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-stretch w-full max-w-6xl gap-8"
      >
        {/* Image Section with enhanced styling */}
        <div className="flex-1 relative rounded-xl overflow-hidden shadow-2xl">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <img
              src={image}
              alt="La La Island Cafe"
              className="w-full h-full object-left object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          {/* Enhanced Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-50"></div>
          
        </div>

        {/* Text Section with improved styling */}
        <div className="flex-1 p-8 text-white bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-xl flex flex-col justify-center">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Welcome to <span className="text-gray-300">La La Island</span>
          </motion.h2>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg font-light leading-relaxed mb-4 text-gray-300"
          >
            La La Island is more than just a café – it's a sanctuary where time slows down and connections flourish.
          </motion.p>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-light leading-relaxed mb-4 text-gray-300"
          >
            We offer a warm atmosphere, perfect for coffee breaks, study sessions, or catching up with friends. Our carefully crafted beverages and welcoming environment make every visit special.
          </motion.p>
          
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg font-light leading-relaxed mb-6 text-gray-300"
          >
            Join us and experience the inviting charm of our community cafe. We look forward to seeing you soon!
          </motion.p>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <a href="#contact" className="inline-block px-6 py-3 bg-amber-700 hover:bg-gray-500 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Visit Us Today
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Features Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mt-12 text-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Coffee size={24} />,
              title: "Premium Coffee",
              description: "Sourced from sustainable farms and roasted to perfection"
            },
            {
              icon: <Users size={24} />,
              title: "Community Space",
              description: "A welcoming environment for everyone to gather and connect"
            },
            {
              icon: <Clock size={24} />,
              title: "Extended Hours",
              description: "Open early and late to accommodate your schedule"
            },
            {
              icon: <MapPin size={24} />,
              title: "Central Location",
              description: "Conveniently located in the heart of downtown"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col items-center text-center"
            >
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-16 "
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="space-y-6 text-black">
          {[
            {
              question: "What are your opening hours?",
              answer: "We're open Monday to Friday from 7am to 8pm, and weekends from 8am to 9pm."
            },
            {
              question: "Do you offer vegan options?",
              answer: "Yes! We have a variety of plant-based milk alternatives and vegan food options."
            },
            {
              question: "Is there Wi-Fi available?",
              answer: "Absolutely. We offer free high-speed Wi-Fi for all our customers."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-200 to-transparent opacity-70"></div>
      
      {/* Coffee bean pattern background - subtle gray version */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-20 left-20 w-40 h-40 text-gray-400">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z" fill="currentColor"/>
            <path d="M65 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM35 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-20 w-60 h-60 text-gray-400">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z" fill="currentColor"/>
            <path d="M65 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM35 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;