import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Future of Finance & Technology",
      subtitle: "A World-Class Business Destination",
    },
    {
      title: "Innovation Hub for Global Businesses",
      subtitle: "Connecting Opportunities Worldwide",
    },
    {
      title: "Sustainable Urban Development",
      subtitle: "Smart Infrastructure for Tomorrow",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <video autoPlay muted loop playsInline className="object-cover h-full w-full" src="src\assets\Home-banner.mp4" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-3xl text-white/90 mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Video
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-10 w-10 text-white" />
      </motion.div>
    </section>
  );
}