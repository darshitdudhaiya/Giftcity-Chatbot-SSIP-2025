import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="/">
              <div className="flex items-center mb-8">
                <img src="/placeholder.svg?height=50&width=150" alt="GIFT City Logo" className="h-12 w-auto" />
              </div>
            </a>
            <p className="text-gray-400 mb-8 text-lg">
              A world-class business district designed to foster innovation, growth, and sustainable development.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {["About Us", "Services", "Ecosystem", "Opportunities", "News & Events", "Contact Us"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-emerald-500 transition-colors text-lg">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-400 text-lg">GIFT City, Gandhinagar, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-500 mr-3" />
                <span className="text-gray-400 text-lg">+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-500 mr-3" />
                <span className="text-gray-400 text-lg">info@giftcity.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Newsletter</h3>
            <p className="text-gray-400 mb-6 text-lg">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="space-y-4">
              <div className="flex flex-col space-y-3">
                <input type="email" placeholder="Your email address" className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md text-lg" />
                <motion.button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-md text-lg font-medium" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-base mb-4 md:mb-0">© {new Date().getFullYear()} GIFT City. All rights reserved.</p>
          <div className="flex space-x-8">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item, index) => (
              <a key={index} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-emerald-500 text-base transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
