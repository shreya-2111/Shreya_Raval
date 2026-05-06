import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    title: "Motion Graphic Designer Portfolio",
    description: "A modern portfolio website with smooth animations and 3D effects. Features include premium UI design, 3D hero animation, and smooth scroll effects.",
    image: project3,
    techStack: ["Next.js", "React", "Three.js", "GSAP", "Framer Motion"],
    liveLink: "https://sumit-tirmare.vercel.app/",
    githubLink: "https://github.com/shreya-2111/3D-Portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "Alex Carter – Premium Portfolio",
    description: "A premium, immersive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber.",
    image: project1,
    techStack: ["React 18", "TypeScript", "Three.js", "Tailwind", "GSAP"],
    liveLink: "https://framer-portfolio-1.vercel.app/",
    githubLink: "https://github.com/shreya-2111/Framer_Portfolio_1",
    featured: false,
  },
  {
    id: 3,
    title: "Premium Developer Portfolio",
    description: "A modern, dark, immersive portfolio built with React + TypeScript + Vite + Tailwind CSS + GSAP + Three.js.",
    image: project2,
    techStack: ["React", "TypeScript", "Tailwind", "GSAP", "Three.js"],
    liveLink: "https://framer-portfolio-2.vercel.app/",
    githubLink: "https://github.com/shreya-2111/Framer_Portfolio_2",
    featured: false,
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 10); // subtle tilt for projects
    y.set(yPct * -10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
    >
      {/* 3D Tilt Image Container */}
      <div 
        className="w-full lg:w-3/5 perspective-[1200px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={ref}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-[2rem] overflow-hidden glass-card p-2 group-hover:border-[#00E5FF]/50 transition-colors duration-500"
        >
          <div className="relative overflow-hidden rounded-[1.5rem]" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 bg-[#00E5FF]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover object-top transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            {/* Floating Mini Preview / Badge */}
            <div 
              className="absolute bottom-6 right-6 glass px-5 py-2.5 rounded-full z-20 flex items-center gap-3 shadow-2xl border border-white/20 backdrop-blur-xl"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]" />
              <span className="text-sm font-bold tracking-widest uppercase text-white">Live</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        {project.featured && (
          <span className="text-[#00E5FF] font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
            <span className="w-6 h-px bg-[#00E5FF]"></span> Featured Project
          </span>
        )}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white group-hover:text-[#00E5FF] transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <div className="glass-card p-8 rounded-3xl mb-8 relative z-10">
          <p className="text-[#9CA3AF] leading-relaxed text-lg font-light">
            {project.description}
          </p>
        </div>
        
        <ul className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map(tech => (
            <li key={tech} className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[#F3F4F6] text-sm font-medium tracking-wide">
              {tech}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-6">
          <a href={project.githubLink} className="flex items-center gap-2 text-white hover:text-[#00E5FF] transition-colors font-bold tracking-wider uppercase text-sm group/link">
            <FaGithub className="text-2xl group-hover/link:scale-110 transition-transform" /> GitHub
          </a>
          <a href={project.liveLink} className="flex items-center gap-2 text-[#00E5FF] hover:text-white transition-colors font-bold tracking-wider uppercase text-sm group/link">
            <FaExternalLinkAlt className="text-xl group-hover/link:scale-110 transition-transform" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Featured <span className="text-[#00E5FF]">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32 flex justify-center"
        >
          <a
            href="https://github.com/shreya-2111"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-4 px-12 py-5 glass border border-[#00E5FF]/30 rounded-full font-bold tracking-wide hover:bg-white/5 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            <FaGithub className="text-2xl text-white group-hover:text-[#00E5FF] transition-colors duration-300" />
            <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00E5FF] group-hover:to-[#3B82F6] transition-all duration-300">
              VIEW ALL PROJECTS
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
