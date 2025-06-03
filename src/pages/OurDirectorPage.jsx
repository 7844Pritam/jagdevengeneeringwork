import React from 'react';
import { motion } from 'framer-motion';
import od from "../assets/Ourdirector.jpeg";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const OurDirectorPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans antialiased">
      {/* Director Intro */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative bg-white py-20 px-6 sm:px-10 lg:px-20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex justify-around lg:flex-row  gap-16">
          {/* Director Text */}
          <motion.div variants={fadeIn} className="lg:w-1/2 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-snug tracking-tight">
              Our Director
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              I started this company with a clear vision — to deliver reliable, high-quality Pre-Engineered Building (PEB) solutions that combine technical excellence with a commitment to customer satisfaction.
              With over 20 years of experience, I believe thoughtful design, skilled engineering, and honest work create lasting value.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              At Jagdev Engineering Works, we build more than structures — we build trust and lasting relationships. Whether you're planning a warehouse, industrial facility, or a custom steel structure, we bring your vision to life with precision and care.
            </p>
            <blockquote className="italic text-orange-400 font-semibold text-lg mt-4">
              "Build with purpose, lead with passion."
            </blockquote>
          </motion.div>

          {/* Director Image */}
          <motion.div variants={fadeIn} className="flex flex-col items-center justify-end">
            <img
              src={od}
              alt="Er. Anil Yadav - Director"
              className="w-[320px] h-[420px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">Er. Anil Yadav</h2>
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
        className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50"
      >
        <motion.div variants={fadeIn} className="max-w-5xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            At <strong>Jagdev Engineering Works (JEW)</strong>, we specialize in high-quality Pre-Engineered Buildings (PEB) & GI Sheet Manufacturing solutions backed by 20+ years of experience. From design to execution, our end-to-end services emphasize innovation, precision, and trust. Whether industrial buildings or custom steel structures, we prioritize strength, sustainability, and timely delivery.
          </p>
        </motion.div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-20 px-6 sm:px-10 lg:px-20 bg-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-justify">
              To be a trusted leader in the steel building industry. We aim to build smarter and with greater value — helping businesses grow with modern, safe, and affordable construction solutions.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeIn}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-justify">
              We are committed to delivering durable, cost-effective, and innovative pre-engineered buildings and GI sheets. Our mission is rooted in quality craftsmanship, timely execution, and exceptional customer service.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurDirectorPage;
