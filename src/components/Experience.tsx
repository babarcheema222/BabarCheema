import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter frontend Developer',
    company: 'Avantcore technologies',
    period: 'Dec,2024 - Present',
    description: 'Developing Flutter applications for Andriod and IOS by using Flutter and Dart by using MVVM pattern and clean architecture.'
  },
  {
    title: 'Web Developer',
    company: 'Nexthon technologies',
    period: 'Oct,2022 - March,2023',
    description: 'Developing websites using HTML, CSS/Bootstrap,React,JavaScript and typescript.'
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 200 }
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-black-100 rounded-lg shadow-card mt-10 transition-all duration-300 hover:shadow-2xl hover:bg-black-200/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-6 flex items-center gap-2 transition-all duration-300 hover:text-[#a084fa] hover:scale-105"
        >
          <motion.svg 
            variants={iconVariants}
            xmlns="http://www.w3.org/2000/svg" 
            fill="#a084fa" 
            viewBox="0 0 24 24" 
            className="w-7 h-7 transition-all duration-300 hover:rotate-12 hover:scale-110"
          >
            <path d="M10.25 2.75A2.25 2.25 0 0 0 8 5v1H6.25A2.25 2.25 0 0 0 4 8.25v9.5A2.25 2.25 0 0 0 6.25 20h11.5A2.25 2.25 0 0 0 20 17.75v-9.5A2.25 2.25 0 0 0 17.75 6H16V5a2.25 2.25 0 0 0-2.25-2.25h-3.5zm5.25 3.25V5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v1h5zm-9.25 2.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v1.25h-14.5V8.5zm0 2.75h14.5v6.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75v-6.5z"/>
          </motion.svg>
          Experience
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col gap-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="bg-black-200 p-5 rounded-lg border-l-4 border-primary transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-[#a084fa] hover:bg-black-200/80 cursor-pointer group"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-semibold text-white transition-all duration-300 group-hover:text-[#a084fa] group-hover:scale-105"
              >
                {exp.title}
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-secondary transition-all duration-300 group-hover:text-white group-hover:font-medium"
              >
                {exp.company} | {exp.period}
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-white mt-2 transition-all duration-300 group-hover:text-white/90 group-hover:leading-relaxed"
              >
                {exp.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience; 