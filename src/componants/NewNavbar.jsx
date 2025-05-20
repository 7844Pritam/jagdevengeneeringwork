import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const NewNavbar = () => {
  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold text-gray-800 flex items-center">
            <img src='src/assets/cmdlogo.svg' width={60} height={60}/>
            <span>JEW Pvt. Ltd.</span>
            <sup className="text-xs align-super ml-1">®</sup>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6">
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

          <button className="bg-gradient-to-r from-black to-[#f18e02] text-white px-5 py-2 rounded">
            GET A QUOTE →
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
       <nav className="bg-[#f18e02] px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Empty space to align items right */}
          <div></div>
          {/* Menu items */}
          <ul className="flex items-center gap-8 font-bold text-white text-sm uppercase">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About <span>▼</span></li>
            <li className="cursor-pointer">Our Services <span>▼</span></li>
            <li className="cursor-pointer">Why JWE <span>▼</span></li>
            <li className="cursor-pointer">Our Projects</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NewNavbar;
