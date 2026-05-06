import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: "Master's Degree (MSc IT)",
    institution: "Gujarat Law Society University (GLS University), Ahmedabad",
    duration: "2025 - 2027",
    status: "IN PROGRESS"
  },
  {
    id: 2,
    degree: "Bachelor's Degree (BCA)",
    institution: "Gujarat Law Society University (GLS University), Ahmedabad",
    duration: "2022 - 2025",
    status: ""
  }
];

const experiences = [
  {
    id: 1,
    role: "Flutter Developer",
    company: "Augmented Systems LLP, Ahmedabad, Gujarat",
    duration: "6 Months",
    description: [
      "Developed and optimized cross-platform mobile applications using Flutter and Dart.",
      "Collaborated with the design and backend teams to ensure seamless integration and smooth UI/UX.",
      "Identified and fixed critical bugs, improving application stability and performance."
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Education & <span className="text-[#00E5FF]">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-white flex items-center gap-4">
              <span className="text-[#00E5FF] p-3 rounded-full bg-[#00E5FF]/10">🎓</span> Education
            </h3>
            <div className="relative border-l-2 border-[#00E5FF]/20 ml-5 md:ml-0">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mb-12 ml-10 md:ml-12 relative last:mb-0"
                >
                  <div className="absolute -left-[49px] md:-left-[57px] top-6 w-5 h-5 bg-[#0A0F1C] border-4 border-[#00E5FF] rounded-full shadow-[0_0_15px_#00E5FF]" />
                  
                  <div className="glass-card p-8 group hover:border-[#00E5FF]/30 transition-all duration-300">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-3 tracking-tight">{edu.degree}</h3>
                      {edu.status && (
                        <span className="w-max text-xs font-bold text-[#0A0F1C] bg-[#00E5FF] px-3 py-1 rounded-full mb-4 tracking-wider">
                          {edu.status}
                        </span>
                      )}
                      <span className="text-[#9CA3AF] font-light text-lg leading-relaxed">{edu.institution}</span>
                    </div>
                    <span className="text-[#00E5FF] font-medium text-sm mt-4 inline-block bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20">
                      {edu.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-white flex items-center gap-4">
              <span className="text-[#8B5CF6] p-3 rounded-full bg-[#8B5CF6]/10">💼</span> Experience
            </h3>
            <div className="relative border-l-2 border-[#8B5CF6]/20 ml-5 md:ml-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mb-12 ml-10 md:ml-12 relative last:mb-0"
                >
                  <div className="absolute -left-[49px] md:-left-[57px] top-6 w-5 h-5 bg-[#0A0F1C] border-4 border-[#8B5CF6] rounded-full shadow-[0_0_15px_#8B5CF6]" />
                  
                  <div className="glass-card p-8 group hover:border-[#8B5CF6]/30 transition-all duration-300">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors tracking-tight">{exp.role}</h3>
                      <span className="text-[#9CA3AF] font-medium text-base mt-2">@ {exp.company}</span>
                      <span className="text-[#8B5CF6] font-medium text-sm mt-4 w-max bg-[#8B5CF6]/10 px-4 py-1.5 rounded-full border border-[#8B5CF6]/20">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="list-none space-y-4 mb-6 text-[#F3F4F6] text-base leading-relaxed font-light mt-6">
                      {exp.description.map((item, i) => (
                         <li key={i} className="flex items-start">
                          <span className="text-[#8B5CF6] mr-3 mt-1 flex-shrink-0 font-bold">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="text-xs font-semibold tracking-wide text-[#F3F4F6] bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
