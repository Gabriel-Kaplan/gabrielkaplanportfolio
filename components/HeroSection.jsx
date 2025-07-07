"use client";
import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import GlassmorphicHeroComponent from './GlassmorphicComp';
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const floatingRef = useRef(null);
  const heroRef = useRef(null);
  const [heroInView, setHeroInView] = useState(false);

  const checkInView = () => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
      setHeroInView(isInView);
    }
  };
  

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (floatingRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        floatingRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    checkInView();
    
    window.addEventListener('scroll', checkInView);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getRotationValues = () => {
    if (!isMounted || typeof window === 'undefined') {
      return { rotateY: 0, rotateX: 0 };
    }
    
    return {
      rotateY: mousePosition.x / window.innerWidth * 10 - 5,
      rotateX: -(mousePosition.y / window.innerHeight * 10 - 5)
    };
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_80%_40%,rgba(29,78,216,0.15),transparent_80%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_20%_60%,rgba(124,58,237,0.15),transparent_80%)]"></div>
        </div>        
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.015]"></div>
      </div>

    <div className="relative z-10 container mx-auto">
  {/* Hero section */}
  <section
    ref={heroRef}
    className="mt-12 px-6 py-12 flex flex-col lg:flex-row items-center justify-between m-auto gap-10"
  >
          <div className="w-full lg:w-full md:w-full text-left m-auto">
            <div className="mb-12">
              <div className="overflow-hidden mb-6">
                <motion.h1
                  className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="text-white block">Hi, I'm Gabriel</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 block">
                    Kaplan
                  </span>
                </motion.h1>
              </div>

              <div className="overflow-hidden mb-8">
                <motion.div
                  className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                 FULL STACK DEVELOPER
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
                  I don't build features—I solve problems. My philosophy is simple: understand the real need, design the right solution, and execute it flawlessly. Every project I take on must pass one test: does it create measurable value? The result is purposeful technology that doesn't just work—it drives results and transforms how users engage with technology.
                </motion.p>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center px-8 py-4 rounded-2xl text-lg font-semibold overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgb(59, 130, 246), rgb(99, 102, 241))",
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-white mr-2">View My Work</span>
                <ChevronRight size={20} className="relative z-10 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#contact me"
                className="inline-flex items-center px-8 py-4 rounded-2xl text-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                Let&lsquo;s Connect
              </motion.a>
            </motion.div>
          </div>

          <motion.div className="w-full flex justify-center items-center perspective-[1000px]">
            <GlassmorphicHeroComponent />
            <div className="relative">
              <motion.div
                animate={getRotationValues()}
                transition={{ type: "spring", stiffness: 75, damping: 15 }}
                className="will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div ref={floatingRef} className="absolute -inset-10 z-0">
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-blue-500/10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
                </div>
              </motion.div>
              
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-2xl"></div>
            </div>
          </motion.div>
        </section>

        {/* Social links */}
        <section className="relative pb-12 mt-12 px-6">
          <motion.div
            className="flex justify-center space-x-8 md:space-x-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { icon: <FaInstagram />, url: "https://www.instagram.com/gabriel._kaplan/", color: "#E1306C", label: "Instagram" },
              { icon: <FaTwitter />, url: "https://x.com/gabrielkappy", color: "#1DA1F2", label: "Twitter" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/gabriel-kaplan-a82492112/", color: "#0077B5", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label={social.label}
              >
                <motion.div
                  className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle, ${social.color}33 0%, transparent 70%)` }}
                ></motion.div>
                <div className="relative text-3xl md:text-4xl text-white group-hover:text-white/90 transition-colors">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>          
        </section>
      </div>
    </div>
  );
}