import { motion } from "motion/react";

export default function Positioning() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
            Intersecting <span className="text-accent">Content</span>, <br />
            <span className="text-white">Technology</span> & <span className="text-neutral-500">Business Strategy.</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-neutral-400 font-light"
          >
            Building structured systems that turn attention into measurable growth.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { label: "Years Experience", value: "14+" },
              { label: "Successful Projects", value: "90+" },
              { label: "Client Success Rate", value: "95%" },
              { label: "Trusted Monthly Retainers", value: "15+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border border-white/5 hover:border-accent/20 transition-all group"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
