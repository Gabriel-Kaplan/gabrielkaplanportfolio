"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Globe, BookOpen, Rocket, Layers } from 'lucide-react';

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Career highlights with icons
  const highlights = [
    { 
      icon: <Code size={24} />,
      title: "Developer",
      description: "Specialize in building modern web applications with React, Next.js, and cutting-edge frontend technologies."
    },
    { 
      icon: <Rocket size={24} />,
      title: "Founder",
      description: "Founded Dev to Defy (DTD), a platform empowering creators and businesses to build and own their digital presence."
    },
    { 
      icon: <BookOpen size={24} />,
      title: "Lifelong Learner",
      description: "Constantly exploring new technologies and approaches to solve complex problems in innovative ways."
    },
    { 
      icon: <Layers size={24} />,
      title: "UI/UX Enthusiast",
      description: "Passionate about creating intuitive, accessible, and visually stunning user experiences."
    }
  ];

  return (
    <motion.section 
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background gradient - black and white */}
      <div 
        className="absolute inset-0 bg-black z-0"
        style={{
          backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`
        }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 z-0"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
      
      {/* Abstract lines in background */}
      {/* Abstract lines in background */}
     {/* <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-white"
            style={{
              top: `${(i + 1) * 15}%`,
              left: 0,
              right: 0,
              transformOrigin: 'left'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`vert-line-${i}`}
            className="absolute w-px bg-white"
            style={{
              left: `${(i + 1) * 15}%`,
              top: 0,
              bottom: 0,
              transformOrigin: 'top'
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}
      </div>*/}
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left column - Profile content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I&apos;m Gabriel
            </motion.span>
            
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.3)",
                  "0 0 15px rgba(255,255,255,0.5)",
                  "0 0 5px rgba(255,255,255,0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="h-1 w-16 bg-white mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I&apos;m a passionate developer, founder, and lifelong learner with a focus on creating exceptional digital experiences that solve real-world problems.
              </p>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With expertise in React, Next.js, UI/UX design, and AI integration, I bridge the gap between technical excellence and beautiful, intuitive interfaces. My work is driven by the belief that technology should enhance human capabilities rather than replace them.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Through my venture, Dev to Defy (DTD), I&apos;m empowering creators and businesses to build and truly own their corner of the internet—free from the constraints of traditional platforms.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column - Career highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="group"
                >
                  <motion.div
                    className="mb-4 p-3 rounded-full bg-white/10 text-white inline-block"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Personal stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 border-t border-white/10 pt-8 mx-auto max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Projects Completed", value: "20+" },
                { label: "Technologies Experienced In", value: "10+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.h4 
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.4 + (index * 0.1) }}
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}