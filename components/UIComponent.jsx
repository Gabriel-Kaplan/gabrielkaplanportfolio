import { useState, useEffect } from 'react';
import { Code, LineChart, BarChart2, Server, Database, MoveUpRight } from 'lucide-react';

// 3D Interactive Device Component
export default function Interactive3DDevice() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  // Animated content for the device screens
  const screens = [
    // Code screen
    <div key="code" className="h-full w-full flex flex-col">
      <div className="flex items-center bg-slate-800 px-3 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-slate-400 ml-3">main.js</div>
      </div>
      <div className="flex-1 p-3 overflow-hidden bg-slate-900 text-left">
        <pre className="text-xs">
          <span className="text-blue-400">const</span> <span className="text-green-400">app</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">createApp</span><span className="text-slate-400">()</span><br />
          <br />
          <span className="text-blue-400">function</span> <span className="text-yellow-400">initialize</span><span className="text-slate-400">() {'{'}</span><br />
          <span className="text-slate-400">{'  '}app.</span><span className="text-yellow-400">use</span><span className="text-slate-400">(</span><span className="text-orange-400">&apos;api&apos;</span><span className="text-slate-400">)</span><br />
          <span className="text-slate-400">{'  '}app.</span><span className="text-yellow-400">mount</span><span className="text-slate-400">(</span><span className="text-orange-400">&apos;#root&apos;</span><span className="text-slate-400">)</span><br />
          <span className="text-slate-400">{'  '}</span><span className="text-purple-400">console</span><span className="text-slate-400">.</span><span className="text-yellow-400">log</span><span className="text-slate-400">(</span><span className="text-orange-400">&lsquo;App started!&apos;</span><span className="text-slate-400">)</span><br />
          <span className="text-slate-400">{'}'}</span><br />
          <br />
          <span className="text-yellow-400">initialize</span><span className="text-slate-400">()</span>
        </pre>
      </div>
    </div>,
    
    // Analytics screen
    <div key="analytics" className="h-full w-full bg-slate-900 flex flex-col">
      <div className="bg-slate-800 px-3 py-2 text-sm text-center font-medium text-slate-300">
        Analytics Dashboard
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div className="text-xs text-slate-400 mb-2">Monthly Performance</div>
        <div className="flex-1 flex items-end space-x-1">
          {[35, 45, 30, 60, 75, 65, 80, 75, 90, 85, 95].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t"
                style={{ height: `${height}%`, opacity: 0.7 + (i * 0.02) }}
              ></div>
              <div className="text-slate-500 text-xs mt-1">{String.fromCharCode(97 + i)}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-xs">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
            <span className="text-slate-400">Revenue</span>
          </div>
          <div className="text-xs text-green-400">+24.8%</div>
        </div>
      </div>
    </div>,
    
    // App UI screen
    <div key="app" className="h-full w-full bg-slate-900 flex flex-col">
      <div className="px-2 py-3 flex justify-between items-center border-b border-slate-800">
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">G</div>
        <div className="text-xs text-slate-300">Modern App UI</div>
        <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
          <div className="w-3 h-0.5 bg-slate-400 rounded"></div>
        </div>
      </div>
      <div className="flex-1 px-3 py-4">
        <div className="mb-4">
          <div className="w-2/3 h-2 bg-slate-800 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
        </div>
        <div className="flex space-x-2 mb-4">
          <div className="w-10 h-10 rounded bg-indigo-500/30 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-indigo-500/80"></div>
          </div>
          <div className="w-10 h-10 rounded bg-blue-500/30 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-blue-500/80"></div>
          </div>
          <div className="w-10 h-10 rounded bg-purple-500/30 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-purple-500/80"></div>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <div className="w-1/3 h-2 bg-slate-800 rounded"></div>
            <div className="text-xs text-blue-400">View All</div>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center p-2 bg-slate-800/50 rounded">
                <div className="w-6 h-6 rounded bg-slate-700 mr-2"></div>
                <div>
                  <div className="w-16 h-1.5 bg-slate-700 mb-1"></div>
                  <div className="w-12 h-1.5 bg-slate-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ];

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
    
    setRotation({ x, y });
  };

  // Cycle through screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1000">
      {/* 3D Device Container */}
      <div 
        className="relative w-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setRotation({ x: 0, y: 0 });
        }}
      >
        {/* Device Frame */}
        <div 
          className="relative w-full transition-transform duration-200 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          {/* Device Body */}
          <div className="w-full aspect-[5/3] bg-slate-800 rounded-xl overflow-hidden border-4 border-slate-700 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-slate-900 overflow-hidden">
              {screens[activeScreen]}
            </div>
          </div>
          
          {/* Bottom Edge */}
          <div 
            className="absolute w-full h-4 bg-slate-700 -bottom-4 rounded-b-lg origin-top"
            style={{ 
              transform: 'rotateX(-90deg) translateZ(-2px)',
              transformStyle: 'preserve-3d'
            }}
          ></div>
          
          {/* Right Edge */}
          <div 
            className="absolute w-4 h-full bg-slate-700 -right-4 top-0 rounded-r-lg origin-left"
            style={{ 
              transform: 'rotateY(90deg) translateZ(-2px)',
              transformStyle: 'preserve-3d'
            }}
          ></div>
          
          {/* Left Edge */}
          <div 
            className="absolute w-4 h-full bg-slate-600 -left-4 top-0 rounded-l-lg origin-right"
            style={{ 
              transform: 'rotateY(-90deg) translateZ(-2px)',
              transformStyle: 'preserve-3d'
            }}
          ></div>
        </div>
        
        {/* Tech Icons floating around */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-float absolute -top-4 -left-8 p-2 rounded-lg bg-slate-800/80 backdrop-blur">
            <Code size={20} className="text-blue-400" />
          </div>
          <div className="animate-float-delayed absolute -bottom-8 left-16 p-2 rounded-lg bg-slate-800/80 backdrop-blur">
            <Database size={20} className="text-indigo-400" />
          </div>
          <div className="animate-float-slow absolute -right-8 top-16 p-2 rounded-lg bg-slate-800/80 backdrop-blur">
            <LineChart size={20} className="text-emerald-400" />
          </div>
          <div className="animate-float-reverse absolute -bottom-4 -right-4 p-2 rounded-lg bg-slate-800/80 backdrop-blur">
            <Server size={20} className="text-purple-400" />
          </div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        
        {/* Screen Content Selector */}
        <div className="absolute bottom-[-3rem] left-0 right-0 flex justify-center space-x-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScreen(index)}
              className={`w-2 h-2 rounded-full transition-all ${activeScreen === index ? 'bg-indigo-500 w-4' : 'bg-slate-600'}`}
              aria-label={`View screen ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Interactive hint */}
        <div className="absolute top-[-2rem] right-0 flex items-center space-x-2 text-xs text-slate-400 opacity-75">
          <span>Interactive</span>
          <div className="animate-pulse">
            <MoveUpRight size={14} />
          </div>
        </div>
      </div>
      
      {/* Reflection */}
      <div className="mt-4 w-full h-16 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-md transform scale-75 opacity-50 mx-auto"></div>
    </div>
  );
}