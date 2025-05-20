/* File: Navbar.js */
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center "
    >
      <div className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0">
        JEW
      </div>
      <div className="flex  space-x-6 space-y-2 md:space-y-0 items-center">
        <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    
    </motion.nav>
  );
};

export default Navbar;