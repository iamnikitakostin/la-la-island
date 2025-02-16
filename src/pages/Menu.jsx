import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Menu() {
  const menuRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isInView = useInView(menuRef, { once: true, amount: 0.5 });

  const triggerScrollEffect = (element) => {
    const initialScrollX = element.scrollLeft;
    const scrollAmount = 500;

    element.scrollTo({ left: initialScrollX + scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      element.scrollTo({ left: initialScrollX, behavior: 'smooth' });
    }, 1000);
  };

  useEffect(() => {
    if (isInView && !hasScrolled) {
      triggerScrollEffect(menuRef.current);
      setHasScrolled(true);
    }
  }, [isInView, hasScrolled]);

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="w-full min-h-screen bg-app p-8" id="menu">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center text-4xl font-alt text-white mb-12"
      >
        Menu
      </motion.h1>

      <div
        className="flex overflow-x-scroll gap-8 mt-8 scroll-smooth snap-x snap-mandatory"
        ref={menuRef}
      >
        {[
          {
            title: 'Espresso Drinks',
            items: [
              { title: 'Brewed Coffee', description: '12oz - 16oz', price: '$2.95 - $3.35' },
              { title: 'Espresso', description: '2oz', price: '$3.50' },
              { title: 'Espresso Macchiato', description: '4oz', price: '$3.95' },
              { title: 'Latte', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Cappuccino', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
              { title: 'Americano Misto', description: '12oz - 16oz', price: '$4.25 - $4.75' },
              { title: 'Flat White', description: '8oz', price: '$4.25' },
              { title: 'Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00' },
              { title: 'Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75' },
            ],
          },
          {
            title: 'Teas',
            items: [
              { title: 'Earl Grey', price: '$3.50' },
              { title: 'English Breakfast', price: '$3.50' },
              { title: 'Peppermint', price: '$3.50' },
              { title: 'Jasmine', price: '$3.50' },
              { title: 'Chamomile', price: '$3.50' },
            ],
          },
          {
            title: 'Iced Drinks',
            items: [
              { title: 'Iced Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
              { title: 'Iced Latte', description: '12oz - 16oz', price: '$4.75 - $5.25' },
              { title: 'Iced Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00' },
              { title: 'Iced Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75' },
              { title: 'Iced Chai Latte', description: '12oz - 16oz', price: '$5.00 - $5.50' },
              { title: 'Iced Matcha Latte', description: '12oz - 16oz', price: '$5.00 - $5.50' },
            ],
          },
        ].map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: sectionIndex * 0.2 }}
            className="min-w-[90%] md:min-w-[40%] snap-start"
          >
            <h2 className="text-white text-xl font-alt uppercase pb-4 mb-4 border-b-2 border-white sticky top-0 bg-app z-10">
              {section.title}
            </h2>
            <div className="flex flex-col gap-4">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-end p-4 hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <p className="font-alt text-lg text-white">{item.title}</p>
                    {item.description && (
                      <div className="text-sm text-white">{item.description}</div>
                    )}
                  </div>
                  <p className="text-sm text-white">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Menu;