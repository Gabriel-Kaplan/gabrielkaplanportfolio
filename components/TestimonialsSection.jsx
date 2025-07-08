"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anthony Kaplan',
    role: 'Owner & Founder',
    quote: 'Working with Gabriel was a fantastic experience. He brought our vision to life quickly and professionally.',
    rating: 5,
    company: 'A.Kaplan Attorneys'
  },
  {
    name: 'Shalya Katzeff',
    role: 'Owner & Founder',
    quote: 'Gabriel completely revamped my business’s image online. He’s talented, patient, and really knows what he’s doing.',
    rating: 5,
    company: 'Shalicious Nails'
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  
  
  // Auto-rotate testimonials effect
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Slow rotation - change every 8 seconds
    
    return () => clearInterval(rotationInterval);
  }, []);

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
            Client Feedback
          </motion.span>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <motion.h2 
              className="text-6xl lg:text-8xl font-bold text-white"
            >
              Testimonials
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-lg pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              What clients say about our collaboration
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
      
      {/* Testimonials carousel */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="flex transition-all duration-1000 ease-in-out" // Slower transition
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col h-full overflow-hidden group"
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
                  
                  <div className="flex justify-between items-start mb-8">
                    <motion.div
                      className="p-3 rounded-full bg-white/5 text-white"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Quote size={32} />
                    </motion.div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </motion.p>
                  
                  <div className="mt-auto">
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-slate-950 border-2 border-slate-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      
                      <div className="ml-4">
                        <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <span>{testimonial.role}</span>
                          <span className="mx-2">•</span>
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              className={`h-1 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-10' : 'bg-white/30 w-4'
              }`}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}