import React, { useRef, useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [isPending, startTransition] = useTransition(); // State Management: useTransition
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Intercepts the default behavior
    setError('');
    
    // Gather the form data using FormData
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Showing a loading state while server processes the request
    startTransition(async () => {
      try {
        // Calling the Server directly
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          setSuccess(true);
          formRef.current?.reset();
          // Auto-hides after 8 seconds
          setTimeout(() => setSuccess(false), 8000);
        } else {
          setError(result.message || 'Failed to send message.');
        }
      } catch (err) {
        setError('Network error. Please try again later.');
      }
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Get In <span className="text-[#00E5FF]">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mx-auto rounded-full mb-8" />
          <p className="text-[#9CA3AF] max-w-2xl mx-auto text-lg font-light leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-14 lg:p-16"
          >
            <h3 className="text-3xl font-bold mb-10 text-white tracking-tight">Contact Information</h3>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#00E5FF] text-xl group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-[#9CA3AF] tracking-wide uppercase font-semibold mb-1">Email</p>
                  <p className="text-[#F3F4F6] font-medium text-lg">shreyaraval2111@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#00E5FF] text-xl group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30 transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-[#9CA3AF] tracking-wide uppercase font-semibold mb-1">Phone</p>
                  <p className="text-[#F3F4F6] font-medium text-lg">9265841913</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#00E5FF] text-xl group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30 transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-[#9CA3AF] tracking-wide uppercase font-semibold mb-1">Location</p>
                  <p className="text-[#F3F4F6] font-medium text-lg">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            <h4 className="text-sm tracking-widest uppercase font-bold mb-6 text-[#9CA3AF]">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/shreya-raval-a5a4b1326" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#F3F4F6] hover:text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaLinkedinIn size={22} />
              </a>
              <a href="https://github.com/shreya-2111" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#F3F4F6] hover:text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaGithub size={22} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-10 md:p-14 lg:p-16 flex flex-col gap-8">
              {/* Security (Honeypot): Hidden input field named website */}
              <div className="hidden">
                <label>Don't fill this out if you're human:</label>
                <input type="text" name="website" tabIndex="-1" autoComplete="off" />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold tracking-wide uppercase text-[#9CA3AF] ml-1">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0A0F1C]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F3F4F6] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 text-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold tracking-wide uppercase text-[#9CA3AF] ml-1">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0A0F1C]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F3F4F6] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 text-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold tracking-wide uppercase text-[#9CA3AF] ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full bg-[#0A0F1C]/50 border border-white/10 rounded-2xl px-6 py-4 text-[#F3F4F6] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 resize-none text-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-gradient-to-r from-[#00E5FF] to-[#3B82F6] text-[#0A0F1C] rounded-2xl font-bold tracking-wide mt-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 disabled:opacity-70 flex justify-center items-center h-[60px] text-lg transform hover:-translate-y-1"
              >
                {isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0A0F1C]/30 border-t-[#0A0F1C] rounded-full animate-spin mr-3" />
                    Sending...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>

              {success && (
                <p className="text-[#10B981] text-center mt-2 font-medium tracking-wide">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-400 text-center mt-2 font-medium tracking-wide">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
