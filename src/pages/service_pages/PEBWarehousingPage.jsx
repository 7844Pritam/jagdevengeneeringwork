import React from "react";
import werehouse1 from "../../assets/werehouse1.jpg";
import werehouse11 from "../../assets/werehouse11.jpg";

const PEBWarehousingPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
          PEB Warehousing
        </h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={werehouse1}
            alt="PEB Warehouse"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 text-justify">
              A Pre-Engineered Warehouse is a precision-engineered structure designed to optimize
              storage capacity and efficiency. Fabricated using advanced CAD/CAM and CNC technology,
              these warehouses ensure dimensional accuracy and quick installation with modular,
              bolted assembly.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
          Applications of Pre-Engineered Warehouses
        </h3>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="md:w-1/2 flex flex-col justify-center space-y-2 text-gray-700">
            <ul className="space-y-2">
              <li><span className="font-semibold text-orange-400">Industrial Storage:</span> Raw materials, machinery, goods.</li>
              <li><span className="font-semibold text-orange-400">E-commerce & Retail:</span> Fulfillment centers, automation-ready.</li>
              <li><span className="font-semibold text-orange-400">Automobile:</span> Storage of spares and components.</li>
              <li><span className="font-semibold text-orange-400">Pharma:</span> Temperature-controlled storage.</li>
              <li><span className="font-semibold text-orange-400">FMCG:</span> Quick distribution centers.</li>
              <li><span className="font-semibold text-orange-400">Cold Storage:</span> Refrigerated food & dairy storage.</li>
            </ul>
          </div>
          <img
            src={werehouse11}
            alt="Warehouse Storage"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Supports thermal and acoustic insulation.</li>
          <li>Weather-resistant and corrosion-protected steel.</li>
          <li>Fire and safety compliant with industrial norms.</li>
          <li>Option for mezzanine floors and office spaces.</li>
        </ul>
      </div>
    </div>
  );
};

export default PEBWarehousingPage;
