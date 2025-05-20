import React from "react";
import { FaDraftingCompass, FaLightbulb, FaSolarPanel } from "react-icons/fa";

const steps = [
  {
    id: "01",
    title: "Project Planning",
    icon: <FaDraftingCompass className="text-white text-4xl" />,
  },
  {
    id: "02",
    title: "Research & Analysis",
    icon: <FaLightbulb className="text-white text-4xl" />,
  },
  {
    id: "03",
    title: "Roofing Installation",
    icon: <FaSolarPanel className="text-white text-4xl" />,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#F3FAEE] py-20 px-4 md:px-12 lg:px-32 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-wide">
          Our Latest Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2B0F] mb-16">
          Our Work Process
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 items-start justify-items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Numbered Circle */}
              <div className="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-[#B4F053] text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                {step.id}
              </div>

              {/* Green Box */}
              <div className="bg-[#B4F053] rounded-[30px] w-28 h-28 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <p className="text-[#1C2B0F] font-semibold text-base mt-4">
                {step.title}
              </p>
            </div>
          ))}

          {/* SVG Arrows */}
          <svg
            className="absolute top-[56px] left-[25%] hidden md:block"
            width="250"
            height="100"
            viewBox="0 0 250 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C100,0 150,0 250,100"
              stroke="#B4F053"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#B4F053" />
              </marker>
            </defs>
          </svg>

          <svg
            className="absolute top-[56px] right-[25%] hidden md:block"
            width="250"
            height="100"
            viewBox="0 0 250 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C100,0 150,0 250,100"
              stroke="#B4F053"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#arrowhead2)"
            />
            <defs>
              <marker
                id="arrowhead2"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#B4F053" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
