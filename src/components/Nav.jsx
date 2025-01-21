import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import coffee from "../assets/coffee-cup.png";

const Nav = ({ setLoaded }) => {
  const navItems = [
    { href: "#about", text: "About us" },
    { href: "#menu", text: "Our menu" },
    { href: "#gallery", text: "Gallery" },
    { href: "#contact", text: "Contact us" }
  ];

  return (
    <nav className="relative flex justify-center items-center w-full max-w-6xl mx-auto px-4 py-2">
      <div className="relative w-[300px] md:w-[400px] transition-transform duration-1000 ease-in-out hover:scale-105">
        {/* Coffee cup image */}
        <img 
          src={coffee} 
          alt="coffee cup" 
          onLoad={() => setLoaded(true)} 
          className="w-full"
          height="400px"
          width="400px"
        />

        {/* Navigation menu overlay */}
        <ul className="absolute left-10 inset-0 flex flex-col justify-center items-center gap-4 px-4">
          {navItems.map((item) => (
            <li 
              key={item.href}
              className="w-[80%] transform transition-all duration-300 hover:translate-x-2"
            >
              <a 
                href={item.href}
                className="relative group flex items-center w-full font-bold px-4 py-1.5
                         text-gray-700 font-alt cursor-pointer
                         border-l-4 border-white rounded-l-md
                         transition-all duration-300
                         hover:text-white"
              >
                <span className="relative z-20 text-amber-900">{item.text}</span>
                <span className="absolute inset-0 bg-[#7e5f4d] 
                               transform scale-x-0 origin-left
                               transition-transform duration-300 
                               group-hover:scale-x-90 -z-10
                               rounded-l-md" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;