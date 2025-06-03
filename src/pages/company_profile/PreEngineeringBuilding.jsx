import React from "react";
// import steelRoll from "../assets/steel-roll.jpg"; // Replace with your image path

const PreEngineeringBuilding = () => {
  return (
    <section className="bg-text-white-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={"https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            alt="Steel Roll"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            PREE ENGINEERING BUILDING
          </h2>
          <p className="mb-4 leading-relaxed text-lg">
            Technological improvements over the year have contributed immensely
            to the enhancement of quality of life through various new products
            and services. One such revolution was the pre-engineered buildings
            through its origin can be traced back to 960's it's potential has
            been felt only during the recent years. This was mainly due to the
            development of technology, which helped in computerizing the design.
          </p>
          <p className="leading-relaxed text-lg">
            Although PEB systems are extensively used in industrials and many
            other non-residential constructions worldwide, it is relatively a
            new concept in India. These concepts were introduced to the Indian
            markets later in the late 1985 with the opening up of the economy
            and several multinationals setting up their projects. Although
            Indian manufacturers are trying to catch up; the JE Works has
            already made it a part of its product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreEngineeringBuilding;
