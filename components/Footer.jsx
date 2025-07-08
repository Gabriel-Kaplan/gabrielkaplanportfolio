"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/gabriel._kaplan/", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/gabriel-kaplan-a82492112/", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://x.com/gabrielkappy", label: "Twitter / X" },
  ];

  const navLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
  ];

  return (
    <motion.footer 
      className="bg-black py-16 px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-black z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Scroll to top button */}
        <div className="absolute right-4 top-0 transform -translate-y-1/2">
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand/Logo section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white text-2xl font-bold mb-6">Gabriel Kaplan</h3>
            <p className="text-gray-400 mb-6">
              Creating innovative digital experiences with a focus on performance, design, and user experience.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:text-center"
          >
            <h4 className="text-white text-lg font-medium mb-6">Site Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:text-right"
          >
            <h4 className="text-white text-lg font-medium mb-6">Contact</h4>
            <p className="text-gray-400 mb-2">gabrielkappy@gmail.com</p>
            <p className="text-gray-400 mb-6">Ra&apos;anana, Israel</p>
            
           <a 
          href="mailto:gabrielkappy@gmail.com" 
          className="inline-block text-white font-medium hover:text-gray-300 transition-colors border-b border-white/30 pb-1"
        >
          Get in touch
        </a>

          </motion.div>
        </div>
        
        {/* Copyright and divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-px bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Designed & Developed by Gabriel Kaplan
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

//{ icon: <Github size={18} />, href: "https://x.com/gabrielkappy", label: "Instagram" }