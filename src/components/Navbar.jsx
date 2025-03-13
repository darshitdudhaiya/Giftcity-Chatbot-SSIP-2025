import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Setup Guide", href: "/setup-guide" },
    { name: "Services", href: "/services" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="/">
            <img src="src/assets/GIFT-CITY-LOGO.webp" alt="GIFT City Logo" className="h-12 md:h-14 lg:h-16 w-auto" />
          </a>

          {/* Desktop menu with responsive adjustments */}
          <nav className="hidden md:flex flex-wrap justify-end gap-4 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm md:text-base font-medium transition-all duration-300 relative group ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Get Started button */}
          <div className="hidden md:flex">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-5 lg:px-6 py-2 md:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${isScrolled ? "text-gray-800 bg-white" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg fixed top-20 left-0 w-full border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded-md text-lg font-medium text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="px-4 py-2">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors text-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}