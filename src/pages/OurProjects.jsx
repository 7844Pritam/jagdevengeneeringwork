import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, PrinterIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const OurProjectsPage = () => {
  return (
    <div className="font-sans ">
    

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center bg-gray-100">
        <div className="flex-1 flex justify-center items-center p-10 max-w-[1200px] mx-auto">
          <div className="w-64 h-64 bg-orange-400 rounded-full flex flex-col items-center justify-center text-white text-center p-6">
            <h2 className="text-lg font-bold">Our Projects</h2>
            <p className="text-sm mt-2">
              A collection of our engineering, and construction team which make safe and secure works envirement.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Business person"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="flex max-w-[1200px] mx-auto flex-col md:flex-row items-center justify-center gap-10 p-10">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-orange-400">
            For more than 10 years, Company has provided engineering, manufacturing and construction services...
          </h3>
          <p className="mt-4 text-gray-700">
            Across multiple projects and sectors, we take pride in delivering solutions that are efficient, innovative, and safe. From industrial structures to custom-engineered facilities, our work reflects a commitment to quality, performance, and reliability. Every project is driven by a passion for innovation, executed with precision, and guided by the highest safety standards. Whether in manufacturing, infrastructure, or specialized engineering, we ensure each solution not only meets but exceeds client expectations—turning visions into lasting realities.
          </p>
         <p className="mt-4 text-gray-700">
            Each project is fueled by our drive for innovation, carried out with meticulous precision, and anchored in the strictest safety protocols. Whether it’s manufacturing, infrastructure development, or specialized construction, we strive to not just fulfill requirements but to surpass them—transforming ideas into enduring achievements.
          </p>
        </div>
        
      </section>

      {/* Projects */}
      <section className="bg-gray-800 text-white p-10">
        <h2 className="text-center text-2xl font-bold mb-10">
          Engineering, Procurement and Construction Projects Around the World
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {projects.map((project, i) => (
  <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            //   variants={cardVariants}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-700 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                  <span>{project.title}</span>
                </div>
                <p className="text-gray-700 text-sm mb-6">Area: {project.title}</p>
                <button className="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </motion.div>

            // <div key={i} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow">
            //   <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            //   <div className="p-4">
            //     <h3 className="font-semibold">{p.title}</h3>
            //     <p className="text-sm mt-2">{p.description}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </section>
      {/* Contact Form */}
      <section className="p-10 max-w-[1000px] mx-auto">
        <h3 className="text-xl font-bold mb-4">Get in touch</h3>
        <p className="text-gray-700 mb-6">
          We believe in creating strong relationships with our clients. Send us a message.
        </p>
        <form className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" />
          <textarea placeholder="Message" rows="4" className="border p-2 rounded md:col-span-2"></textarea>
          <button className="bg-orange-400 text-white px-4 py-2 rounded md:col-span-2">
            SUBMIT
          </button>
        </form>
      
      </section>
    </div>
  );
};

export default OurProjectsPage;

// --- DATA ---
 const projects = [
  {
    title: "Construction and Commissioning",
    description: "We offer complete solutions for large-scale construction...",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Operations and Maintenance",
    description: "Ensuring your facility runs smoothly with our expert O&M services...",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Group Domino Sugar",
    description: "Helping to modernize one of the world's largest sugar facilities...",
    image: "https://via.placeholder.com/400x300",
  },
//   {
//     title: "Canadian Nuclear Laboratories",
//     description: "Providing safe, efficient nuclear solutions...",
//     image: "https://via.placeholder.com/400x300",
//   },
//   {
//     title: "Novo Nordisk API Manufacturing Facility",
//     description: "Delivering pharmaceutical-grade manufacturing solutions...",
//     image: "https://via.placeholder.com/400x300",
//   },
//   {
//     title: "Decontamination and Decommissioning",
//     description: "Safely dismantling outdated facilities...",
//     image: "https://via.placeholder.com/400x300",
//   },
//   {
//     title: "Expansion of Chemical Production Plant",
//     description: "Upgrading facilities for increased production capacity...",
//     image: "https://via.placeholder.com/400x300",
//   },
//   {
//     title: "Biotechnology Manufacturing Facility",
//     description: "Advanced bio-manufacturing capabilities...",
//     image: "https://via.placeholder.com/400x300",
//   },
//   {
//     title: "Fractionation Biotech Facility",
//     description: "Specialized biotech production lines...",
//     image: "https://via.placeholder.com/400x300",
//   },
];
