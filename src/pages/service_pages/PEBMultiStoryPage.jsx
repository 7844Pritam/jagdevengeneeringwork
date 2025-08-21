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
            <p className="text-small text-gray-700 text-justify">
              Pre-Engineered Multi-Storey Buildings are modern, efficient, and cost-effective solutions for industrial, commercial, and residential applications. Unlike conventional concrete structures, PEB multi-storey buildings are designed and manufactured using high-strength steel, ensuring faster construction, superior durability, and optimized space utilization.These buildings are ideal for factories, warehouses, office complexes, malls, hospitals, and other large-scale facilities where speed, strength, and flexibility are crucial. The modular design allows easy future expansion, while the lightweight steel framework reduces foundation costs.
            </p>
            <p className="text-small text-gray-700 text-justify">
              Our PEB multi-storey buildings are manufactured in a controlled environment, ensuring precision, quality, and faster project delivery. The steel framework is lightweight yet highly durable, reducing foundation costs and allowing flexibility in design. Whether it is for factories, warehouses, corporate offices, hospitals, educational institutions, malls, or residential complexes, PEB multi-storey buildings are an ideal choice.
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
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Advantages of Multi-Storey PEB Structures:</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Faster Construction: Pre-fabricated components ensure quick on-site assembly, saving valuable time.</li>
          <li>Cost-Effective: Reduced labor, faster installation, and minimal wastage make it budget-friendly.</li>
          <li>Durability: Built with high-strength steel for long-lasting performance and low maintenance.</li>
          <li>Flexible Design: Wide clear spans, column-free spaces, and customizable layouts.</li>
          <li>Eco-Friendly: Recyclable steel and sustainable building methods reduce environmental impact.</li>
          <li>Expansion-Friendly: Structures can be easily expanded vertically or horizontally without major modifications.</li>
        </ul>
      </div>
    </div>
  );
};

export default PEBMultiStoryPage;
