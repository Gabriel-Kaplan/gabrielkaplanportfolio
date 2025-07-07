"use client";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { User, Folder, Code, Clock, MessageCircle, ChevronRight, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  // Navigation state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = (!isMenuOpen && isMobileView) ? 'hidden' : 'auto';
  };

const handleNavigation = (sectionName) => {
  if (!isMobileView) {
    setIsHovered(false); // close immediately before scroll
  }

  const element = document.getElementById(sectionName.toLowerCase());
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50); // tiny delay to let menu close first
  }

  if (isMobileView) {
    toggleMenu();
  }
};


  const menuItems = [
    { name: 'About', icon: <User size={20} className="text-blue-400" />, description: "Learn more about me" },
    { name: 'Projects', icon: <Folder size={20} className="text-indigo-400" />, description: "See my work" },
    { name: 'Skills', icon: <Code size={20} className="text-emerald-400" />, description: "My technical expertise" },
    { name: 'Timeline', icon: <Clock size={20} className="text-amber-400" />, description: "My journey" },
    { name: 'Testimonials', icon: <MessageCircle size={20} className="text-rose-400" />, description: "What others say" },
    {name: 'Contact Me', icon: <Phone size={20} className="text-orange-400" />, description: "Send me an email :)"}
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-transparent dark:text-white">
      <Head>
        <title>Gabriel Kaplan | Full-Stack Developer & Entrepreneur</title>
        <meta name="description" content="Expert full-stack developer specializing in React, Next.js and cloud solutions. Transform your digital presence with cutting-edge web applications." />
        <meta name="keywords" content="full-stack developer, React developer, Next.js, JavaScript, TypeScript, web development, software engineer" />
      </Head>
      
      {/* Navigation Component */}
      <>
        {/* Scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-indigo-600" 
            style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.2s' }}
          ></div>
        </div>

        {/* Fixed navigation header */}
        <header className="relative top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md">
          <div className="max-w-full mx-auto flex justify-between items-center px-6 py-5">
            {/* Desktop navigation menu - HIDDEN ON MOBILE */}
            <div className="hidden md:block z-20" ref={dropdownRef}>
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setIsHovered(false);
                  }, 300);
                }}
              >
                <motion.button 
                  className="text-white p-4 rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu size={28} />
                </motion.button>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="absolute left-0 top-full mt-3 w-80 rounded-3xl overflow-hidden z-50"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      style={{
                        background: "rgba(15, 23, 42, 1.0)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                      }}
                      onMouseEnter={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => {
                          setIsHovered(false);
                        }, 300);
                      }}
                    >
                      <div className="p-3">
                        {menuItems.map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex flex-col p-5 my-2 rounded-2xl hover:bg-white/5 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                            variants={menuItemVariants}
                            whileHover={{ 
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                              transition: { duration: 0.2 }
                            }}
                            onClick={() => handleNavigation(item.name)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            
                            <div className="flex items-center">
                              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900/40 mr-5">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-white font-medium text-lg">{item.name}</div>
                                <div className="text-slate-400 text-sm">{item.description}</div>
                              </div>
                              <ChevronRight size={18} className="ml-auto transform group-hover:translate-x-1 transition-transform duration-200 text-slate-400" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu placeholder - keeps layout balanced */}
            <div className="md:hidden w-12 h-12"></div>

            {/* Logo */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 rounded-full p-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={isMobileView ? 70 : 90} 
                  height={isMobileView ? 70 : 90} 
                  className="relative z-10 rounded-full" 
                />
              </div>
            </motion.div>

            {/* Mobile menu button - ONLY VISIBLE ON MOBILE */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 rounded-xl bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile menu - ONLY SHOWS ON MOBILE */}
        <AnimatePresence>
          {isMenuOpen && isMobileView && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative z-50 w-full h-full flex flex-col items-center justify-center p-8">
                  <motion.button 
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Image src="/logo.png" alt="Logo" width={100} height={100} className="mb-8" />
                  </motion.div>
                  
                  <nav className="w-full max-w-xs">
                    <motion.ul 
                      className="space-y-4"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {menuItems.map((item, index) => (
                        <motion.li 
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                          }}
                        >
                          <motion.div 
                            className="flex items-center py-4 px-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-indigo-500 cursor-pointer"
                            onClick={() => handleNavigation(item.name)}
                            whileHover={{ x: 5 }}
                          >
                            <div className="mr-4">{item.icon}</div>
                            <div>
                              <div className="font-bold text-lg">{item.name}</div>
                              <div className="text-sm text-slate-400">{item.description}</div>
                            </div>
                          </motion.div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>

      {/* Page Content */}
      <HeroSection />
      <section id="projects">
        <ProjectSection />
      </section>
      
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="timeline">
        <TimelineSection />
      </section>
      
      <section id="contact me">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}