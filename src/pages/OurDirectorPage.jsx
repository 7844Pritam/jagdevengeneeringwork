import React from 'react';
import { motion } from 'framer-motion';
// import directorImage from '../assets/director-image.jpg'; // Placeholder image path

const OurDirectorPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Intro Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <motion.div variants={fadeIn} className="lg:w-1/2">
            <img
              src={"https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
              alt="Our Director"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div variants={fadeIn} className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Director
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our director, with over 20 years of industry experience, leads JEW Pvt. Ltd. with a vision for innovation and excellence. Their leadership drives our commitment to delivering cutting-edge solutions and fostering a culture of creativity and collaboration.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeIn} className="text-3xl font-semibold text-gray-800 mb-12">
            Vision & Mission
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in innovative solutions, transforming industries through creativity, technology, and sustainable practices.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower our clients with cutting-edge solutions, fostering growth and success while maintaining a commitment to quality and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeIn} className="text-3xl font-semibold text-gray-800 mb-12">
            What People Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "JEW Pvt. Ltd. transformed our business with their innovative approach. The director's vision is truly inspiring!"
              </p>
              <p className="text-orange-600 font-semibold">— Sarah M., CEO</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "The leadership at JEW Pvt. Ltd. sets a high standard for excellence. Their solutions are top-notch."
              </p>
              <p className="text-orange-600 font-semibold">— John D., Entrepreneur</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "Working with JEW Pvt. Ltd. has been a game-changer. Their director's commitment to quality is unmatched."
              </p>
              <p className="text-orange-600 font-semibold">— Emily R., Project Manager</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurDirectorPage;