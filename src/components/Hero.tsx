import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-accent/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-accent-secondary/20 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            Content, MarTech & NEW MEDIA
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.95] mb-10 tracking-tighter text-gradient"
          >
            <span className="sr-only">Outgrow the Obvious.</span>
            <span aria-hidden="true">
              {"Outgrow the Obvious.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5 + i * 0.05,
                    ease: "easeIn"
                  }}
                  className={i < 7 ? "text-gradient-accent" : ""}
                >
                  {char}
                  {i === 6 && <br className="hidden md:block" />}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <div className="flex flex-col items-center gap-4 mb-12 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg md:text-xl text-white font-medium leading-relaxed text-center"
            >
              Architecting future-ready brands through Strategic Growth Systems and Smart Content Frameworks.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <motion.a 
              href="mailto:info@thestratosphere.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-white/10"
            >
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#experience"
              whileHover={{ x: 5 }}
              className="text-sm font-bold text-white flex items-center gap-2 group tracking-[0.2em] uppercase"
            >
              Our Experience <ChevronRight size={18} className="text-accent" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Trust Logos Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 w-full overflow-hidden border-y border-white/5 bg-white/[0.01] backdrop-blur-sm"
      >
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center py-8 px-10">
             {[
               "Hindustan Unilever Limited", "Airtel", "Vi Telecom", "ZEE Media", "Balaji Telefilms", 
               "Kuku FM", "Purple Focus", "Vuclip Digital", "Startup Middle East", "Apalya Technologies", "OTT Ecosystem"
             ].map((name, i) => (
               <span key={i} className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-600 transition-colors cursor-default">
                 {name}
               </span>
             ))}
             {/* Duplicate for seamless loop */}
             {[
               "Hindustan Unilever Limited", "Airtel", "Vi Telecom", "ZEE Media", "Balaji Telefilms", 
               "Kuku FM", "Purple Focus", "Vuclip Digital", "Startup Middle East", "Apalya Technologies", "OTT Ecosystem"
             ].map((name, i) => (
               <span key={`dup-${i}`} className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-600 transition-colors cursor-default">
                 {name}
               </span>
             ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
