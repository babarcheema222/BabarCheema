import React from 'react';
import { motion } from 'framer-motion';
import SmartLink from './common/SmartLink';

const projects = [
  {
    title: 'Flutter Daily Task App',
    description: 'A cross-platform daily task All in one App built with Flutter.',
    link: 'https://github.com/babarcheema222/Daily-Use-Apps'
  },
  {
    title: 'Flutter Health App',
    description: 'Health App built with Dart.Fully responsive and professional.',
    link: 'https://github.com/babarcheema222/Fitrness_App'
  },
  {
    title: 'My Portfolio',
    description: 'A modern fully responsive and professional website for my portfolio.',
    link: 'https://github.com/babarcheema222/My-Portfolio'
  },
  {
    title: 'Crud Notes App',
    description: 'Crud Notes App with Gmail Authentication and Database with firbase.',
    link: 'https://github.com/babarcheema222/Crud-Notes-App'
  },
];

const Projects = () => {
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

  const projectCardVariants = {
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
    <section className="max-w-5xl mx-auto p-8 bg-black-100 rounded-lg shadow-card mt-10 transition-all duration-300 hover:shadow-2xl hover:bg-black-200/50">
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
            <path d="M10 4H2v16h20V6H12l-2-2zm0 2l2 2h8v12H4V6h6zm2 4v2h4v-2h-4zm0 4v2h4v-2h-4z"/>
          </motion.svg>
          Projects
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={projectCardVariants}
              className="group relative bg-black-200 p-5 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#a084fa] via-[#915EFF] to-[#a084fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Container */}
              <div className="relative bg-black-200 p-5 rounded-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-black-200/80">
                <div>
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-semibold text-white mb-2 group-hover:text-[#a084fa] transition-colors duration-300 group-hover:scale-105"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    variants={itemVariants}
                    className="text-secondary mb-4 group-hover:text-white transition-colors duration-300 group-hover:leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <SmartLink 
                  href={project.link} 
                  className="inline-block mt-auto text-[#a084fa] font-medium relative overflow-hidden group-hover:text-white transition-colors duration-300 group-hover:font-semibold"
                >
                  <span className="relative z-10">View Project</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a084fa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </SmartLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 