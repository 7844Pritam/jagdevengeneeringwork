import React from "react";
import rollforming1 from "../../assets/rollforming1.jpg";
import sheet1 from "../../assets/sheet1.jpg";

const GISheetPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
          GI Sheet Manufacturing
        </h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={rollforming1}
            alt="GI Sheet"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 text-justify">
              At JEW Steel, we manufacture premium GI (Galvanized Iron) sheets with uniform zinc
              coating, corrosion resistance, and durability. Our sheets are available in thickness
              ranging from 0.30 mm to 3.00 mm, and coating grades from 80 GSM to 275 GSM, suitable
              for roofing, cladding, ducting, and fabrication.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
          Applications of GI Roofing Sheets
        </h3>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="md:w-1/2 flex flex-col justify-center text-gray-700 space-y-2">
            <ul className="space-y-2">
              <li><span className="font-semibold text-orange-400">Industrial:</span> Roofing for warehouses and sheds.</li>
              <li><span className="font-semibold text-orange-400">Residential:</span> Affordable housing solutions.</li>
              <li><span className="font-semibold text-orange-400">Commercial:</span> Shops, garages, storage units.</li>
              <li><span className="font-semibold text-orange-400">Agriculture:</span> Poultry farms, cattle sheds, grain storage.</li>
              <li><span className="font-semibold text-orange-400">Prefabricated:</span> Portable cabins and housing.</li>
              <li><span className="font-semibold text-orange-400">Outdoor:</span> Machinery and equipment shelters.</li>
            </ul>
          </div>
          <img
            src={sheet1}
            alt="GI Roofing"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Excellent corrosion resistance.</li>
          <li>Durable and long-lasting in extreme conditions.</li>
          <li>Available in multiple thicknesses and sizes.</li>
          <li>Eco-friendly and recyclable.</li>
        </ul>
      </div>
    </div>
  );
};

export default GISheetPage;
