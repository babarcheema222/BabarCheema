import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    try {
      const res = await fetch('https://formspree.io/f/xjkrrjrr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(form as any).toString(),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section className="max-w-xl mx-auto p-8 bg-black-100 rounded-lg shadow-card mt-10 transition-all duration-300 hover:shadow-2xl hover:bg-black-200/50">
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
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
          </motion.svg>
          Contact
        </motion.h2>
        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4"
        >
          <motion.input
            variants={formItemVariants}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded bg-black-200 text-white border border-secondary focus:outline-none focus:border-[#a084fa] transition-all duration-300 hover:border-[#a084fa] hover:bg-black-200/80 hover:scale-[1.02] focus:scale-[1.02]"
            required
          />
          <motion.input
            variants={formItemVariants}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded bg-black-200 text-white border border-secondary focus:outline-none focus:border-[#a084fa] transition-all duration-300 hover:border-[#a084fa] hover:bg-black-200/80 hover:scale-[1.02] focus:scale-[1.02]"
            required
          />
          <motion.textarea
            variants={formItemVariants}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded bg-black-200 text-white border border-secondary focus:outline-none focus:border-[#a084fa] transition-all duration-300 hover:border-[#a084fa] hover:bg-black-200/80 hover:scale-[1.02] focus:scale-[1.02] resize-none"
            rows={5}
            required
          />
          <motion.button 
            variants={formItemVariants}
            type="submit" 
            className="bg-[#a084fa] text-white py-2 px-6 rounded hover:bg-[#915EFF] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold"
          >
            Send
          </motion.button>
        </motion.form>
        {status === 'success' && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-400 font-semibold text-center"
          >
            Thank you! Your message has been sent.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-400 font-semibold text-center"
          >
            Oops! Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact; 