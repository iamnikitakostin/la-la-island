import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Coffee, Leaf, Snowflake, ChevronLeft, ChevronRight, Croissant } from 'lucide-react';

function Menu() {
  const menuRef = useRef(null);
  const containerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const isInView = useInView(menuRef, { once: true, amount: 0.1 });

  const menuSections = [
    {
      title: 'Espresso Drinks',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { title: 'Brewed Coffee', description: '12oz - 16oz', price: '$2.95 - $3.35', popular: true },
        { title: 'Espresso', description: '2oz', price: '$3.50' },
        { title: 'Espresso Macchiato', description: '4oz', price: '$3.95' },
        { title: 'Latte', description: '12oz - 16oz', price: '$4.75 - $5.25', popular: true },
        { title: 'Cappuccino', description: '12oz - 16oz', price: '$4.75 - $5.25', popular: true },
        { title: 'Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
        { title: 'Americano Misto', description: '12oz - 16oz', price: '$4.25 - $4.75' },
        { title: 'Flat White', description: '8oz', price: '$4.25' },
        { title: 'Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00', popular: true },
        { title: 'Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75' },
      ],
    },
    {
      title: 'Teas',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { title: 'Earl Grey', description: 'Aromatic black tea', price: '$3.50' },
        { title: 'English Breakfast', description: 'Strong black tea blend', price: '$3.50' },
        { title: 'Peppermint', description: 'Refreshing herbal tea', price: '$3.50', popular: true },
        { title: 'Jasmine', description: 'Fragrant green tea', price: '$3.50' },
        { title: 'Chamomile', description: 'Calming herbal tea', price: '$3.50' },
        { title: 'Matcha', description: 'Premium green tea powder', price: '$4.50', popular: true },
      ],
    },
    {
      title: 'Iced Drinks',
      icon: <Snowflake className="w-6 h-6" />,
      items: [
        { title: 'Iced Americano', description: '12oz - 16oz', price: '$3.75 - $3.95' },
        { title: 'Iced Latte', description: '12oz - 16oz', price: '$4.75 - $5.25', popular: true },
        { title: 'Iced Mocha', description: '12oz - 16oz', price: '$5.50 - $6.00' },
        { title: 'Iced Caramel Macchiato', description: '12oz - 16oz', price: '$5.25 - $5.75', popular: true },
        { title: 'Iced Chai Latte', description: '12oz - 16oz', price: '$5.00 - $5.50' },
        { title: 'Iced Matcha Latte', description: '12oz - 16oz', price: '$5.00 - $5.50', popular: true },
        { title: 'Cold Brew', description: '12oz - 16oz', price: '$4.50 - $5.00', popular: true },
      ],
    },
    {
      title: 'Pastry',
      icon: <Croissant className="w-6 h-6" />,
      items: [
        { title: 'Croissant', description: '', price: '$3.95' }
      ]
    },
  ];

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

  const scrollToSection = (index) => {
    if (menuRef.current) {
      const sectionWidth = menuRef.current.scrollWidth / menuSections.length;
      menuRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth',
      });
      setActiveSection(index);
    }
  };

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const scrollPosition = menuRef.current.scrollLeft;
        const sectionWidth = menuRef.current.scrollWidth / menuSections.length;
        const newActiveSection = Math.round(scrollPosition / sectionWidth);
        
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('scroll', handleScroll);
      return () => menuElement.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection, menuSections.length]);

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
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
    <div className="w-full min-h-screen bg-app py-16 px-4 md:px-8" id="menu" ref={containerRef}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-alt text-white mb-4">Our Menu</h1>
        <p className="text-amber-200 max-w-2xl mx-auto">
          Handcrafted beverages made with the finest ingredients and love
        </p>
      </motion.div>

      {/* Section Navigation */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex justify-center mb-8 gap-2 md:gap-4"
      >
        {menuSections.map((section, index) => (
          <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
            activeSection === index
              ? 'bg-amber-700 text-white'
              : 'bg-white/10 text-amber-100 hover:bg-white/20'
          }`}
        >
          <span className="hidden md:inline">{section.icon}</span>
          <span className="font-medium">{section.title}</span>
        </button>
      ))}
    </motion.div>

    {/* Scroll Navigation Buttons */}
    <div className="relative">
      <button 
        onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
        className={`${activeSection == 0 && "hidden"} absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300`}
        aria-label="Previous section"
      >
        <ChevronLeft />
      </button>
      
      <button 
        onClick={() => scrollToSection(Math.min(menuSections.length - 1, activeSection + 1))}
        className={`${activeSection == 3 && "hidden"} absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300`}
        aria-label="Next section"
      >
        <ChevronRight />
      </button>

      <div
        className="flex overflow-x-scroll gap-8 mt-8 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        ref={menuRef}
      >
        {menuSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            transition={{ delay: sectionIndex * 0.1 }}
            className="min-w-[90%] md:min-w-[40%] lg:min-w-[30%] snap-start bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-amber-700/50">
              <span className="text-amber-500">{section.icon}</span>
              <h2 className="text-white text-2xl font-alt">{section.title}</h2>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className={`relative flex justify-between items-center p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    item.popular 
                      ? 'bg-gradient-to-r from-amber-900/30 to-transparent border-l-2 border-amber-500' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div>
                    <p className="font-alt text-lg text-white">{item.title}</p>
                    {item.description && (
                      <div className="text-sm text-amber-200/80">{item.description}</div>
                    )}
                  </div>
                  <p className="text-white align-middle font-medium bg-black/20 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {item.price}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Decorative elements */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
              <div className="text-white/40 text-sm">{section.items.length} items</div>
              <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="text-amber-500"
              >
                {section.icon}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Pagination dots */}
    <div className="flex justify-center mt-8 gap-2">
      {menuSections.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === index ? 'bg-amber-500 w-6' : 'bg-white/30'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
    
    {/* Call to action */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.8 }}
      className="mt-16 text-center"
    >
      <p className="text-white/80 mb-4">Can't decide? Ask our baristas for recommendations!</p>
      {/* <button className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-amber-700/30">
        View Full Menu PDF
      </button> */}
    </motion.div>
    
    {/* Custom CSS for hiding scrollbar but allowing scroll */}
    <style jsx>{`
      .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;  /* Chrome, Safari and Opera */
      }
    `}</style>
  </div>
);
}

export default Menu;