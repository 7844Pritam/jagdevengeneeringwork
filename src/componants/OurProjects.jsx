import React from "react";
import { motion } from "framer-motion";
import MyHeading from "./MyHeadaing";

const projects = [
  {
    title: "Barabanki, UP.",
    desc: "Lohaar Engineering and Construction stands as a premier provider of top-notch pre-engineered buildings (PEBs) in India, offering cost-effective solutions for diverse industries such as manufacturing warehousing, commercial.",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d",
  
  },
  {
    title: "Transport Nagar, LKO.",
    desc: "Since the dawn of civilization, civil construction has been the cornerstone of human progress. This oldest discipline of engineering, encompassing the design, construction, and maintenance of physical environments.",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2Fpre-engineered-multi-storey-buildings-scaled.webp?alt=media&token=ae111d89-e905-4a4a-b0ec-05902cee76f0",
    
  },
  {
    title: "Vrindavan, Mathura UP.",
    desc: "In the realm of non-residential multi-storey building construction, composite construction has reigned supreme for over two decades. This unwavering preference stems from a fundamental principle: concrete excels.",
    img: "https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.44.11%20PM.jpeg?alt=media&token=dc0decdc-5137-43f9-a44e-6f65cac1be62",
    
  },
  {
    title: "Kamlapur, UP.",
    desc: "In the realm of non-residential multi-storey building construction, composite construction has reigned supreme for over two decades. This unwavering preference stems from a fundamental principle: concrete excels.",
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
    <section className="bg-white text-white py-16 px-4 md:px-12 lg:px-24">
                     <MyHeading text={"Our Projects"} color={"black"}/>

    
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
              <p className="text-gray-700 text-sm mb-6">{project.desc}</p>
              <button className="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-black">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
