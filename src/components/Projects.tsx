import React from 'react';
import { motion } from 'framer-motion';
import SmartLink from './common/SmartLink';

const projects = [
  {
    title: 'Jetour Gujrat Website',
    description: 'A modern, fully responsive automotive website built with React and TypeScript, styled using Vite for blazing-fast performance. The site showcases the latest Jetour car models, features, and services, and is designed to look stunning on all devices. Hosted live for seamless user experience and easy accessibility.',
    link: 'https://jetourgujrat.com/'
  },
  {
    title: 'Flutter Daily Task App',
    description: 'A Flutter-based app featuring a splash screen, login/signup/forgot password flow (demo: babar@gmail.com / 123456), and a collection of daily-use utility apps—all in one place. Each tool is functional and designed with a clean, professional UI for a seamless user experience.',
    link: 'https://github.com/babarcheema222/Daily-Use-Apps'
  },
  {
    title: 'Flutter Health App',
    description: 'A modern Flutter Fitness App designed to help users stay healthy and motivated. Includes a splash screen, login/signup system, clean UI, and various screens for workouts, diet, and tracking. Built with responsiveness and smooth navigation to offer a seamless fitness-focused user experience across all devices.',
    link: 'https://github.com/babarcheema222/Fitrness_App'
  },
  {
    title: 'My Portfolio',
    description: 'This is my personal portfolio built using React And typrscript. It showcases my skills, projects, and experience as a Flutter and web developer. Designed with a modern and responsive layout, it provides a professional platform to highlight my work for potential employers, collaborators, or clients in the tech industry.',
    link: 'https://github.com/babarcheema222/My-Portfolio'
  },
  {
    title: 'Crud Notes App',
    description: 'A simple CRUD Notes App built with Flutter and Firebase. First signup and the login. It allows users to create, read, update, and delete notes seamlessly. Includes email/password authentication, real-time Firestore database integration, and a clean responsive UI. Perfect for beginners learning Flutter + Firebase with a practical, real-world example.',
    link: 'https://github.com/babarcheema222/Crud-Notes-App'
  },
  {
    title: 'WeatherApp',
    description: 'A Flutter weather app with real-time forecast, dark/light theme toggle, Lottie animated starry background, and city-based search. Uses OpenWeatherMap API with clean UI and Provider for theme management..',
    link: 'https://github.com/babarcheema222/weatherapp_api_integrated'
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