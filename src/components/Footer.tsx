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
              <div className="flex flex-col items-start mb-8">
                <div className="text-xl font-garet font-medium tracking-[0.1em] leading-none uppercase">
                  THE STRATOSPHERE
                </div>
                <div className="text-[12px] font-bold tracking-[0.5em] text-neutral-600 mt-2 font-garet lowercase">
                  clarity <span className="text-accent">above</span> noise
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
              <a href="mailto:info@thestratosphere.in" className="block text-white hover:text-accent transition-colors text-lg font-medium tracking-tight">
                info@thestratosphere.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
          <p>© 2026 The Contented Media Tech Labs. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
