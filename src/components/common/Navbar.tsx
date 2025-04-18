import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Compass className="h-8 w-8 text-saffron-500 mr-2" />
              </motion.div>
              <span className="font-heading text-2xl font-bold text-maroon-700">Jatra</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-maroon-800 hover:text-saffron-500 transition px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/scheduler" className="text-maroon-800 hover:text-saffron-500 transition px-3 py-2 rounded-md text-sm font-medium">
              Plan Journey
            </Link>
            <Link to="/about" className="text-maroon-800 hover:text-saffron-500 transition px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-maroon-700 hover:text-saffron-500 hover:bg-cream-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-50">
          <Link 
            to="/" 
            className="text-maroon-800 hover:bg-cream-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/scheduler" 
            className="text-maroon-800 hover:bg-cream-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Plan Journey
          </Link>
          <Link 
            to="/about" 
            className="text-maroon-800 hover:bg-cream-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;