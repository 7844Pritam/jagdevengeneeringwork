import { motion } from "framer-motion";
import React from "react";

export default function ConsultationForm() {
  return (
    <div className="bg-[#fffdf4] py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white rounded-[40px] px-10 py-16 flex flex-col md:flex-row justify-between gap-10"
      >
        {/* Left Content */}
        <div className="max-w-md">
          <h4 className="text-orange-500 tracking-widest font-semibold mb-2">
            JAGDEV ENGINEERING WORKS
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#102900] leading-tight">
            Initial Consultation & <br /> Site Assessment
          </h2>
        </div>

        {/* Right Form */}
        <form className="flex flex-col gap-4 w-full md:max-w-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <select className="w-full p-4 rounded-lg bg-white shadow text-gray-600 outline-none">
              <option>Category</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg bg-white shadow text-gray-600 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-lg bg-white shadow text-gray-600 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-4 rounded-lg bg-white shadow text-gray-600 outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="mt-2 px-8 py-4 bg-orange-400 text-black font-semibold rounded-full shadow hover:bg-orange-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
