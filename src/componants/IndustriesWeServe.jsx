import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const industries = [
  "Warehouses",
  "Power Plants",
  "Aircraft Hangers",
  "Airport Terminal Buildings",
  "Auditoriums",
  "Factory Sheds",
  "Railway Platforms",
  "Transport Terminals",
  "Hospitals",
  "Residential Buildings",
  "Clean Rooms/ Cold Storage",
  "Defence Setups",
  "Multi-Level Parking Area",
  "Recreation Park",
  "Shopping Malls",
  "Showrooms",
  "Sports Stadiums",
  "Distribution Centers",
  "Service Station",
  "Convention Halls",
];

const IndustriesWeServe = () => {
return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 text-left">
        <div className="max-w-7xl mx-auto">
            <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-widest mb-2">
                JAGDEV ENGINEERING WORKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2B0F] mb-8">
                Transforming Industries through ground breaking innovation.
            </h2>

            {/* Industry list */}
            <div className="flex flex-wrap justify-start gap-x-8 gap-y-4  mx-auto mt-6">
                {industries.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-[#1C2B0F] font-medium text-base"
                    >
                        <FaCheckCircle className="text-orange-400" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default IndustriesWeServe;
