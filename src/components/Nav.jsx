import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import coffee from "../assets/coffee-cup.webp";
import logo from "../assets/logo-64.webp";

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

  return (
    <nav className="relative flex justify-center items-center w-full max-w-6xl mx-auto px-4 py-2">
      {isMobile && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[rgba(73,82,59,0.95)] shadow-lg' : 'bg-transparent'} ${isScrolled ? 'py-3' : 'py-4'}`}
        >
          <div className={`container mx-auto px-4 flex ${isScrolled ? "justify-between" : "justify-end"} items-center`}>
            <img
              src={logo}
              alt="Cafe logo"
              className={`h-12 w-auto transition-opacity duration-300 aspect-square hover:opacity-80 ${isScrolled ? "" : "hidden"}`}
              width="64"
              height="64"
            />
            <button
              className="hamburger-btn z-50 bg-black text-amber-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
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
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl text-amber-50 font-alt hover:text-amber-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
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
          <img
            src={coffee}
            alt="coffee cup"
            onLoad={() => setLoaded(true)}
            className="w-full"
            height="400"
            width="400"
          />
          <ul className="absolute left-10 inset-0 flex flex-col justify-center items-center gap-4 px-4">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-[80%] transform transition-all duration-300 hover:translate-x-2"
              >
                <a
                  href={item.href}
                  className="relative group flex items-center w-full font-bold px-4 py-1.5
                          text-gray-700 font-alt cursor-pointer
                          border-l-4 border-white rounded-l-md
                          transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-20 text-amber-900 group-hover:text-white">{item.text}</span>
                  <span className="absolute inset-0 bg-[#7e5f4d]
                                transform scale-x-0 origin-left
                                transition-transform duration-300
                                group-hover:scale-x-90 -z-10
                                rounded-l-md" />
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