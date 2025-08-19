import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import MyHeading from "./MyHeadaing";
import img1 from "../assets/Project2.jpeg";

const projects = [
  {
    title: "Steel Structure Factory",
    location: "Barabanki, UP",
    area: "16,145 sq.ft",
    img: img1
  },
  {
    title: "Transport Nagar Project",
    location: "Transport Nagar, Lucknow",
    area: "18,000 sq.ft",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-multi-storey-buildings-scaled.webp?alt=media&token=ae111d89-e905-4a4a-b0ec-05902cee76f0",
  },
  {
    title: "Vrindavan Project",
    location: "Vrindavan, Mathura UP",
    area: "15,000 sq.ft",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.44.11%20PM.jpeg?alt=media&token=dc0decdc-5137-43f9-a44e-6f65cac1be62",
  },
  {
    title: "Kamlapur Project",
    location: "Kamlapur, UP",
    area: "10,000 sq.ft",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const OurProjects = () => {
  return (
    <section className="bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C] text-white py-16 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <MyHeading text="Our Projects" color="white" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-700 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-700 text-sm mb-6">Area: {project.area}</p>
                <button className="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;