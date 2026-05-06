import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
              About <span className="text-[#00E5FF]">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mx-auto rounded-full" />
          </div>
          
          <div className="glass-card p-8 md:px-16 md:py-16 text-left relative overflow-hidden group">
            {/* Decorative glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8B5CF6] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Full-Stack Developer & UI Enthusiast
                </h3>

                <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed mb-8 font-light">
                  I'm a passionate full-stack developer with experience in building modern, scalable, and responsive web applications. I specialize in frontend and backend technologies, combining clean UI design with efficient server-side logic to deliver complete, high-quality solutions.
                </p>

                <ul className="space-y-4 mb-10 text-[#F3F4F6] text-lg font-light">
                  {[
                    "Strong foundation in HTML, CSS, JavaScript, React",
                    "Experience with backend development, APIs, and database integration",
                    "Responsive design and mobile-first development",
                    "Passionate about clean code and UI/UX",
                    "Continuous learner exploring new technologies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#00E5FF] mt-1.5 opacity-80">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors border border-white/5">
                    <h4 className="text-[#00E5FF] font-black text-4xl mb-2">1.5+</h4>
                    <p className="text-sm text-[#9CA3AF] font-medium tracking-wide uppercase">Years Experience</p>
                  </div>
                  <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors border border-white/5">
                    <h4 className="text-[#3B82F6] font-black text-4xl mb-2">20+</h4>
                    <p className="text-sm text-[#9CA3AF] font-medium tracking-wide uppercase">Projects Done</p>
                  </div>
                  <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors border border-white/5 col-span-2">
                    <h4 className="text-[#8B5CF6] font-black text-4xl mb-2">5+</h4>
                    <p className="text-sm text-[#9CA3AF] font-medium tracking-wide uppercase">Certifications</p>
                  </div>
                </div>
                
                <a 
                  href="/Shreya_Raval_Resume.pdf" 
                  download
                  className="group w-full py-4 glass rounded-2xl hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 font-bold tracking-wide flex items-center justify-center gap-3 mt-6 border border-[#00E5FF]/30"
                >
                  <svg className="text-[#00E5FF] group-hover:text-[#3B82F6] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span className="text-[#00E5FF] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00E5FF] group-hover:to-[#3B82F6] transition-all duration-300">
                    DOWNLOAD RESUME
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
