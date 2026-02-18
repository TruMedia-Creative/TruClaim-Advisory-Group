import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/brokerages', label: 'Our Brokerages' },
    { path: '/philosophy', label: 'Philosophy' },
    { path: '/mjak', label: 'M-JAK' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-royal-800 to-royal-600 rounded-full flex items-center justify-center">
                <span className="text-gold-500 font-bold text-xl">ISG</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-royal-800 font-display font-bold text-xl">Insurance Specialty Group</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-royal-800 text-white'
                    : 'text-gray-700 hover:bg-royal-50 hover:text-royal-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/partner-login"
              className="ml-4 px-4 py-2 bg-gold-500 text-royal-900 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-200"
            >
              Partner Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-royal-800 text-white'
                      : 'text-gray-700 hover:bg-royal-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/partner-login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-gold-500 text-royal-900 rounded-lg font-semibold text-center"
              >
                Partner Access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
