import React from "react";
import img from '../../assets/werehouse2.jpg'
// import steelRoll from "../assets/steel-roll.jpg"; // Replace with your image path

const PreEngineeringBuilding = () => {
  return (
    <section className="bg-text-white-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Steel Roll"
            className="rounded-lg w-[400px] h-130 shadow object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            PRE ENGINEERING BUILDING
          </h2>
          <p className="mb-4 leading-relaxed text-small text-justify">
            Pre-Engineered Building (PEB) technology is a revolutionary approach to modern construction where every component of a steel structure is designed, engineered, and fabricated in a controlled factory environment, then transported and assembled at the project site. This technology not only ensures faster project execution compared to conventional construction methods but also guarantees precision, durability, and cost-effectiveness.
          </p>
          <p className="leading-relaxed text-small text-justify">
            At JEW Steel Pvt. Ltd., we utilize advanced design software and state-of-the-art manufacturing facilities to produce high-quality framing systems and building components that meet international standards. PEBs are highly versatile and can be customized to suit a wide range of applications, including warehouses, industrial sheds, factories, multi-storey buildings, showrooms, cold storage units, and commercial complexes. The use of high-tensile steel, corrosion-resistant coatings, and innovative engineering practices ensures that our PEB structures are not only strong but also long-lasting with minimal maintenance.
          </p>
          <p className="leading-relaxed text-small text-justify">
           Furthermore, this construction method is eco-friendly, as it reduces material wastage, promotes recyclability, and supports energy efficiency through smart roofing and ventilation options. By adopting PEB technology, businesses benefit from rapid construction timelines, reduced investment costs, and highly reliable infrastructure solutions, making it the preferred choice for modern industries across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreEngineeringBuilding;
