'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useRef } from 'react';

function RotatingGlobe() {
  const globeRef = useRef();
  const earthTexture = useLoader(TextureLoader, '/globe2.avif'); // Make sure this exists in /public

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={globeRef} scale={0.75}>
      {/* Earth Sphere with B/W Texture */}
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Glittering Wireframe Mesh */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <div className="w-full h-[350px] md:h-[500px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        <RotatingGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
