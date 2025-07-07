import { useState, useEffect } from 'react';
import { Code, Layers, Globe, Database } from 'lucide-react';

export default function GlassmorphicHeroComponent() {
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Update rotation for the continuous animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Track mouse movement for parallax effect - only on desktop
  const handleMouseMove = (e) => {
    if (isMobile) return;
    
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    setMousePosition({
      x: (clientX - centerX) / 50,
      y: (clientY - centerY) / 50
    });
  };
  
  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center" onMouseMove={handleMouseMove}>
      {/* Main Glass Card - Updated to darker theme */}
      <div 
        className="relative rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 w-full h-full overflow-hidden"
        style={{
          transform: isMobile ? 'none' : `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
        }}
      >
        {/* Floating Tech Elements - Position responsive */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute p-2 sm:p-3 md:p-4 bg-blue-500/20 backdrop-blur-md rounded-lg md:rounded-xl border border-blue-400/30 shadow-lg"
            style={{ 
              top: `${(isMobile ? 20 : 50) + Math.sin(rotation * 0.02) * (isMobile ? 5 : 10)}px`, 
              left: `${(isMobile ? 20 : 50) + Math.cos(rotation * 0.02) * (isMobile ? 5 : 10)}px`,
              transform: `rotate(${rotation * 0.1}deg)`
            }}
          >
            <Code className="text-blue-400" size={isMobile ? 18 : 28} />
          </div>
          
          <div 
            className="absolute p-2 sm:p-3 md:p-4 bg-purple-500/20 backdrop-blur-md rounded-lg md:rounded-xl border border-purple-400/30 shadow-lg"
            style={{ 
              bottom: `${(isMobile ? 20 : 50) + Math.cos(rotation * 0.02) * (isMobile ? 8 : 15)}px`, 
              right: `${(isMobile ? 30 : 80) + Math.sin(rotation * 0.02) * (isMobile ? 8 : 15)}px`,
              transform: `rotate(${-rotation * 0.1}deg)`
            }}
          >
            <Layers className="text-purple-400" size={isMobile ? 18 : 28} />
          </div>
          
          <div 
            className="absolute p-2 sm:p-3 md:p-4 bg-green-500/20 backdrop-blur-md rounded-lg md:rounded-xl border border-green-400/30 shadow-lg"
            style={{ 
              top: `${(isMobile ? 50 : 120) + Math.cos(rotation * 0.03) * (isMobile ? 10 : 20)}px`, 
              right: `${(isMobile ? 15 : 40) + Math.sin(rotation * 0.03) * (isMobile ? 10 : 20)}px`,
              transform: `rotate(${rotation * 0.15}deg)`
            }}
          >
            <Globe className="text-green-400" size={isMobile ? 18 : 28} />
          </div>
          
          <div 
            className="absolute p-2 sm:p-3 md:p-4 bg-orange-500/20 backdrop-blur-md rounded-lg md:rounded-xl border border-orange-400/30 shadow-lg"
            style={{ 
              bottom: `${(isMobile ? 25 : 60) + Math.sin(rotation * 0.025) * (isMobile ? 8 : 15)}px`, 
              left: `${(isMobile ? 40 : 100) + Math.cos(rotation * 0.025) * (isMobile ? 8 : 15)}px`,
              transform: `rotate(${-rotation * 0.05}deg)`
            }}
          >
            <Database className="text-orange-400" size={isMobile ? 18 : 28} />
          </div>
        </div>

        {/* Central 3D Code Block - Responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="bg-gray-900/90 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 shadow-2xl border border-gray-700/50 transform rotate-3 w-3/4 md:w-auto"
            style={{
              transform: isMobile ? 'rotate(3deg)' : `perspective(1000px) rotateX(${5 + mousePosition.y * 0.2}deg) rotateY(${5 + mousePosition.x * 0.2}deg)`
            }}
          >
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code>
                <span className="text-blue-400">function</span> <span className="text-green-400">createFuture</span><span className="text-white">(</span><span className="text-orange-300">vision</span><span className="text-white">) {`{`}</span>
                <br />
                <span className="text-gray-400 ml-2 md:ml-4">// Building innovative solutions</span>
                <br />
                <span className="text-purple-400 ml-2 md:ml-4">const</span> <span className="text-blue-300">stack</span> <span className="text-white">=</span> <span className="text-orange-300">[</span><span className="text-green-300">'React'</span><span className="text-white">,</span> <span className="text-green-300">'C#'</span><span className="text-white">,</span> <span className="text-green-300">'Python'</span><span className="text-orange-300">]</span><span className="text-white">;</span>
                <br />
                <span className="text-purple-400 ml-2 md:ml-4">const</span> <span className="text-blue-300">result</span> <span className="text-white">=</span> <span className="text-blue-400">await</span> <span className="text-green-400">buildSolution</span><span className="text-white">(vision, stack);</span>
                <br />
                <span className="text-purple-400 ml-2 md:ml-4">return</span> <span className="text-blue-300">result</span><span className="text-white">;</span>
                <br />
                <span className="text-white">{`}`}</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Decorative Elements - Updated for darker theme and made responsive 
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-xl md:blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-purple-500/10 rounded-full blur-xl md:blur-2xl"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-green-500/10 rounded-full blur-md sm:blur-lg md:blur-xl"></div>
        </div>*/}

        {/* Experience Badge - Responsive positioning and sizing */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 bg-black/70 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-full border border-gray-700/30">
          <p className="text-white/90 text-xs sm:text-sm font-medium">Fullstack Developer • Entrepreneur</p>
        </div>
      </div>
    </div>
  );
}