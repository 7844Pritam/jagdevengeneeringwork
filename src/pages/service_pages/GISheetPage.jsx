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
            <p className="text-small text-gray-700 text-justify">
              At JEW Steel Pvt. Ltd., we specialize in high-quality profile sheet manufacturing, delivering durable and cost-effective roofing and cladding solutions for industrial, commercial, and residential projects. Our advanced roll-forming technology ensures precise dimensions, superior finish, and long-lasting performance in every sheet we produce.Profile sheets are widely used for roofing, wall cladding, and structural covering due to their strength, weather resistance, and low maintenance requirements. We manufacture sheets in various designs, thicknesses, colors, and coatings to meet diverse architectural and industrial needs.
            </p>
            <p className="text-small text-gray-700 text-justify">
              Our profile sheets are manufactured using high-quality Galvanized Iron (GI), Galvalume, or Pre-Painted Galvanized Iron (PPGI) as the base material, ensuring durability and superior strength. The sheets are available in a thickness range of 0.30 mm to 1.20 mm, with an effective cover width between 1000 mm to 1200 mm, depending on the profile design. Standard coil widths of 1220 mm and 1450 mm are used, and the sheets are produced with a yield strength of 240 MPa to 550 MPa to meet varying structural requirements.
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
              <p className="text-gray-700">
              Roofing Sheets are widely used in construction due to their durability, corrosion resistance, and cost-effectiveness. They provide strong protection against weather conditions and are suitable for a wide range of industrial, commercial, and residential projects.Major Applications:
            </p>
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
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Key Features of Roofing Sheet</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>High Durability – Manufactured with premium quality steel for long service life.</li>
          <li>Corrosion Resistance – Special galvanizing and coating ensure protection against rust and harsh weather.</li>
          <li>Lightweight & Strong – Easy to handle and install without compromising strength.</li>
          <li>Excellent Load Bearing Capacity – Designed to withstand heavy wind, rain, and snow loads.</li>
          <li>Energy Efficient Options – Can be manufactured with insulation for better thermal performance.</li>
          <li>Low Maintenance – Requires minimal upkeep compared to traditional roofing materials.</li>
          <li>Customizable Sizes – Sheets can be produced in various lengths and thicknesses as per project requirements.</li>
        </ul>
      </div>
    </div>
  );
};

export default GISheetPage;
