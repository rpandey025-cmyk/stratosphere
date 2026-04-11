import { motion } from "motion/react";
import { Target, Zap, TrendingUp, Globe } from "lucide-react";

export default function CorePillars() {
  const pillars = [
    {
      title: "Strategy First",
      desc: "We don't just execute; we architect. Every move is backed by deep market insight and commercial logic.",
      icon: <Target className="text-accent" size={32} />,
      size: "md:col-span-2"
    },
    {
      title: "Systems Driven",
      desc: "Scaling requires more than effort. We build the automated systems that power sustainable growth.",
      icon: <Zap className="text-accent-secondary" size={32} />,
      size: "md:col-span-1"
    },
    {
      title: "Growth Focused",
      desc: "Our north star is your bottom line. We focus on initiatives that drive real results.",
      icon: <TrendingUp className="text-white" size={32} />,
      size: "md:col-span-1"
    },
    {
      title: "Global Reach",
      desc: "Expertise across Middle East, Africa, and SEA, growing brands with localized precision.",
      icon: <Globe className="text-accent" size={32} />,
      size: "md:col-span-2"
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 group cursor-default leading-tight"
          >
            <span className="text-white group-hover:text-accent transition-colors duration-500">Core Pillars</span> <br />
            <span className="text-neutral-500 text-3xl md:text-5xl">To Scale & Optimize</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${pillar.size} p-12 rounded-[40px] glass hover:bg-white/[0.04] transition-all group glow-border cursor-default flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <div className="mb-10 p-5 bg-white/[0.03] w-fit rounded-3xl border border-white/5 group-hover:border-accent/30 transition-all group-hover:scale-110 duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{pillar.title}</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
