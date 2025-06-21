import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  'Flutter',
  'Dart',
  'React',
  'HTML5',
  'CSS',
  'Bootstrap',
  'javascript',
  'Typescript'
];

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const techItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
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
            <path d="M8.7 7.7a1 1 0 0 1 0 1.4L5.8 12l2.9 2.9a1 1 0 1 1-1.4 1.4l-3.6-3.6a1 1 0 0 1 0-1.4l3.6-3.6a1 1 0 0 1 1.4 0zm6.6 0a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-3.6 3.6a1 1 0 1 1-1.4-1.4l2.9-2.9-2.9-2.9a1 1 0 0 1 0-1.4z"/>
          </motion.svg>
          Technologies
        </motion.h2>
        <motion.ul 
          variants={itemVariants}
          className="flex flex-wrap gap-4"
        >
          {techs.map((tech, idx) => (
            <motion.li 
              key={idx}
              variants={techItemVariants}
              className="group relative bg-primary text-white px-6 py-3 rounded-lg shadow-card transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(160,132,250,0.5)] hover:scale-110 hover:bg-black-200 cursor-pointer"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#a084fa] via-[#915EFF] to-[#a084fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              {/* Content Container */}
              <div className="relative flex items-center gap-2">
                <span className="transform group-hover:rotate-12 transition-transform duration-300 group-hover:text-[#a084fa] group-hover:font-semibold">
                  {tech}
                </span>
                <div className="w-0 h-0.5 bg-[#a084fa] group-hover:w-full transition-all duration-300 origin-left" />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Tech; 