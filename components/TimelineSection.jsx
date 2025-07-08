"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield,Calendar, Rocket, Code, Globe } from 'lucide-react';

const timeline = [
    {
      id: 'start-2018',
      year: '2018',
      event: 'Started Programming Journey',
      description: 'Began learning programming independently and at school, diving into web development, scripting, and core software engineering principles.',
      icon: <BookOpen size={24} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'military-2022',
      year: '2022',
      event: 'Full-Stack Development in the Military',
      description: 'Started my military service in late 2022. I served in my unit for 3 years as a full-sack developer, where I advanced my technical skills and collaborated with multidisciplinary teams. I was responsible for developing and maintaining secure internal tools and full-stack applications under strict protocols, delivering high-impact solutions in a high-security environment.',
      icon: <Shield size={24} />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'founded-dtd-2025',
      year: '2025',
      event: 'Founded Dev to Defy (DTD)',
      description: 'In early 2025, after completing my military service, I founded Dev to Defy (DTD), a modern web design and development startup dedicated to creating high-performance, user-centric digital experiences. DTD specializes in bespoke web design, full-stack development, and UX/UI design, helping small businesses, entrepreneurs, and creators build their unique online presence. We are also now transitioning into developing and delivering high-quality software products and digital solutions.',
      icon: <Rocket size={24} />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'dtd-projects-2025',
      year: '2025',
      event: "DTD's Current Projects",
      description: 'Currently leading the development of multiple innovative products at Dev to Defy, including Mocker — an AI-powered interview preparation platform, Chedder — a screen recording and sharing tool, and CleverYou — an AI-powered LMS and career readiness platform for students and young professionals. In parallel, we are in the planning and early development stages of Defy Studio, an AI-powered website builder designed to give businesses and creators complete control over their online presence without writing code.',
      icon: <Globe size={24} />,
      color: 'from-blue-500 to-indigo-600'
    }
];

export default function TimelineSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <motion.section
      className="min-h-[70vh] p-8 md:p-16 lg:p-24 relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title section */}
      <div className="mb-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.span
            className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Professional Path
          </motion.span>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <motion.h2 
              className="text-6xl lg:text-8xl font-bold text-white"
            >
              My Journey
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-lg pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              From learning to launching: my journey as a coder and tech founder
            </motion.p>
          </div>
          
          <motion.div 
            className="h-1 w-16 bg-white mt-8 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
      </div>
      
      {/* Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
        
        {timeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`relative mb-24 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto md:mr-0' : 'md:pl-12 md:mr-auto md:ml-0'} md:w-1/2 w-full`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Timeline dot */}
            <motion.div 
              className={`hidden md:flex absolute top-0 ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-12 h-12 rounded-full bg-gradient-to-r ${item.color} items-center justify-center z-10`}
              whileHover={{ scale: 1.2 }}
              animate={activeIndex === index ? { scale: 1.2 } : { scale: 1 }}
            >
              {item.icon}
            </motion.div>
            
            {/* Timeline content */}
            <motion.div
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden group"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glass reflection effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                style={{ 
                  borderRadius: "1rem",
                  transform: "translateY(-50%)"
                }}
              />
              
              <div className="flex md:hidden items-center gap-4 mb-4">
                <div className={`flex w-10 h-10 rounded-full bg-gradient-to-r ${item.color} items-center justify-center`}>
                  {item.icon}
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{item.year}</span>
              </div>
              
              <div className="md:flex justify-between items-start mb-4">
                <span className="hidden md:block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{item.year}</span>
                <motion.div
                  className="w-full md:w-auto flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <div className="h-px w-16 bg-white/20"></div>
                </motion.div>
              </div>
              
              <motion.h3 
                className="text-xl md:text-2xl font-semibold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {item.event}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {item.description}
              </motion.p>
              
              {/* Dynamic line from dot to next dot */}
              {index < timeline.length - 1 && (
                <motion.div 
                  className={`hidden md:block absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-12 w-8 h-px bg-white/20`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 1 }}
                  style={{ 
                    transformOrigin: index % 2 === 0 ? 'left' : 'right',
                    rotate: index % 2 === 0 ? '-45deg' : '45deg'
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}