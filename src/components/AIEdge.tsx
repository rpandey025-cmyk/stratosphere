import { motion } from "motion/react";
import { Cpu, Layers, ShieldCheck, ArrowRight } from "lucide-react";

export default function AIEdge() {
  return (
    <section id="approach" className="py-20 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold mb-12 tracking-tighter"
          >
            Beyond Marketing. <br />
            <span className="text-neutral-500">Built for What’s Next.</span>
          </motion.h2>
          
          <div className="max-w-5xl mx-auto glass p-12 md:p-16 rounded-[48px] border border-white/5 relative group glow-border">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[48px]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-neutral-400 font-light leading-relaxed space-y-8 text-xl md:text-2xl text-center"
            >
              <p>
                AI isn't a trending tool for generic use — it's a personalized system build & used with precision. From automated content pipelines to predictive audience segmentation, the approach is fundamentally different from traditional marketing.
              </p>
              <p className="text-accent font-bold tracking-tight">
                This means smarter workflows, faster iteration, and marketing infrastructure that learns and improves — not just executes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 relative z-10">
              {[
                {
                  title: "Smarter Workflows",
                  desc: "Automated systems that handle repetitive tasks, allowing your team to focus on high-level strategy.",
                  icon: <Cpu size={24} className="text-accent" />
                },
                {
                  title: "Faster Iteration",
                  desc: "Rapid testing and deployment of content and campaigns driven by real-time data insights.",
                  icon: <Layers size={24} className="text-accent-secondary" />
                },
                {
                  title: "Learning Infrastructure",
                  desc: "Marketing systems that evolve with your audience, improving conversion rates over time.",
                  icon: <ShieldCheck size={24} className="text-white" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-all text-left group/item"
                >
                  <div className="mb-6 p-3 bg-white/[0.03] w-fit rounded-xl border border-white/5 group-hover/item:border-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover/item:text-accent transition-colors">{item.title}</h4>
                  <p className="text-neutral-400 font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 glass p-16 md:p-24 rounded-[60px] text-center relative overflow-hidden group glow-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-16 relative z-10 tracking-tight">Why This Isn’t Typical Consulting</h3>
          
          <div className="grid sm:grid-cols-2 gap-8 relative z-10">
            {[
              {
                title: "Business Partner Mindset",
                desc: "Thinking like a co-founder, not a vendor."
              },
              {
                title: "Entrepreneurial Thinking",
                desc: "Every recommendation factors in resources, speed, & ROI — not just advice."
              },
              {
                title: "Ownership-Driven Approach",
                desc: "Staying in the system until the results compound."
              },
              {
                title: "Platform + Content + Marketing",
                desc: "Building ecosystems, not just campaigns. OTT, mobility, digital platforms — integrated thinking across the stack."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="p-10 border border-white/10 rounded-[40px] bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/30 transition-all text-left group/item"
              >
                <h4 className="font-bold text-white text-xl mb-3 group-hover/item:text-accent transition-colors">{item.title}</h4>
                <p className="text-neutral-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center relative z-10">
            <motion.a 
              href="mailto:info@thestratosphere.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-2xl shadow-white/10 flex items-center gap-3"
            >
              Experience the Difference <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
