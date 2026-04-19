import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl w-full h-16 glass-dark rounded-full flex items-center justify-between px-8 pointer-events-auto shadow-2xl shadow-black/50"
      >
        <motion.a 
          href="/"
          onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0); }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center relative group"
        >
          {/* Shooting Star Icon */}
          <div className="absolute -top-7 right-0 w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
              <path d="M10 80 Q 60 80, 90 20 Q 50 40, 10 80 Z" fill="url(#nav_grad1)" />
              <path d="M0 90 Q 50 90, 90 20 Q 40 50, 0 90 Z" fill="url(#nav_grad2)" opacity="0.8" />
              <circle cx="90" cy="20" r="2" fill="#fff" className="animate-pulse" />
              <circle cx="90" cy="20" r="6" fill="#a855f7" opacity="0.4" />
              <defs>
                <linearGradient id="nav_grad1" x1="10" y1="80" x2="90" y2="20">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
                <linearGradient id="nav_grad2" x1="0" y1="90" x2="90" y2="20">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-3 h-[1px] bg-gradient-to-r from-transparent to-accent/50 hidden sm:block"></div>
            <div className="text-[13px] font-garet font-medium tracking-[0.15em] text-white leading-none uppercase">
              THE STRATOSPHERE
            </div>
            <div className="w-3 h-[1px] bg-gradient-to-l from-transparent to-accent/50 hidden sm:block"></div>
          </div>
          <div className="text-[8px] font-bold tracking-[0.4em] text-neutral-500 mt-1.5 font-garet lowercase flex items-center justify-center">
            clarity <span className="text-accent drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] mx-1">above</span> noise
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-[0.2em] uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/919820644294" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white text-black text-[10px] font-bold rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 uppercase tracking-[0.2em]"
          >
            Connect <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden absolute top-24 left-6 right-6 glass-dark rounded-3xl p-8 flex flex-col gap-6 pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/919820644294" target="_blank" rel="noopener noreferrer"
            className="w-full py-4 bg-white text-black font-bold rounded-2xl text-center"
          >
            Work With Me
          </a>
        </motion.div>
      )}
    </nav>
  );
}
