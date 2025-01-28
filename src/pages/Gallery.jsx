import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";


const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      gallery1,
      gallery2,
      gallery3,
      gallery4
    ];
  
    return (
        <section id="gallery" className="py-20 px-6 bg-[#3b3f46]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center text-[#fff] mb-12">Gallery</h2>
          <div className="relative">
            <img
              src={images[currentSlide]}
              alt={`Gallery image ${currentSlide + 1}`}
              className="w-full h-[600px] object-cover rounded-lg"
              loading='lazy'
              decoding='async'
            />
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#1e2328] p-2 rounded-full transition-colors text-[#f5a201]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1e2328]/80 hover:bg-[#1e2328] p-2 rounded-full transition-colors text-[#f5a201]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Gallery;