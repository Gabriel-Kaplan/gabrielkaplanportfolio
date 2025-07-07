"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Calendar } from 'lucide-react';

export default function ContactSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hasAutofilled, setHasAutofilled] = useState(false);
  
  // Function to handle autofill detection
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    
    // Check for autofill on page load
    setTimeout(() => {
      inputs.forEach(input => {
        // Check if input has been autofilled by browser
        const isAutofilled = input.matches(':-webkit-autofill') || 
                            (window.getComputedStyle(input).backgroundColor !== 'rgba(255, 255, 255, 0.1)');
        
        if (isAutofilled && !hasAutofilled) {
          setHasAutofilled(true);
          // Update form data when autofill is detected
          setFormData(prevData => ({
            ...prevData,
            [input.name]: input.value
          }));
        }
      });
    }, 500); // Small delay to allow autofill to complete

    // Monitor for animation of autofill
    inputs.forEach(input => {
      input.addEventListener('animationstart', (e) => {
        if (e.animationName === 'onAutoFillStart') {
          setHasAutofilled(true);
          setFormData(prevData => ({
            ...prevData,
            [input.name]: input.value
          }));
        }
      });
    });
  }, [hasAutofilled]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipient: 'gabrielkappy@gmail.com'
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 10000);
    }
  };
  
  const contactInfo = [
    {
      id: "email",
      icon: <Mail size={24} />,
      title: "Email",
      value: "gabrielkappy@gmail.com",
      link: "mailto:gabrielkappy@gmail.com",
      color: "black"
    },
    {
      id: "phone",
      icon: <Phone size={24} />,
      title: "Phone",
      value: "054 966 3157",
      link: "tel:+972549663157",
      color: "black"
    },
    {
      id: "location",
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Ra'anana, Israel",
      link: null,
      color: "black"
    },
    {
      id: "availability",
      icon: <Clock size={24} />,
      title: "Availability",
      value: "8:00 AM - 8:00 PM IST",
      link: null,
      color: "black"
    }
  ];

  return (
    <motion.section
      className="min-h-[70vh] py-20 px-8 md:px-16 lg:px-24 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-black z-0" />
        
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center sm:text-left" // Center content on smallest screens
            >
              <motion.span
                className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Let&apos;s Connect
              </motion.span>
              
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Contact Me
              </motion.h2>
              
              <motion.div 
                className="h-1 w-16 bg-white mb-8 mx-auto sm:mx-0" // Center on mobile
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              
              <motion.p 
                className="text-lg text-gray-300 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Whether you have a project in mind, a question about my work, or just want to say hello, 
                I&apos;d love to hear from you. Let&apos;s create something amazing together.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setActiveCard(item.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {item.link ? (
                      <motion.a
                        href={item.link}
                        className={`block p-6 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/5 h-full`}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ContactCard 
                          icon={item.icon} 
                          title={item.title} 
                          value={item.value} 
                          isActive={activeCard === item.id}
                        />
                      </motion.a>
                    ) : (
                      <motion.div
                        className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/5 h-full`}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ContactCard 
                          icon={item.icon} 
                          title={item.title} 
                          value={item.value} 
                          isActive={activeCard === item.id}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-12 text-left sm:text-left" // Center on mobile
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h3 className="text-white text-xl font-medium mb-4">Schedule a Time with Me</h3>
                <div className="flex items-center justify-center sm:justify-start"> {/* Center on mobile */}
                  <span className="text-gray-300">
                    I’m currently available for new projects, collaborations, or employment opportunities. Let’s schedule a time to connect.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Contact form */}
          <motion.div
            className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-white text-2xl font-semibold mb-6">Send a Message</h3>
            
            {submitStatus === 'success' ? (
              <motion.div 
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-medium mb-1">Message sent successfully!</p>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all autofill:bg-white/20"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all autofill:bg-white/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/10 border border-white/10 rounded-lg text-white h-32 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <motion.div 
                    className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-white text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Something went wrong. Please try again or email me directly. At gabrielkappy@gmail.com
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 bg-transparent border border-white/20 text-white font-medium rounded-2xl relative overflow-hidden group disabled:opacity-50"
                  whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {/* Button content with icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <motion.svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path 
                          d="M5 12H19M19 12L13 6M19 12L13 18" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </span>

                  {/* Background elements */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-full bg-white z-0 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Animated dots/particles that appear on hover */}
                  <motion.div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-blue-400"
                        initial={{ 
                          x: '50%', 
                          y: '50%', 
                          scale: 0,
                          opacity: 0 
                        }}
                        whileHover={{ 
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100}%`,
                          scale: Math.random() * 3 + 1,
                          opacity: Math.random() * 0.7
                        }}
                        transition={{ 
                          duration: 0.8 + i * 0.2, 
                          delay: 0.1 * i,
                          ease: "easeOut" 
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ContactCard({ icon, title, value, isActive }) {
  return (
    <div className="flex flex-col items-center sm:items-left text-center sm:text-left">
      <motion.div 
        className="p-2 rounded-full bg-white/10 text-white mb-3 w-12 h-12 flex items-center justify-center self-center sm:self-center"
        animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-gray-300 text-sm mb-1">{title}</h3>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}