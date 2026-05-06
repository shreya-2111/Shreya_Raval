import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent">
        <div className="w-16 h-16 border-4 border-[#1E293B] border-t-[#38BDF8] rounded-full animate-spin shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen text-[#E2E8F0] relative">
      <div className="fixed inset-0 z-[-1] bg-grid opacity-30 pointer-events-none" />
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] origin-left z-[100] shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
