/* File: Stats.js */
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-around p-6 md:p-10 "
    >
      <div className="text-center mb-6 md:mb-0">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-800">65+</h3>
        <p className="text-gray-600 text-sm md:text-base">Completed Projects</p>
      </div>
      <div className="text-center mb-6 md:mb-0">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-800">7+</h3>
        <p className="text-gray-600 text-sm md:text-base">Years in Business</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-800">180+</h3>
        <p className="text-gray-600 text-sm md:text-base">Satisfied Clients</p>
      </div>
    </motion.section>
  );
};

export default Stats;