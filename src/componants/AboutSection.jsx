import React from "react";
import BuildingImg from "../assets/about-2.jpg"; // Replace with your actual image path
import StructureImg from "../assets/Sheet Image.jpg"; // Replace with your actual image path
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
          <p className="text-gray-600 mb-2 leading-relaxed">
           Welcome to JEW Steel, your trusted partner in building the future with strength, precision, and reliability.
          </p>
          <p className="text-gray-600 mb-2 leading-relaxed">
            We specialize in the design, fabrication, and installation of Pre-Engineered Buildings (PEBs) for a wide range of applications, including multi-story buildings, warehouses, industrial plants, factories, and more. Our structures are engineered for durability, cost-efficiency, and fast project turnaround, meeting the diverse needs of modern infrastructure development.
          </p>
          <p className="text-gray-600 mb-2 leading-relaxed">
            In addition to our construction expertise, we also manufacture high-quality Galvanized Iron (GI) roofing sheets, sourcing premium materials from some of the most reputable brands in the industry. Whether you’re building from the ground up or enhancing an existing structure, our roofing solutions offer long-lasting protection, energy efficiency, and aesthetic appeal.
          </p>
          <p className="text-gray-600 mb-2 leading-relaxed font-bold">
            Let’s build something remarkable together.


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

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
