import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/cmdlogo.svg';
import { useNavigate } from 'react-router-dom';

const NewNavbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const link = "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/jagdevimg%2FJeW.pdf?alt=media&token=33d354cf-b60d-48cb-91d8-e00613dd3ac9";
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleHomeClick}>
          <img src={logo} width={60} height={60} alt="JEW Pvt. Ltd. Logo" />
          <div className="text-3xl font-bold text-gray-800 flex items-center">
            <span>JEW Pvt. Ltd.</span>
            <sup className="text-xs align-super ml-1">®</sup>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#f18e02] rounded-full p-2 text-white"><FaPhone /></div>
            <div>
              <p className="text-gray-500 text-sm">Toll Free Number</p>
              <p className="text-black font-semibold">+91-8319950259</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#f18e02] rounded-full p-2 text-white"><FaEnvelope /></div>
            <div>
              <p className="text-gray-500 text-sm">Send Us Mail</p>
              <p className="text-black font-semibold">jewanilyadav@gmail.com</p>
            </div>
          </div>

          <a href={link} className="bg-gradient-to-r from-black to-[#f18e02] text-white px-5 py-2 rounded">
            DOWNLOAD BROCHURE →
          </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-[#f18e02] px-6 py-3">
        <div className="flex justify-between items-center">
          <div></div>
          <ul className="flex items-center gap-8 font-bold text-white text-sm">
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

            <li className="cursor-pointer">Our Project <span>▼</span></li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer" onClick={() => navigate('/career')}>Career</li>
            <li className="cursor-pointer" onClick={() => navigate('/contact-us')}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NewNavbar;
