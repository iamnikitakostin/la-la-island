import React from 'react';
import { motion } from 'framer-motion';

function ContactUs() {
  return (
    <div
      className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center gap-20 py-12 px-6 border-t-8 border-gold"
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-alt text-center"
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-16 w-full max-w-screen-lg"
      >
        <div className="flex flex-col justify-around items-start max-w-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-base font-semibold">Address</h2>
            <p className="text-sm font-light">2951 W Broadway<br />Vancouver, BC</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-base font-semibold">Open Hours</h2>
            <ul>
              <li className="text-sm font-light">Mon - Sun: 8 a.m. – 6 p.m.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-base font-semibold">Call Us</h2>
            <p className="text-sm font-light">+1 (604) 423-5811</p>
          </motion.div>
          <div className="border-t border-white my-8"></div>
          <div className="flex gap-4">
            {/* Add social links here if needed */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-2/3">
          <div className="w-full h-72">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6386351707306!2d-123.1740380235121!3d49.26429487139004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486736253d8951d%3A0x919eb0dc8147b132!2sLa%20La%20Island!5e0!3m2!1sen!2sca!4v1717347655390!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <p className="text-sm font-light">
              Developed by{' '}
              <a
                href="https://nikitakostin.com"
                target="_blank"
                rel="noreferrer"
                className="text-underline hover:text-gold"
              >
                Nikita Kostin
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;