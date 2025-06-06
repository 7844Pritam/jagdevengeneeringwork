import React from "react";
import MyHeading from "./MyHeadaing";

const services = [
  {
    title: "PEB Multi-Story Building",
    description:
      "Our Pre-Engineered Multi-Story Buildings offer a fast, cost-effective solution, designed with precision and fabricated using high-quality steel.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-multi-storey-buildings-scaled.webp?alt=media&token=ae111d89-e905-4a4a-b0ec-05902cee76f0",
  },
  {
    title: "PEB Warehousing",
    description:
      "Our Pre-Engineered Warehouses are designed to meet diverse storage needs with speed, strength, and efficiency.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-steel-buildings-with-mezzanine-floors-scaled.webp?alt=media&token=0532c84d-f9ae-4151-a292-26a86c82eb5f",
  },
  {
    title: "GI Sheet Manufacturing",
    description:
      "We manufacture high-quality Galvanized Iron sheets for roofing, cladding, ducting, and industrial applications using advanced technology.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.44.11%20PM.jpeg?alt=media&token=dc0decdc-5137-43f9-a44e-6f65cac1be62",
  },
  {
    title: "Industrial Shed",
    description:
      "Engineered for strength, durability, and efficiency—ideal for factories, workshops, warehouses, and various industrial setups.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C] text-white px-6 py-20 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <MyHeading text="Our Services" color="white" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-[#1C1C1C]">
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <button className="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
