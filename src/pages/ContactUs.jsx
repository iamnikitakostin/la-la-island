import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function ContactUs() {
  return (
    <div
      className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-amber-500 to-gold"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-alt font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            We'd love to hear from you! Visit our store, give us a call, or find us on social media.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 w-full"
        >
          <div className="flex flex-col justify-between bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 md:w-1/3">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-10 group"
              >
                <div className="p-3 bg-gray-800 rounded-lg text-gold group-hover:bg-gold group-hover:text-gray-900 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Visit Us</h2>
                  <p className="text-gray-300">2951 W Broadway<br />Vancouver, BC</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-10 group"
              >
                <div className="p-3 bg-gray-800 rounded-lg text-gold group-hover:bg-gold group-hover:text-gray-900 transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Open Hours</h2>
                  <p className="text-gray-300">Monday - Sunday</p>
                  <p className="text-gray-300">8:00 AM – 6:00 PM</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-10 group"
              >
                <div className="p-3 bg-gray-800 rounded-lg text-gold group-hover:bg-gold group-hover:text-gray-900 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Call Us</h2>
                  <a href="tel:+16044235811" className="text-gray-300 hover:text-gold transition-colors">
                    +1 (604) 423-5811
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-gray-800 rounded-lg text-gold group-hover:bg-gold group-hover:text-gray-900 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Email Us</h2>
                  <a href="mailto:info@lalaisland.com" className="text-gray-300 hover:text-gold transition-colors">
                    info@lalaisland.com
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div>
              <div className="border-t border-gray-700 my-10"></div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gold hover:bg-gold hover:text-gray-900 transition-all duration-300"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gold hover:bg-gold hover:text-gray-900 transition-all duration-300"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gold hover:bg-gold hover:text-gray-900 transition-all duration-300"
                >
                  <Twitter size={24} />
                </motion.a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-700 h-full">
                <div className="w-full h-[400px] rounded-xl overflow-hidden">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6386351707306!2d-123.1740380235121!3d49.26429487139004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486736253d8951d%3A0x919eb0dc8147b132!2sLa%20La%20Island!5e0!3m2!1sen!2sca!4v1717347655390!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
                
                <div className="mt-6 p-4">
                  <h3 className="text-xl font-semibold mb-3">Find Us</h3>
                  <p className="text-gray-300 mb-4">
                    Located in the heart of Kitsilano, our store is easily accessible by public transit and has street parking available.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="px-3 py-1 bg-gray-800 text-gold text-sm rounded-full">Bus Routes: 9, 14, 99</span>
                    <span className="px-3 py-1 bg-gray-800 text-gold text-sm rounded-full">Street Parking</span>
                    <span className="px-3 py-1 bg-gray-800 text-gold text-sm rounded-full">Bike Friendly</span>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://goo.gl/maps/XYZ123" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-gold text-gray-900 font-medium rounded-lg hover:bg-amber-400 transition-colors duration-300"
                  >
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Footer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm">
            Developed by{' '}
            <a
              href="https://nikitakostin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              Nikita Kostin
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;