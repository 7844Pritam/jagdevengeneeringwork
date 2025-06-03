import React from "react";

const CompanyProfile = () => {
  return (
    <div className="bg-green-50 py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/ba-line.jpg"
            alt="BA Production Line"
            className="rounded-lg shadow"
          />
          <img
            src="/images/2b-line.jpg"
            alt="2B Production Line"
            className="rounded-lg shadow"
          />
          <img
            src="/images/sheet-cutting.jpg"
            alt="Sheet Cutting Line"
            className="rounded-lg shadow"
          />
          <img
            src="/images/slitting-line.jpg"
            alt="Slitting Line"
            className="rounded-lg shadow"
          />
          <img
            src="/images/stainless-warehouse.jpg"
            alt="Stainless Steel Coil Warehouse"
            className="rounded-lg shadow col-span-1"
          />
          <img
            src="/images/coil-machine.jpg"
            alt="Steel Coil Machine"
            className="rounded-lg shadow col-span-1"
          />
        </div>

        {/* Text Section */}
        <div>
          <h4 className="text-orange-400 font-semibold text-sm mb-2 uppercase">
            
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-6 text-center">
            Company Profile
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            JEW reckoned as one of the noted manufacturers and suppliers in the
            industry. Our comprehensive range includes Pre-Engineered Building
            System, Primary Framing System, Secondary Framing System, JEW Hi-Rib
            Roofing, Clip Cook Roofing, Flashing and Trims, Turbo Vents, Louvers,
            Lay-in-Tile, Lay-in-Tile (Gypsum), Roll Forming Machines and others. All
            our range of products are fabricated using high grade raw materials
            which are purchased from trusted and reliable vendors present in the
            market.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our company has enhanced extensively under the supervision of our well
            qualified and skilled team members, their hard work and constant efforts
            have taken the organization to new heights of success. We strongly
            believe in providing positive client satisfaction. Our customer-centric
            approach has been appreciated among our wide client base spread all
            across the world. The complete range of our products are extremely
            demanded for its optimum quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
