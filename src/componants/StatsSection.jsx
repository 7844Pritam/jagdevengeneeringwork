import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaSolarPanel, FaRegStar } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import React from 'react';

const stats = [
  {
    icon: <FaSolarPanel className="text-white text-3xl" />,
    count: '5+',
    label: 'Project Done',
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    count: '50+',
    label: 'Happy Clients',
  },
  {
    icon: <FaAward className="text-white text-3xl" />,
    count: '3+',
    label: 'Award Winning',
  },
  {
    icon: <GiSkills className="text-white text-3xl" />,
    count: '11+',
    label: 'Year of Experienced',
  },
];

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  return (
    <div className="bg-white py-10">
      <motion.div
        className=" mx-auto px-6 grid gap-5 grid-cols-2 md:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-orange-400 rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
              {stat.icon}
            </div>
            <h3 className="text-black text-2xl font-bold">{stat.count}</h3>
            <p className="text-[#040e01]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
