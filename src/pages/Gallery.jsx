import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";
import gallery4 from "../assets/gallery-4.webp";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [gallery1, gallery2, gallery3, gallery4];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-[#fff] mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-[#f5a201] mx-auto"></div>
        </motion.div>
        
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2328]/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e2328]/30 via-transparent to-[#1e2328]/30 z-10 pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[16/9] w-full"
            >
              <img
                src={images[currentSlide]}
                alt={`Gallery image ${currentSlide + 1}`}
                className="w-full h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
              
              {/* Caption area */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e2328] to-transparent p-8 z-20">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-xl font-medium"
                >
                  Image {currentSlide + 1} of {images.length}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons with improved styling */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#f5a201] p-3 rounded-full transition-all duration-300 text-white hover:text-[#1e2328] z-20 shadow-lg transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#f5a201] p-3 rounded-full transition-all duration-300 text-white hover:text-[#1e2328] z-20 shadow-lg transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        
        {/* Dot indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-[#f5a201] w-8" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-4 gap-3 px-2">
          {images.map((img, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => handleDotClick(index)}
              className={`overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                currentSlide === index 
                  ? "border-[#f5a201] opacity-100" 
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-20 object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;