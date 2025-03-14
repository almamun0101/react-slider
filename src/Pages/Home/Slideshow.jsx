import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "./Images/slides1.jpg",
  "./Images/slides2.jpg",
  "./Images/slides3.jpg",
  "./Images/slides4.jpg",
  "./Images/slides5.jpg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval when the component is unmounted
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen text-white py-10">
      <div className="relative w-full h-full overflow-hidden shadow-lg">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Slideshow"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
