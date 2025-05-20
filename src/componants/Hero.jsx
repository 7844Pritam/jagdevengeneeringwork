// File: Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

// Move Card above Hero
const Card = ({ number, label }) => {
  return (
    <div className="text-center flex flex-col rounded-xl justify-center items-center bg-white w-[300px] h-[200px] ">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{number}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex  gap-3 flex-col lg:flex-row items-center rounded-3xl lg:mx-16 py-8"
    >
      <div className="h-[610px]   flex flex-col justify-between lg:w-1/2 mb-8 lg:mb-0 bg-gray-50 rounded-3xl p-8 shadow-md inset-shadow-zinc-500">
        <Navbar />

        <div>
          <h1 className="text-2xl  md:text-4xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Prefabricated Warehouses<br />from 100 m² in Just 3 Months
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            We deliver turnkey warehouse solutions with energy-efficient designs for modern businesses.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm md:text-base">
            Get a Quote
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
          <Card number="180+" label="Satisfied Clients" />
          <Card number="250+" label="Completed Projects" />
          <Card number="95%" label="On-Time Delivery Rate" />
        </div>
      </div>

      <div className="lg:w-1/2">
        <img
          src="https://i.pinimg.com/736x/64/9a/4b/649a4be985046a8d843e894873e360cb.jpg"
          alt="Warehouse"
          className="w-full h-[610px] object-cover rounded-2xl"
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-red-500 to-transparent rounded-full opacity-30 blur-2xl pointer-events-none z-0" /> */}

    </motion.section>
  );
};

export default Hero;
