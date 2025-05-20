import { motion } from "framer-motion";
import {
  Home,
  BadgeCheck,
  ThumbsUp,
  Headphones
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Home className="text-green-400 w-10 h-10" />,
    title: "Efficiency",
    desc: "We focus on eco-friendly materials and practices to enhance sustainability without compromising quality.",
  },
  {
    icon: <BadgeCheck className="text-green-400 w-10 h-10" />,
    title: "Trust & Warranty",
    desc: "Your satisfaction is our priority. We provide personalized solutions tailored to your needs.",
  },
  {
    icon: <ThumbsUp className="text-green-400 w-10 h-10" />,
    title: "High Quality Work",
    desc: "Every aspect of the project is carefully planned and executed to ensure accuracy and perfection.",
  },
  {
    icon: <Headphones className="text-green-400 w-10 h-10" />,
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
    <section className="bg-[#f3f5f1] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-12">
          Why Choose Us
        </h2>

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
              className="bg-white p-6 rounded-3xl shadow-md text-left"
            >
              <div className="mb-4">{feature.icon}</div>
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
