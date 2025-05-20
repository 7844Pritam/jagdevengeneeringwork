/* File: Features.js */
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-6 md:p-10 bg-gray-100"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Warehouse Construction Technology
      </h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-gray-600 text-sm md:text-base">
            Our company uses advanced frame technology, providing durability and speed in construction. Some of the best solutions are used to ensure longevity.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
            alt="Warehouse Frame"
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">High Durability</h4>
          <p className="text-sm">Non-corrosive materials ensure long-term reliability.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Energy Efficiency</h4>
          <p className="text-sm">Designed to reduce energy costs effectively.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Quick Assembly</h4>
          <p className="text-sm">Built faster with modular designs.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;