import React from "react";
import { FaDraftingCompass, FaLightbulb, FaSolarPanel } from "react-icons/fa";
import MyHeading from "./MyHeadaing";

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
    <section className="bg-white py-20 px-4 md:px-12 lg:px-32 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-wide">
          
        </p>  
    
                 <MyHeading text={" Our Work Process"} color={"black"}/>


        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 items-start justify-items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Numbered Circle */}
              <div className="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-orange-400 text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                {step.id}
              </div>

              {/* Green Box */}
              <div className="bg-orange-400 rounded-[30px] w-28 h-28 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <p className="text-[#1C2B0F] font-semibold text-base mt-4">
                {step.title}
              </p>
            </div>
          ))}

 
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
