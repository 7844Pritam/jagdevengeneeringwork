import React from "react";
import MyHeading from "./MyHeadaing";

const services = [
  {
    title: "Pre-Engineered Multi-Story Building",
    description:
      "Our Pre-Engineered Multi-Story Buildings offer a fast, cost-effective, and Designed with precision and fabricated using high-quality steel.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-multi-storey-buildings-scaled.webp?alt=media&token=ae111d89-e905-4a4a-b0ec-05902cee76f0", // Replace with actual image
  },
  {
    title: "PEB Werehousing",
    description:
      "Our Pre-Engineered Warehouses are designed to meet diverse storage needs with speed, strength, and efficiency.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-steel-buildings-with-mezzanine-floors-scaled.webp?alt=media&token=0532c84d-f9ae-4151-a292-26a86c82eb5f", // Replace with actual image
  },
  {
    title: "GI Sheet Manufacturing",
    description:
      "We specialize in manufacturing high-quality Galvanized Iron (GI) sheets using advanced technology and premium-grade raw materials. For roofing, wall cladding, ducting, and industrial fabrication.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.44.11%20PM.jpeg?alt=media&token=dc0decdc-5137-43f9-a44e-6f65cac1be62", // Replace with actual image
  },
  {
    title: "Industrial Shed",
    description:
      "Our Industrial Sheds are engineered for strength, durability, and cost-efficiency, making them ideal for factories, workshops, warehouses, and other industrial operations.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d", // Replace with actual image
  },
];

const ServicesSection = () => {
  return (
    <section className=" from-[#2E2E2E] to-[#1C1C1C] text-white px-6 py-20 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading Section */}
         <MyHeading text={"Our Services"} color={"black"}/>
       
        {/* Cards Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-md overflow-hidden shadow">
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-[#1C1C1C]">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                <a href="#" className="font-medium text-sm text-gray-700 flex items-center gap-1">
                  View Details <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
