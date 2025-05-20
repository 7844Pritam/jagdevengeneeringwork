import React from "react";

const services = [
  {
    title: "Website Development",
    description:
      "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-multi-storey-buildings-scaled.webp?alt=media&token=ae111d89-e905-4a4a-b0ec-05902cee76f0", // Replace with actual image
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-steel-buildings-with-mezzanine-floors-scaled.webp?alt=media&token=0532c84d-f9ae-4151-a292-26a86c82eb5f", // Replace with actual image
  },
  {
    title: "App Development",
    description:
      "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.44.11%20PM.jpeg?alt=media&token=dc0decdc-5137-43f9-a44e-6f65cac1be62", // Replace with actual image
  },
  {
    title: "App Development",
    description:
      "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d", // Replace with actual image
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#fff9f0] text-white px-6 py-20 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <p className="text-black font-medium mb-2">Project Planning</p>
            <h2 className="text-3xl text-black md:text-4xl font-bold">
              We help our clients to build <br /> There Dream Projects
            </h2>
          </div>
          <a
            href="#"
            className="text-white underline mt-6 md:mt-0 text-sm font-semibold"
          >
            EXPLORE SERVICES
          </a>
        </div>

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
