import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled ? 'glass py-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-8 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="text-3xl font-extrabold text-gradient cursor-pointer tracking-tighter">
          <Link to="hero" smooth={true} duration={500}>
            Shreya Raval.
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
              className="text-sm uppercase tracking-widest font-semibold hover:text-[#00E5FF] transition-all duration-300 cursor-pointer text-gray-300 hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-gradient-to-r from-[#00E5FF] to-[#3B82F6] text-[#0A0F1C] rounded-full border border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300 font-bold uppercase tracking-wider text-sm transform hover:-translate-y-0.5 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#E2E8F0]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass flex flex-col py-4 px-6 gap-4 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-[#38BDF8] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
