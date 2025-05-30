import React from "react";
import BuildingImg from "../assets/about-2.jpg"; // Replace with your actual image path
import StructureImg from "../assets/about-2.jpg"; // Replace with your actual image path
import MyHeading from "./MyHeadaing";

const AboutSection = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Images */}
        <div className="relative w-full md:w-1/2">
          <img
            src={BuildingImg}
            alt="Building"
            className="w-full rounded-3xl shadow-md"
          />
          <img
            src={StructureImg}
            alt="Structure"
            className="absolute -bottom-10 -left-10 w-2/4 rounded-2xl border-4 border-white shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <p className="text-[#f18e02] font-extrabold uppercase text-3xl mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-3xl font-bold text-[#1b3c0d] mb-6 leading-snug">
         Jagdev Engineering Works
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Jagdev Engineering Works is a trusted name in the roofing industry, known for delivering top-quality tin roofing solutions. With years of experience and a commitment to excellence, we provide durable and cost-effective roofing sheets for residential, commercial, and industrial applications.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our expertise lies in manufacturing and supplying high-strength tin roofing that withstands harsh weather conditions while maintaining aesthetic appeal. Whether you need standard roofing sheets or customized designs, our solutions are tailored to meet your unique requirements. At Jagdev Engineering Works, customer satisfaction and quality craftsmanship are at the core of everything we do.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-8">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <strong>High-Quality Materials</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <strong>Customizable Solutions</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <strong>Competitive Pricing</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✔</span>
              <strong>24 X 7 Call & Chat Support</strong>
            </div>
          </div>

          <button className="bg-[#f18e02] hover:bg-[#d57c01] text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
            More About
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
