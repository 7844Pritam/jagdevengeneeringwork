import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#0F2F05] text-white font-sans">
      {/* Top Office Locations Section */}
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left py-10 px-4 md:px-16 bg-[#0F2F05]">
        {[
          {
            title: "Corporate Office",
            address: "1/844 Vardan Khand Sector 1\nGomtinagar Lucknow, 226010.",
          },
          {
            title: "Plant 1",
            address: "Khasara No.- 86 Daud Nargar,Near Kisan Path, Lucknow",
          },
          {
            title: "Plant 2",
            address: "Chorpa Kala Market, Mau U.P India.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center  md:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="bg-lime-400 p-4 rounded-2xl mb-2">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </div>
            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-sm whitespace-pre-line">{item.address}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-lime-500/20 my-2"></div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-4 md:px-16 py-10 text-sm">
        {/* Logo and Description */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/logo.png" alt="Jagdev Engineering Works" className="w-40 mb-4" />
          <p className="text-white/90">
            At Jagdev Engineering Works, we specialize in high-quality roofing solutions tailored to meet the needs of residential, commercial, and industrial projects.
          </p>
          <div className="flex space-x-4 mt-4 text-lime-400">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1 text-white/80">
            <li>• Home</li>
            <li>• About Us</li>
            <li>• Services</li>
            <li>• Contact Us</li>
          </ul>
        </motion.div>

        {/* Policies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="font-semibold text-lg mb-2">Policies</h4>
          <ul className="space-y-1 text-white/80">
            <li>• Privacy Policy</li>
            <li>• Term & Conditions</li>
          </ul>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4240566523256!2d80.94615977521048!3d26.86187467667202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a49e2d4719%3A0x7bb0435cb469dcec!2sLucknow!5e0!3m2!1sen!2sin!4v1682056984434!5m2!1sen!2sin"
            className="w-full h-40 rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lime-400/20 mt-4 py-6 text-center text-sm text-white/70">
        Copyright © 2025 Difmo Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
