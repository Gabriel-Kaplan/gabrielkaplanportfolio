"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "DTD Studio",
    description: "DTD Studio will be a white-labeled, multi-tenant website builder rivaling Wix and Framer. DTD Studio lets creators and businesses design, launch, and manage modern websites—code-free. It will feature an intuitive drag-and-drop editor, dynamic theming, responsive design, and powerful, scalable hosting with seamless client management. (WIP)",
    size: "large",
    category: "Web Development",
    links: [
      { type: "live", url: "#", icon: <Globe size={16} /> }
    ],
    icon: <Code size={24} />,
    highlights: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Mocker | AI Powered Mock Interview Trainer",
    description: "Your personal interview coach powered by VAPI AI. Practice real-time interviews, receive instant feedback, and improve your confidence and communication before the real thing. (In ALPHA v1)",
    size: "medium",
    category: "AI/ML",
    links: [
      { type: "live", url: "https://mocker-tau.vercel.app/", icon: <Globe size={16} /> }
    ],
    icon: <Code size={24} />,
    highlights: ["TypeScript", "VAPI", "Google Firebase", "Next.js"]
  },  
  {
    title: "CleverYou | AI E-Learning Platform",
    description: "CleverYou is a next-generation AI-powered Learning Management System (LMS) that helps schools, universities, and training centers deliver practical, school- and career-focused learning—preparing students with the skills, hands-on experience, and confidence they need to succeed both in school and in the modern workforce. (Currently in development)",
    size: "large",
    category: "Web Development",
    links: [
      { type: "live", url: "#", icon: <Globe size={16} /> }
    ],
    icon: <Code size={24} />,
    highlights: ["Next.js", "VAPI" , "TypeScript","Clerk", "Junie AI", "Sentry", "Stripe"]
  },
  {
    title: "Chedder | High Powered Screen Recorder",
    description: "Chedder makes screen recording smarter with built-in transcription, highlights, and summaries—perfect for tutorials, meetings, and presentations. (In BETA v1)",
    size: "medium",
    category: "Web Development",
    links: [
      { type: "live", url: "#", icon: <Globe size={16} /> },
    ],
    icon: <Code size={24} />,
    highlights: ["TypeScript", "Bunny", "PostgreSQL/XATA", "Next.js", "Google Cloud API"]
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle window resize and set initial window size
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Don't render floating particles until client-side
  if (!isMounted) {
    return null;
  }

  return (
    <motion.section
      className="min-h-screen p-8 md:p-16 lg:p-24 relative overflow-hidden"
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
      
      {/* Floating particles - Only rendered client-side */}
      {isMounted && windowSize.width > 0 && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40 z-0"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
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
      
      {/* Title section with increased padding */}
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
            Portfolio Showcase
          </motion.span>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <motion.h2 
              className="text-6xl lg:text-8xl font-bold text-white"
            >
              Projects
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-lg pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Recent work and creative explorations
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
      
      {/* Bento grid layout */}
      <div className="relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {projects.map((project, index) => {
            // Determine grid span based on size
            let spanClass = "col-span-1 row-span-1";
            if (project.size === "large") {
              spanClass = "col-span-1 md:col-span-2 row-span-2";
            } else if (project.size === "medium") {
              spanClass = "col-span-1 md:col-span-2 lg:col-span-2 row-span-1";
            }
            
            return (
              <motion.div
                key={project.title}
                className={`relative ${spanClass}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
               <motion.div
                    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full w-full overflow-hidden group"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => {
                      const url = project.links[0]?.url;
                      if (url && url !== "#") {
                        window.open(url, "_blank");
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >

                  {/* Glass reflection effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    style={{ 
                      borderRadius: "1rem",
                      transform: "translateY(-50%)"
                    }}
                  />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-gray-400 font-medium px-2 py-1 rounded-full bg-white/5">
                      {project.category}
                    </span>
                    
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.links.map((link, i) => (
                        <motion.a
                          key={i}
                          className="p-1.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                  
                  <motion.h4 
                    className="font-semibold text-xl md:text-2xl text-white mb-2"
                    animate={hoveredProject === project.title ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  
                  {/* Highlights section - explicitly set to be visible and position relative */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-8 relative z-10">
                    {project.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 p-2 rounded-full text-white opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}