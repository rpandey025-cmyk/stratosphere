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
              <div className="mb-8">
                <img src="/logo.png" alt="The Stratosphere" className="h-16 w-auto object-contain" />
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
