import { motion } from "framer-motion";
import {
  Home,
  BadgeCheck,
  ThumbsUp,
  Headphones
} from "lucide-react";
import React from "react";
import MyHeading from "./MyHeadaing";

const features = [
  {
    icon: <Home className="text-orange-400 group-hover:text-orange-300 transition-all duration-300 w-10 h-10" />,
    title: "Efficiency",
    desc: "We focus on eco-friendly materials and practices to enhance sustainability without compromising quality.",
  },
  {
    icon: <BadgeCheck className="text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300 " />,
    title: "Trust & Warranty",
    desc: "Your satisfaction is our priority. We provide personalized solutions tailored to your needs.",
  },
  {
    icon: <ThumbsUp className="text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300 " />,
    title: "High Quality Work",
    desc: "Every aspect of the project is carefully planned and executed to ensure accuracy and perfection.",
  },
  {
    icon: <Headphones className="text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300 " />,
    title: "24*7 Support",
    desc: "Jagdev Engineering Works is always just a call away to ensure your experience is smooth and hassle-free.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
      
                 <MyHeading text={"Why Choose Us"} color={"black"}/>

        

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white p-6 rounded-3xl border border-gray-300 text-left hover:border-orange-300 group transition-all duration-500"
            >
              <div className="mb-4 ">{feature.icon}</div>
              <h3 className="text-lg font-bold text-green-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
