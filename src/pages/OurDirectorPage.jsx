import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import od from "../assets/Ourdirector.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const OurDirectorPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans antialiased">
      {/* Director Intro */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
          {/* Director Text */}
          <motion.div variants={fadeIn} className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
              Our Director
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              I started this company with a clear vision — to deliver reliable, high-quality Pre-Engineered Building (PEB) solutions that combine technical excellence with a commitment to customer satisfaction.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              At JEW Steel Pvt. Ltd., our journey has always been guided by hard work, innovation, and a strong commitment to quality. From manufacturing high-grade Pre-Engineering Buildings to durable GI Sheets, our focus is on delivering solutions that add real value to our clients and partners.
            </p>
             <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              What makes our company strong is not just the technology we use, but the people behind it. I deeply appreciate the dedication of our employees, staff, and workers whose continuous efforts have helped us achieve every milestone. Together, we are building not only trusted products but also a culture of reliability, safety, and progress.Our goal is to set new benchmarks in the steel and construction industry by combining modern engineering with sustainable practices. Looking ahead, we aim to expand our capabilities, strengthen our relationships, and contribute to the growth of our nation’s infrastructure.
            </p>
             <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              At Jagdev Engineering Works, we build more than structures — we build trust and lasting relationships.
            </p>  
            <blockquote className="italic text-orange-400 font-semibold text-lg mt-4">
              "Build with purpose, lead with passion."
            </blockquote>
          </motion.div>

          {/* Director Image */}
          <motion.div variants={fadeIn} className="flex flex-col items-center">
            <img
              src={od}
              alt="Er. Anil Yadav - Director"
              className="w-full max-w-[320px] h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg sm:text-xl font-semibold">Er. Anil Yadav</h2>
              <p className="text-sm text-gray-500">Founder & Director</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50"
      >
        <motion.div variants={fadeIn} className="max-w-5xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            At <strong>Jagdev Engineering Works (JEW)</strong>, we specialize in high-quality Pre-Engineered Buildings (PEB) & GI Sheet Manufacturing solutions backed by 20+ years of experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Vision */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-orange-400 w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-justify text-sm sm:text-base">
              To be recognized as a leading and trusted player in the steel and infrastructure industry, known for engineering excellence, cutting-edge solutions, and uncompromised safety standards. Our vision is to create landmark structures, long-term value, and global competitiveness by embracing modern manufacturing technologies, green practices, and customer-centric strategies, shaping a stronger and sustainable future.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-orange-400 w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-justify text-sm sm:text-base">
               Deliver world-class Pre-Engineered Buildings (PEB) and Galvanized Iron (GI) Sheets with superior strength, durability, and precision. We are dedicated to ensuring structural integrity, cost efficiency, and sustainability in every project while empowering our workforce and exceeding customer expectations through innovation, advanced technology, and quality-driven practices.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurDirectorPage;
