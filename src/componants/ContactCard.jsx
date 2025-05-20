import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import React from "react";

const ContactCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f0fae9] py-10 px-6 flex justify-center items-center"
    >
      <div className="bg-white rounded-3xl flex flex-col md:flex-row shadow-lg overflow-hidden max-w-6xl w-full">
        {/* Image */}
        <img
          src="https://i.imgur.com/x4nR94P.jpg" // Replace with your actual image path or import
          alt="roof"
          className="w-full md:w-1/2 object-cover rounded-3xl md:rounded-r-none"
        />

        {/* Text Content */}
        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-900 text-white p-4 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Have Questions?{" "}
                <span className="text-green-500">Call Us</span>
              </h2>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                +91-9455277443,8319950259
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-base md:text-lg">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
