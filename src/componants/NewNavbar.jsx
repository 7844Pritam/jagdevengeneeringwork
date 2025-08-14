import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/cmdlogo.svg";
import { useNavigate } from "react-router-dom";

const NewNavbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const link =
    "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/jagdevimg%2FBrochure%20JEW.pdf?alt=media&token=d88745ae-7cbf-4fe7-b7b4-62e75369013c";
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false); // close menu on mobile after navigation
  };

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img src={logo} width={50} height={50} alt="JEW Pvt. Ltd. Logo" />
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 flex items-center">
            <span>JEW Steel</span>
            <sup className="text-xs align-super ml-1">®</sup>
          </div>
        </div>

        {/* Contact Info - Hidden on small screens */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#f18e02] rounded-full p-2 text-white">
              <FaPhone />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Toll Free Number</p>
              <p className="text-black font-semibold">+91-8319950259</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#f18e02] rounded-full p-2 text-white">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Send Us Mail</p>
              <p className="text-black font-semibold">jewanilyadav@gmail.com</p>
            </div>
          </div>

          <a
            href={link}
            className="bg-gradient-to-r from-black to-[#f18e02] text-white px-5 py-2 rounded"
          >
            DOWNLOAD BROCHURE →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-2xl text-[#f18e02]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-[#f18e02]">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-8 font-bold text-white text-sm py-3">
          <li className="cursor-pointer" onClick={handleHomeClick}>Home</li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            About <span>▼</span>
            {isAboutOpen && (
              <ul className="absolute z-50 top-full left-0 bg-white text-black rounded shadow-lg w-48">
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/directors')}>Our Director</li>
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/profile')}>Company Profile</li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            Our Services <span>▼</span>
            {isServicesOpen && (
              <ul className="absolute z-50 top-full left-0 bg-white text-black rounded shadow-lg w-64">
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/peb-multi-story-building')}>PEB Multi Story Building</li>
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/peb-warehousing')}>PEB Warehousing</li>
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/gi-sheet-manufacturing')}>GI Sheet Manufacturing</li>
                <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/industrial-shed')}>Industrial Shed</li>
              </ul>
            )}
          </li>

          <li onClick={() => navigate('/our-project')} className="cursor-pointer">Our Project</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer" onClick={() => navigate('/career')}>Career</li>
          <li className="cursor-pointer" onClick={() => navigate('/contact-us')}>Contact</li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col lg:hidden font-bold text-white text-base p-4 gap-4">
            <li onClick={handleHomeClick}>Home</li>

            <li onClick={() => setIsAboutOpen(!isAboutOpen)}>
              About <span>▼</span>
              {isAboutOpen && (
                <ul className="bg-white text-black rounded mt-2">
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/directors')}>Our Director</li>
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/profile')}>Company Profile</li>
                </ul>
              )}
            </li>

            <li onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Our Services <span>▼</span>
              {isServicesOpen && (
                <ul className="bg-white text-black rounded mt-2">
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/peb-multi-story-building')}>PEB Multi Story Building</li>
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/peb-warehousing')}>PEB Warehousing</li>
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/gi-sheet-manufacturing')}>GI Sheet Manufacturing</li>
                  <li className="px-4 py-2 hover:bg-gray-100" onClick={() => navigate('/service/industrial-shed')}>Industrial Shed</li>
                </ul>
              )}
            </li>

            <li>Our Project</li>
            <li>Blog</li>
            <li onClick={() => navigate('/career')}>Career</li>
            <li onClick={() => navigate('/contact-us')}>Contact</li>

            <a
              href={link}
              className="bg-gradient-to-r from-black to-[#f18e02] text-white px-4 py-2 rounded mt-2 text-center"
            >
              DOWNLOAD BROCHURE →
            </a>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NewNavbar;
