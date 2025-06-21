import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const infoItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const gradientCardVariants = {
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
    <section className="max-w-4xl mx-auto p-8 bg-black-100 rounded-lg shadow-card mt-10 transition-all duration-300 hover:shadow-2xl hover:bg-black-200/50">
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
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </motion.svg>
          About Myself
        </motion.h2>

        <motion.div 
          variants={cardVariants}
          className="bg-black-200 p-6 rounded-lg border-l-4 border-primary transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl hover:border-[#a084fa] hover:bg-black-200/80"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h3 
              variants={infoItemVariants}
              className="text-2xl font-semibold text-white mb-3 transition-all duration-300 hover:text-[#a084fa] hover:scale-105"
            >
              Babar Sajjad
            </motion.h3>
            
            <motion.div 
              variants={infoItemVariants}
              className="flex items-center gap-2 text-secondary mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-[#915EFF]/10 hover:text-white hover:scale-[1.02] hover:shadow-md cursor-pointer group"
            >
              <motion.svg 
                variants={iconVariants}
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#a084fa]"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </motion.svg>
              <span className="transition-all duration-300 group-hover:font-medium">BS Information Technology</span>
            </motion.div>
            
            <motion.div 
              variants={infoItemVariants}
              className="flex items-center gap-2 text-secondary mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-[#915EFF]/10 hover:text-white hover:scale-[1.02] hover:shadow-md cursor-pointer group"
            >
              <motion.svg 
                variants={iconVariants}
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#a084fa]"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </motion.svg>
              <span className="transition-all duration-300 group-hover:font-medium">University of Gujrat</span>
            </motion.div>
            
            <motion.div 
              variants={infoItemVariants}
              className="flex items-center gap-2 text-secondary mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-[#915EFF]/10 hover:text-white hover:scale-[1.02] hover:shadow-md cursor-pointer group"
            >
              <motion.svg 
                variants={iconVariants}
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#a084fa]"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </motion.svg>
              <span className="transition-all duration-300 group-hover:font-medium">CGPA: 3.21</span>
            </motion.div>
            
            <motion.div 
              variants={infoItemVariants}
              className="flex items-center gap-2 text-secondary mb-4 p-2 rounded-lg transition-all duration-300 hover:bg-[#915EFF]/10 hover:text-white hover:scale-[1.02] hover:shadow-md cursor-pointer group"
            >
              <motion.svg 
                variants={iconVariants}
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#a084fa]"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </motion.svg>
              <span className="transition-all duration-300 group-hover:font-medium">Web Developer at Nexthon Tecnologies</span>
            </motion.div>
            
            <motion.div 
              variants={infoItemVariants}
              className="flex items-center gap-2 text-secondary p-2 rounded-lg transition-all duration-300 hover:bg-[#915EFF]/10 hover:text-white hover:scale-[1.02] hover:shadow-md cursor-pointer group"
            >
              <motion.svg 
                variants={iconVariants}
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#a084fa]"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </motion.svg>
              <span className="transition-all duration-300 group-hover:font-medium">Flutter Developer at Avantcore Technologies</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              variants={gradientCardVariants}
              className="bg-gradient-to-r from-[#915EFF] to-[#a084fa] p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:from-[#a084fa] hover:to-[#915EFF] cursor-pointer group"
            >
              <motion.h4 
                variants={infoItemVariants}
                className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:scale-105"
              >
                🚀 My Journey
              </motion.h4>
              <motion.p 
                variants={infoItemVariants}
                className="text-white/90 leading-relaxed transition-all duration-300 group-hover:text-white group-hover:leading-relaxed"
              >
                From the halls of University of Gujrat to the dynamic world of technology, 
                I've transformed my passion for coding into a thriving career. Every line of code 
                I write is a step toward building the future.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={gradientCardVariants}
              className="bg-gradient-to-r from-[#151030] to-[#100d25] p-4 rounded-lg border border-[#915EFF]/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-[#915EFF]/60 hover:from-[#1a1a2e] hover:to-[#16213e] cursor-pointer group"
            >
              <motion.h4 
                variants={infoItemVariants}
                className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:scale-105 group-hover:text-[#a084fa]"
              >
                💡 What Drives Me
              </motion.h4>
              <motion.p 
                variants={infoItemVariants}
                className="text-secondary leading-relaxed transition-all duration-300 group-hover:text-white group-hover:leading-relaxed"
              >
                I believe in the power of technology to solve real-world problems. Whether it's 
                crafting beautiful Flutter applications or building responsive web experiences, 
                I'm committed to creating solutions that make a difference in people's lives.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={gradientCardVariants}
              className="bg-gradient-to-r from-[#915EFF]/10 to-[#a084fa]/10 p-4 rounded-lg border border-[#915EFF]/30 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-[#915EFF]/70 hover:from-[#915EFF]/20 hover:to-[#a084fa]/20 cursor-pointer group"
            >
              <motion.h4 
                variants={infoItemVariants}
                className="text-lg font-semibold text-white mb-2 transition-all duration-300 group-hover:scale-105 group-hover:text-[#a084fa]"
              >
                🌟 My Philosophy
              </motion.h4>
              <motion.p 
                variants={infoItemVariants}
                className="text-secondary leading-relaxed transition-all duration-300 group-hover:text-white group-hover:leading-relaxed"
              >
                "Innovation is not just about creating new things, but about making existing things 
                better." I approach every project with this mindset, constantly learning and evolving 
                to deliver exceptional digital experiences that exceed expectations.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 