import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0A0F1C] py-16 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-50" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Left Side Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div>
              <h2 className="text-[#F8FAFC] font-bold text-xl tracking-[0.2em] uppercase">
                Shreya Raval
              </h2>
              <p className="text-[#94A3B8] text-sm mt-1">
                Full Stack Developer
              </p>
            </div>
            <p className="text-[#F8FAFC]/60 text-xs tracking-wider uppercase font-medium mt-2">
              Designed and Developed by Shreya Raval
            </p>
          </div>

          {/* Right Side Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.instagram.com/full.stackjourney?igsh=dWxhczkyOGtscHo="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/30 hover:text-[#00E5FF] text-white transition-all duration-300 group"
            >
              <FaInstagram size={18} className="transition-colors" />
              <span className="text-xs font-bold tracking-widest uppercase">Instagram</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shreya-raval-a5a4b1326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/30 hover:text-[#00E5FF] text-white transition-all duration-300 group"
            >
              <FaLinkedinIn size={18} className="transition-colors" />
              <span className="text-xs font-bold tracking-widest uppercase">LinkedIn</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
