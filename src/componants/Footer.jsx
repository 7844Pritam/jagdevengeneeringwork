import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Phone, Mail } from "lucide-react";
import React from "react";
import logo from '../assets/cmdlogo.svg';

// Locations data
const locations = [
  {
    title: "Corporate Office",
    address: "1/844 Vardan Khand Sector 1\nGomtinagar Lucknow, 226010.",
  },
  {
    title: "Plant 1",
    address: "Khasara No.- 86 Daud Nargar, Near Kisan Path, Lucknow",
  },
  {
    title: "Plant 2",
    address: "Chorpa Kala Market, Mau U.P India.",
  },
];

// Quick Links with URLs
const quickLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact Us", url: "/contact" },
];
const Our_Services = [
  { name: "PEB Multi-Story Building", url: "/" },
  { name: "PEB Werehousing", url: "/about" },
  { name: "GI Sheet Manufacured", url: "/services" },
  { name: "Industrial Shed", url: "/contact" },
];

// Policies with URLs
const policies = [
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms & Conditions", url: "/terms-conditions" },
];

// Social icons with URLs
const socialIcons = [
  { Icon: FaFacebookF, url: "https://facebook.com/yourpage" },
  { Icon: FaLinkedinIn, url: "https://linkedin.com/company/yourcompany" },
  { Icon: FaInstagram, url: "https://instagram.com/yourprofile" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 font-sans transition-all">
      {/* Locations */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 md:px-0">
          {locations.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-6 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="bg-orange-400 p-3 rounded-full shadow text-white inline-block mb-4">
                <FaHouse className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">{item.address}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      {/* Footer Main */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 px-6 md:px-0 py-12 text-sm">
          {/* About */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Jagdev Engineering Works" className="w-12 mb-4" />
            <p className="text-gray-700 text-md">
              JEW offer premium GI Sheet Manufacturing and Pre-Engineered Building solutions designed for speed, strength, and sustainability. Whether you're roofing a factory or constructing a warehouse, our products ensure unmatched performance and cost-efficiency.
            </p>
            <div className="flex space-x-4 mt-6 text-orange-400">
              {socialIcons.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-orange-400 transition"
                  aria-label={`Link to ${url}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-md text-orange-400 font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              {quickLinks.map(({ name, url }, i) => (
                <li key={i} className="hover:text-orange-400 transition">
                  • <a href={url} className="cursor-pointer">{name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-md text-orange-400 font-medium mb-3">Our Service</h4>
            <ul className="space-y-2 text-gray-600">
              {Our_Services.map(({ name, url }, i) => (
                <li key={i} className="hover:text-orange-400 transition">
                  • <a href={url} className="cursor-pointer">{name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-md text-orange-400 font-medium mb-3">Policies</h4>
            <ul className="space-y-2 text-gray-600">
              {policies.map(({ name, url }, i) => (
                <li key={i} className="hover:text-orange-400 cursor-pointer">
                  • <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-md font-medium mb-3 text-orange-400">Contact Us</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">
                  <FaHouse />
                </span>
                <span>
                  1/844 Vardan Khand Sector 1, Gomti Nagar Ext., Lucknow, 226010, India
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+919876543210" className="hover:text-orange-400 transition">+91-8319950259</a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400 mt-1">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:info@jew.com" className="hover:text-orange-400 transition">jewanilyadav@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="bg-orange-400 text-center py-5 text-sm text-white tracking-wide">
        © 2025 Difmo Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}