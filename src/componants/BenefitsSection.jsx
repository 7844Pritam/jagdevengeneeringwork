import React from "react";

const benefits = [
  {
    title: "Saving You Money",
    content:
      "PEB structures are awesome because they're designed to be super cost-efficient. We're talking about smart designs, less wasted materials, and faster building times, which means you save on labour costs.",
  },
  {
    title: "Built-in a Flash",
    content:
      "Need your space ASAP? PEBs got your back! With their pre-fabricated components, we're talking lightning-fast assembly and installation. Quicker construction means quicker move-in times and a faster return on your investment.",
  },
  {
    title: "Design That Fits You",
    content:
      "Whether you dream of a warehouse, an industrial hub, or a sleek commercial spot, PEBs have the style you need. They're like the chameleons of construction, offering many design options to match your unique needs and aesthetic preferences.",
  },
  {
    title: "Quality You Can Rely On",
    content:
      "Say goodbye to worries about quality! PEBs are made in controlled environments, ensuring top-notch, consistent production. They meet and often exceed industry standards for durability and strength. Your structure will stand the test of time.",
  },
  {
    title: "Green and Clean",
    content:
      "PEBs are not just good for your pocket but also for the planet. By cutting down on construction time and materials, they're positively impacting the environment. It's all about minimizing that eco-footprint left by traditional construction methods.",
  },
  {
    title: "Maximizing Your Space",
    content:
      "Imagine a space with no annoying support columns in the middle. That's what PEBs offer! They give you maximum usable space with wide spans and customizable layouts.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white px-6 py-20 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Benefits Of Pre Engineered Buildings
          </h2>
          {/* <div className="w-24 h-1 bg-yellow-400 mx-auto mt-1"></div> */}
        </div>

        {/* Benefit Items */}
        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          {benefits.map((item, index) => (
            <div key={index}>
              <p>
                <span className="font-semibold text-black">{item.title}:</span>{" "}
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
