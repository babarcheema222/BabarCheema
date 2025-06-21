import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const GetInTouch = () => {
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

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-black-100 rounded-lg shadow-card mt-10 text-white transition-all duration-300 hover:shadow-2xl hover:bg-black-200/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-6 transition-all duration-300 hover:text-[#a084fa] hover:scale-105"
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div 
            variants={contactItemVariants}
            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-black-200 hover:shadow-lg cursor-pointer group"
          >
            <EnvelopeIcon className="w-8 h-8 text-[#a084fa] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <div>
              <p className="font-semibold transition-all duration-300 group-hover:text-[#a084fa]">Email</p>
              <p className="text-secondary transition-all duration-300 group-hover:text-white group-hover:font-medium">babarcheema222@gmail.com</p>
            </div>
          </motion.div>
          <motion.div 
            variants={contactItemVariants}
            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-black-200 hover:shadow-lg cursor-pointer group"
          >
            <PhoneIcon className="w-8 h-8 text-[#a084fa] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <div>
              <p className="font-semibold transition-all duration-300 group-hover:text-[#a084fa]">Phone</p>
              <p className="text-secondary transition-all duration-300 group-hover:text-white group-hover:font-medium">0302-6411932</p>
            </div>
          </motion.div>
          <motion.div 
            variants={contactItemVariants}
            className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-black-200 hover:shadow-lg cursor-pointer group"
          >
            <MapPinIcon className="w-8 h-8 text-[#a084fa] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <div>
              <p className="font-semibold transition-all duration-300 group-hover:text-[#a084fa]">Location</p>
              <p className="text-secondary transition-all duration-300 group-hover:text-white group-hover:font-medium">Lahore, Pakistan</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.h3 
          variants={itemVariants}
          className="text-2xl font-bold mt-10 mb-4 transition-all duration-300 hover:text-[#a084fa] hover:scale-105"
        >
          Follow Me
        </motion.h3>
        <motion.div 
          variants={itemVariants}
          className="flex gap-6"
        >
          <motion.div variants={socialIconVariants}>
            <SocialIcon 
              url="https://github.com/babarcheema222" 
              fgColor="#a084fa" 
              bgColor="transparent" 
              style={{ height: 32, width: 32 }} 
              className="transition-all duration-300 hover:scale-125 hover:rotate-12" 
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
          <motion.div variants={socialIconVariants}>
            <SocialIcon 
              url="https://www.linkedin.com/in/babar-sajjad-aa1843344" 
              fgColor="#a084fa" 
              bgColor="transparent" 
              style={{ height: 32, width: 32 }} 
              className="transition-all duration-300 hover:scale-125 hover:rotate-12" 
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
          <motion.div variants={socialIconVariants}>
            <SocialIcon 
              url="https://www.instagram.com/babar_sajjad_cheema007" 
              fgColor="#a084fa" 
              bgColor="transparent" 
              style={{ height: 32, width: 32 }} 
              className="transition-all duration-300 hover:scale-125 hover:rotate-12" 
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch; 