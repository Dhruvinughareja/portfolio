import React from 'react';
import profile from "../asset/profile.webp";
import { HERO_CONTENT } from '../content';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img 
                src={profile} 
                alt="Dhruvin Ughareja" 
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-gray-800"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Dhruvin Ughareja
            </h1>
            
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-white text-xl font-medium">
                DSA & Development Enthusiast
              </span>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {HERO_CONTENT}
            </p>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center px-8 py-4 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
