import React from "react";
import pebmultistory from "../../assets/pebmultistory.jpg";
import pebmultistory1 from "../../assets/pebmultistory1.jpg";

const PEBMultiStoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
          PEB Multi Story Building
        </h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={pebmultistory}
            alt="PEB Multi Story"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 text-justify">
              Pre-Engineered Multi-Story Buildings (PEMBs) are modern, factory-fabricated steel
              structures designed with precision and assembled quickly on-site, offering a
              cost-effective and time-efficient alternative to conventional buildings. Engineered to
              meet international standards (AISC, MBMA, IS 800), these buildings ensure safety,
              durability, and compliance with seismic and wind load requirements.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
          Applications of Pre-Engineered Multi-Story Buildings
        </h3>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="md:w-1/2 flex flex-col justify-center text-justify space-y-3">
            <p className="text-gray-700">
              PEMBs are used for a variety of sectors, including commercial, hospitality, sports,
              healthcare, transport, and industry. They provide flexible, lightweight, and durable
              frames with column-free interior spaces.
            </p>
            <ul className="space-y-2">
              <li><span className="font-semibold text-orange-400">Commercial:</span> Offices, malls, IT hubs.</li>
              <li><span className="font-semibold text-orange-400">Hospitality:</span> Hotels, resorts, banquet halls.</li>
              <li><span className="font-semibold text-orange-400">Sports:</span> Indoor stadiums, gyms, halls.</li>
              <li><span className="font-semibold text-orange-400">Healthcare:</span> Hospitals, labs, wellness centers.</li>
              <li><span className="font-semibold text-orange-400">Infrastructure:</span> Airports, stations, parking garages.</li>
              <li><span className="font-semibold text-orange-400">Industry:</span> Warehouses, manufacturing units, cold storage.</li>
            </ul>
          </div>
          <img
            src={pebmultistory1}
            alt="PEB Applications"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Fast installation with reduced construction time.</li>
          <li>Cost-effective steel framework.</li>
          <li>Highly customizable design.</li>
          <li>Compliance with international building codes and standards.</li>
        </ul>
      </div>
    </div>
  );
};

export default PEBMultiStoryPage;
