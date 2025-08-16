import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// --- PROJECT DATA ---
const projects = [
  {
    title: "Construction and Commissioning",
    location: "Mumbai, India",
    area: "45,000 sq.ft",
    description: "We offer complete solutions for large-scale construction projects...",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Operations and Maintenance",
    location: "Delhi, India",
    area: "30,000 sq.ft",
    description: "Ensuring your facility runs smoothly with our expert O&M services...",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Group Domino Sugar",
    location: "Pune, India",
    area: "50,000 sq.ft",
    description: "Helping to modernize one of the world's largest sugar facilities...",
    image: "https://via.placeholder.com/400x300",
  },
];

// --- ANIMATION VARIANTS ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const OurProjectsPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
   {/* Hero Section */}
<section
  className="w-full flex items-center justify-center h-[300px] md:h-[300px] lg:h-[300px] bg-cover bg-center relative"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('https://www.freepik.com/free-photo/industrial-park-factory-building-warehouse_1296987.htm#fromView=keyword&page=1&position=21&uuid=2fc6727c-3cae-423c-aeaa-43c01735a93c&query=Peb')`
  }}
>
  <div className="text-center text-white px-4">
    <h1 className="text-3xl md:text-5xl font-bold">Our Projects</h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Delivering excellence in engineering, manufacturing, and construction for over a decade.
    </p>
  </div>
</section>


      {/* Intro Section */}
      <section className="flex max-w-[1200px] mx-auto flex-col md:flex-row items-center justify-center gap-10 p-10">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-orange-400">
            For more than 10 years, Company has provided engineering, manufacturing and construction services...
          </h3>
          <p className="mt-4 text-gray-700">
            Across multiple projects and sectors, we take pride in delivering solutions that are efficient, innovative, and safe. From industrial structures to custom-engineered facilities, our work reflects a commitment to quality, performance, and reliability.
          </p>
          <p className="mt-4 text-gray-700">
            Each project is fueled by our drive for innovation, carried out with meticulous precision, and anchored in the strictest safety protocols.
          </p>
        </div>
      </section>

      {/* Projects Section */}
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
              variants={cardVariants}
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
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4">Area: {project.area}</p>
                <p className="text-gray-600 text-sm mb-6">{project.description}</p>
                <button className="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </motion.div>
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
