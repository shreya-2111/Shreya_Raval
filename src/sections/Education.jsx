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

const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-[#38BDF8]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-transparent mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-[#38BDF8]/30 ml-3 md:ml-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-[#0F172A] border-2 border-[#38BDF8] rounded-full" />
              
              <div className="glass p-8 rounded-2xl hover:border-[#38BDF8]/30 transition-colors duration-300">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#38BDF8] mb-3">{edu.degree}</h3>
                  {edu.status && (
                    <span className="w-max text-xs font-bold text-[#0F172A] bg-[#38BDF8] px-3 py-1 rounded-full mb-4">
                      {edu.status}
                    </span>
                  )}
                  <span className="text-[#E2E8F0]/90 font-medium text-lg leading-relaxed">{edu.institution}</span>
                </div>
                
                <span className="text-[#E2E8F0]/60 font-mono text-sm mt-4 inline-block bg-[#0F172A] px-4 py-1.5 rounded-full border border-white/5">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
