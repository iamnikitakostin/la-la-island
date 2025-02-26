import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import desktopCup from "../assets/cup-xl.avif";
import laptopCup from "../assets/cup-md.avif";
import tabletCup from "../assets/cup-sm.avif";

import logo from "../assets/logo-64.webp";
import ProgressivePicture from './ProgressivePicture';

const blurDataURL = "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"; 

const Nav = ({ setLoaded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { href: "#about", text: "About us" },
    { href: "#menu", text: "Our menu" },
    { href: "#gallery", text: "Gallery" },
    { href: "#contact", text: "Contact us" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  // Pulse animation for the hamburger button
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 1.5 
    }
  };

  return (
    <nav className="relative flex justify-center items-center w-full max-w-6xl mx-auto px-4 py-2">
      {isMobile && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden fixed top-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[rgba(73,82,59,0.95)] shadow-lg' : 'bg-transparent'} ${isScrolled ? 'py-3' : 'py-4'}`}
        >
          <div className={`container mx-auto px-4 flex ${isScrolled ? "justify-between" : "justify-end"} items-center`}>
            <img
              src={logo}
              alt="Cafe logo"
              className={`h-12 w-auto transition-opacity duration-300 aspect-square hover:opacity-80 ${isScrolled ? "" : "hidden"}`}
              width="64"
              height="64"
            />
            <motion.button
              animate={pulseAnimation}
              className="hamburger-btn z-50 bg-black text-amber-50 p-2 rounded-md relative overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <motion.span 
                className="absolute inset-0 bg-amber-700 opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden mobile-menu fixed inset-0 z-40 bg-[rgba(73,82,59,0.95)]`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    scale: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2,
                      delay: index * 0.5
                    }
                  }}
                  className="text-3xl text-amber-50 font-alt hover:text-amber-200 transition-colors relative"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-200"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0],
                      left: ["0%", "0%", "100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block relative w-[300px] md:w-[400px] transition-transform duration-1000 ease-in-out hover:scale-105"
        >
          <ProgressivePicture
            sources={[
              { srcSet: desktopCup, media: "(min-width: 1280px)" },
              { srcSet: laptopCup, media: "(min-width: 768px)" },
              { srcSet: tabletCup, media: "(min-width: 480px)" },
            ]}
            defaultSrc={tabletCup}
            blurDataURL={blurDataURL}
            alt="coffee cup"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <ul className="absolute left-10 inset-0 flex flex-col justify-center items-center gap-4 px-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                className="w-[80%]"
                whileHover={{ translateX: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={item.href}
                  className="relative group flex items-center w-full font-bold px-4 py-1.5
                          text-gray-700 font-alt cursor-pointer
                          transition-all duration-300 hover:text-white"
                >
<motion.span
                    className="relative z-20 text-amber-900 group-hover:text-white"
                    whileHover={{ x: 8 }}
                    animate={{
                      textShadow: ["0px 0px 0px rgba(146, 64, 14, 0)", "0px 0px 5px rgba(146, 64, 14, 0.5)", "0px 0px 0px rgba(146, 64, 14, 0)"]
                    }}
                    transition={{
                      textShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.3
                      }
                    }}
                  >
                    {item.text}
                  </motion.span>
                  
                  {/* Background animation */}
                  <motion.span
                    className="absolute inset-0 bg-[#7e5f4d] origin-left rounded-l-md opacity-0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ 
                      scaleX: 1,
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    animate={{
                      opacity: [0, 0.1, 0],
                      scaleX: [0, 0.1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  
                  {/* Animated underline */}
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ 
                      scaleX: 1,
                      transition: { delay: 0.2, duration: 0.3 }
                    }}
                    animate={{
                      scaleX: [0, 0.3, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                  
                  {/* Subtle arrow indicator */}
                  <motion.span
                    className="absolute right-10 opacity-0 text-amber-100"
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: [-5, 0, -5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;