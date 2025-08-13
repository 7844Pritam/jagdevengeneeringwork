import React from "react";
import img from '../../assets/collageimg.jpg';
import img2 from '../../assets/collagesmall.avif';

const CompanyProfile = () => {
  return (
    <div className="bg-white-50 flex justify-center ">
      <div className="max-w-7xl  py-12 ">

      <div className="flex flex-col md:flex-row gap-16   items-center justify-center">
        <div className="w-full border rounded-2xl border-gray-200 p-4 relative flex justify-center md:w-1/2">
          <img
      
            src={img}
            alt="BA Production Line"
            className="rounded-lg w-[400px]  shadow object-cover"
          />
          <div className="absolute -bottom-15 -right-0">

          <img
      
            src={img2}
            alt="BA Production Line"
            className="rounded-lg w-[200px]  shadow object-cover"
          />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-orange-400 font-semibold text-sm mb-2 uppercase">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-left md:text-left">
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
            qualified and skilled team members. Their hard work and constant efforts
            have taken the organization to new heights of success. We strongly
            believe in providing positive client satisfaction. Our customer-centric
            approach has been appreciated among our wide client base spread all
            across the world. The complete range of our products are extremely
            demanded for its optimum quality.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
