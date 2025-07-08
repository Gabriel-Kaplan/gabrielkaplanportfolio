"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Cloud, Palette, CheckCircle } from 'lucide-react';

const skills = [
  { name: 'JavaScript & TS', category: 'frontend', icon: <Code size={18} /> }, // Type safety + JS foundation
  { name: 'React', category: 'frontend', icon: <Code size={18} /> },                 // Still dominant UI framework
  { name: 'Next.js', category: 'fullstack', icon: <Code size={18} /> },              // Server components, app router
  { name: 'C# / Python', category: 'backend', icon: <Database size={18} /> },        // Backend JS ecosystem
  { name: 'Cloud Services', category: 'devops', icon: <Cloud size={18} /> },         // Deployment & scaling
  { name: 'AI Integration', category: 'emerging', icon: <Cpu size={18} /> },         // LLM APIs, embeddings, agents
  { name: 'UI/UX Design', category: 'design', icon: <Palette size={18} /> },         // Design systems & interfaces
  { name: 'MongoDB/SQL', category: 'data', icon: <Database size={18} /> },          // Data storage & management
  { name: 'Testing/QA', category: 'quality', icon: <CheckCircle size={18} /> },      // Quality assurance
];


export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
 {/*} useEffect(() => {
    let timeout;
    const updateMousePosition = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 10); // adjust this for smoother/slower response
    };
  
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []); */}

  return (
    <motion.section
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >  
      {/* Title section on the left with increased padding */}
      <div className="w-full lg:w-1/2 mb-16 lg:mb-0 z-10 pr-0 lg:pr-12">
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
            Professional Expertise
          </motion.span>
          
          <motion.h2 
            className="text-7xl lg:text-8xl font-bold text-white mb-8"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(255,255,255,0.3)",
                "0 0 15px rgba(255,255,255,0.5)",
                "0 0 5px rgba(255,255,255,0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            My Skills
          </motion.h2>
          
          <motion.div 
            className="h-1 w-16 bg-white mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-lg text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Blending technical expertise with creative innovation to build cutting-edge digital experiences that push boundaries.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Skills on the right with improved spacing */}
      <div className="w-full lg:w-1/2 z-10">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center h-36 overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glass reflection effect */}
                <motion.div
                  className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ 
                    borderRadius: "1rem",
                    transform: "translateY(-50%)"
                  }}
                />
                
                {/* Icon with animation */}
                <motion.div 
                  className="mb-4 p-3 rounded-full bg-white/10 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                
                {/* Skill name */}
                <motion.p 
                  className="font-medium text-white text-lg text-center"
                  animate={hoveredSkill === skill.name ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {skill.name}
                </motion.p>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}