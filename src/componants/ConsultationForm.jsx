"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebasedb";

export default function ConsultationForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docId = `${formData.email}_${Date.now()}`; // Unique ID for each submission
      await setDoc(doc(collection(db, "consultations"), docId), {
        ...formData,
        date: new Date().toISOString(),
        status: "New",
      });
      // Show success toast
      toast.success("Your consultation request has been submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      // Reset form
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      toast.error("Failed to submit. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-[#f5f3e9] min-h-screen md:p-32 p-6 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl bg-white rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8"
      >
        {/* Left Content */}
        <motion.div variants={childVariants} className="flex-1 min-w-0">
          <h2 className="text-amber-600 tracking-wider text-sm font-medium uppercase mb-3">
            JAGDEV ENGINEERING WORKS
          </h2>
          
          <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a2e05] leading-snug mb-4">
            Book Your <br /> Free Consultation
          </h5>
          <p className="text-gray-600 text-base text-justify">
            Fill out the form to schedule a free initial consultation and site
            assessment with our experts. We’ll discuss your requirements and
            provide tailored solutions for your project.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          variants={childVariants}
          className="flex-1 flex flex-col gap-5 w-full"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Your full name"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Your email address"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative flex-1">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Your phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md h-40"
              aria-label="Your message"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <motion.div variants={childVariants} className="flex justify-start">
            <button
              type="submit"
              className="px-8 py-3.5 text-white bg-amber-500 text-[#1a2e05] font-semibold rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
      <ToastContainer />
    </div>
  );
}