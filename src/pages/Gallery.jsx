import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";
import gallery4 from "../assets/gallery-4.webp";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [gallery1, gallery2, gallery3, gallery4];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-[#3b3f46]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-center text-[#fff] mb-12"
        >
          Gallery
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={images[currentSlide]}
              alt={`Gallery image ${currentSlide + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[600px] object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </AnimatePresence>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#1e2328] p-2 rounded-full transition-colors text-[#f5a201]"
            aria-label="go back button"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#1e2328] p-2 rounded-full transition-colors text-[#f5a201]"
            aria-label="go forward button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;