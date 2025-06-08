import React from "react";
import PebBuildingImg from "../assets/first-Pre.jpg"; // Replace with your actual image path

const PEBSection = () => {
  return (
    <section className="bg-white px-1 py-20 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Why pre-engineered buildings is more affordable?
          </h2>
          {/* <div className="w-20 h-1 bg-yellow-400 mx-auto mt-1"></div> */}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={PebBuildingImg}
              alt="PEB Building"
              className="w-full rounded-4xl shadow-md"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-gray-700 text-base leading-relaxed ">
            <p className="mb-4">
              Thinking about constructing a building? Consider pre-engineered
              buildings (PEB) for a smarter, more budget-friendly option. Why?
              PEBs have a nifty design, get made efficiently, and are put
              together on-site instantly. The beauty of prefabrication lies in
              the precision it offers, cutting down on wastage and, you guessed
              it, costs. The controlled manufacturing environment ensures each
              piece meets the highest standards.
            </p>

             <p className="mb-4">
              Beyond cost savings, PEBs come with a host of other advantages. 
              They are highly durable and require minimal maintenance thanks to 
              the use of high-quality, corrosion-resistant materials such as 
              galvanized steel. PEBs are also energy-efficient, with options
              for thermal insulation and reflective roofing systems that help 
              reduce energy consumption, especially in industrial and warehouse
              environments.
            </p>
            
            <p>
              But here’s the real kicker—PEB structures go up faster than your
              regular buildings. Speedy construction equals big savings.
               It cuts
              labour costs and trims the overall project time, making it super
              efficient. At JEW Steel, PEB is down to
              an art. Choosing us means saving money and getting a tough,
              long-lasting structure tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PEBSection;
