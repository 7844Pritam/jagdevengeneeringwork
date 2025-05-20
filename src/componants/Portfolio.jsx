/* File: Portfolio.js */
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: "Warehouse 1", price: "₹ 1,800,000", size: "71m²", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
    { title: "Warehouse 2", price: "₹ 2,100,000", size: "94m²", img: "https://images.unsplash.com/photo-1586528116311-a3b12a9f336f?w=800" },
    { title: "Warehouse 3", price: "₹ 1,600,000", size: "85m²", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
    { title: "Warehouse 4", price: "₹ 2,500,000", size: "60m²", img: "https://images.unsplash.com/photo-1586528116311-a3b12a9f336f?w=800" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-6 md:p-10 bg-white"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Our Projects in 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={project.img} alt={project.title} className="w-full h-40 md:h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
              <p className="text-gray-600 text-sm">{project.price}, {project.size}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base">
          View More
        </button>
      </div>
    </motion.section>
  );
};

export default Portfolio;