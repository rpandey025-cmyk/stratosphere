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
          className="block"
        >
          <img src="/logo.png" alt="The Stratosphere" className="w-48 md:w-56 h-auto object-contain mix-blend-screen origin-left scale-110" />
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
