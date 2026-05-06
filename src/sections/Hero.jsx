import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiMysql, SiExpress, SiFramer, SiNextdotjs, SiThreedotjs, SiGreensock } from 'react-icons/si';

const iconComponents = [
  <FaReact color="#61DAFB" />,
  <FaNodeJs color="#339933" />,
  <SiMongodb color="#47A248" />,
  <FaGitAlt color="#F05032" />,
  <SiTailwindcss color="#06B6D4" />,
  <SiTypescript color="#3178C6" />,
  <SiMysql color="#4479A1" />,
  <SiExpress color="#FFFFFF" />,
  <FaGithub color="#FFFFFF" />,
  <FaPython color="#3776AB" />,
  <SiFramer color="#0055FF" />,
  <SiNextdotjs color="#FFFFFF" />,
  <SiThreedotjs color="#FFFFFF" />,
  <SiGreensock color="#88CE02" />,
];

// Distribute points on a sphere
const radius = 1.6;
const icons = iconComponents.map((icon, i) => {
  const phi = Math.acos(-1 + (2 * i) / iconComponents.length);
  const theta = Math.sqrt(iconComponents.length * Math.PI) * phi;
  return {
    icon,
    position: [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    ]
  };
});

const TechSphere = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing core */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#0F172A" transparent opacity={0.8} />
      </mesh>
      
      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.4, 1.42, 64]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.2} side={2} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <ringGeometry args={[1.4, 1.42, 64]} />
        <meshBasicMaterial color="#22C55E" transparent opacity={0.2} side={2} />
      </mesh>
      <mesh>
        <ringGeometry args={[1.4, 1.42, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.2} side={2} />
      </mesh>

      {/* Floating Icons */}
      {icons.map((item, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group position={item.position}>
            <Html center zIndexRange={[100, 0]}>
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md border border-white/10">
                {item.icon}
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
};

const BackgroundParticles = () => {
  const pointsRef = useRef();
  const particlesCount = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00E5FF" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* 3D Background & Main Element */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <BackgroundParticles />
          <TechSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container-custom z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <h2 className="text-[#F3F4F6] font-medium tracking-widest uppercase text-xs sm:text-sm">
              Hello, World! I am
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] font-black mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl text-white">
            Shreya Raval
            <span className="text-gradient block mt-2 text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] pb-2">Full Stack Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#9CA3AF] mb-12 max-w-2xl leading-relaxed font-light">
            I build scalable, immersive web applications with modern technologies. Bridging the gap between beautiful UI design and robust backend engineering.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <a
              href="#projects"
              className="px-10 py-4 bg-gradient-to-r from-[#00E5FF] to-[#3B82F6] text-[#0A0F1C] rounded-full font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-10 py-4 glass text-white rounded-full font-bold text-lg tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
