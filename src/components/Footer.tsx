import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center sm:items-start mb-8 relative group cursor-default">
                {/* Shooting Star Icon */}
                <div className="absolute -top-16 lg:left-14 left-1/2 -translate-x-1/2 lg:translate-x-0 w-28 h-28 opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                    <path d="M10 80 Q 60 80, 90 20 Q 50 40, 10 80 Z" fill="url(#footer_grad1)" />
                    <path d="M0 90 Q 50 90, 90 20 Q 40 50, 0 90 Z" fill="url(#footer_grad2)" opacity="0.8" />
                    <circle cx="90" cy="20" r="2.5" fill="#fff" />
                    <circle cx="90" cy="20" r="10" fill="#a855f7" opacity="0.3" className="animate-pulse" />
                    <defs>
                      <linearGradient id="footer_grad1" x1="10" y1="80" x2="90" y2="20">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                      <linearGradient id="footer_grad2" x1="0" y1="90" x2="90" y2="20">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex items-center gap-4 w-full justify-center sm:justify-start pt-6">
                  <div className="flex-none w-6 h-[1px] bg-gradient-to-r from-transparent to-accent/40 hidden sm:block"></div>
                  <div className="text-2xl font-garet font-medium tracking-[0.2em] text-white leading-none uppercase">
                    THE STRATOSPHERE
                  </div>
                  <div className="flex-none w-6 h-[1px] bg-gradient-to-l from-transparent to-accent/40 hidden sm:block"></div>
                </div>
                <div className="text-[12px] font-bold tracking-[0.6em] text-neutral-400 mt-4 font-garet lowercase w-full flex justify-center sm:justify-start sm:pl-10 items-center gap-3">
                  <span>clarity</span>
                  <span className="text-accent drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">above</span>
                  <span>noise</span>
                </div>
              </div>
              <p className="text-neutral-500 max-w-sm font-light leading-relaxed text-lg">
                Content, Systems & Scalable Growth.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Experience", "Services", "Approach", "Connect"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors text-sm font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 mb-8">Contact</h4>
            <div className="space-y-4">
              <a href="https://wa.me/919820644294" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-accent transition-colors text-lg font-medium tracking-tight">
                +91 98206 44294
              </a>
              <a href="https://www.linkedin.com/in/rishabh-pandey-01436832" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-accent transition-colors text-lg font-medium tracking-tight">
                Via LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
          <p>© 2026 The Contented Media Tech Labs. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
