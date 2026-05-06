import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiThreedotjs, SiExpress, SiMongodb, SiMysql, SiVercel, SiNetlify } from 'react-icons/si';

const skillsData = [
  {
    category: "Frontend",
    glowColor: "rgba(0, 229, 255, 0.4)",
    borderColor: "group-hover:border-[#00E5FF]/50",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#00E5FF]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#3B82F6]" /> },
      { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
    ]
  },
  {
    category: "Backend",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderColor: "group-hover:border-[#10B981]/50",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#10B981]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "PHP", icon: <FaPhp className="text-[#8B5CF6]" /> },
    ]
  },
  {
    category: "Database",
    glowColor: "rgba(139, 92, 246, 0.4)",
    borderColor: "group-hover:border-[#8B5CF6]/50",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#10B981]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#3B82F6]" /> },
    ]
  },
  {
    category: "Tools",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "group-hover:border-[#3B82F6]/50",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00E5FF]" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// 3D Tilt Card Component
const TiltCard = ({ children, delay }) => {
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
    
    x.set(xPct * 15); // max 15 deg tilt
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        perspective: 1000
      }}
      className="glass-card p-8 md:p-10 cursor-pointer"
    >
      <div style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Technical <span className="text-[#00E5FF]">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, i) => (
            <TiltCard key={group.category} delay={i * 0.1}>
              <h3 className="text-xl font-semibold mb-6 text-center tracking-wide text-white/90">
                {group.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: Math.random() > 0.5 ? 2 : -2,
                      y: -2,
                      boxShadow: `0 10px 25px -5px ${group.glowColor}`
                    }}
                    className={`group flex items-center gap-4 bg-[#0F172A]/80 p-4 rounded-xl border border-white/5 transition-all duration-300 ${group.borderColor}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div 
                      className="text-2xl"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3 + (idx * 0.2), 
                        ease: "easeInOut" 
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-[#E2E8F0]">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
