import { motion } from "motion/react";
import { Briefcase, Globe, TrendingUp, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Strategic Brand Consulting",
      desc: "High-level strategy that aligns brand identity with commercial objectives for long-term authority.",
      icon: <Briefcase className="text-accent" size={20} />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Digital Ecosystem Design",
      desc: "Building integrated content machines that capture attention and convert at every touchpoint.",
      icon: <Globe className="text-accent-secondary" size={20} />,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "AI-Powered Systems",
      desc: "Leveraging intelligent automation and AI workflows to scale operations without increasing overhead.",
      icon: <Zap className="text-white" size={20} />,
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Growth Partnerships",
      desc: "Strategic networking and alliance building to unlock new markets and distribution channels.",
      icon: <TrendingUp className="text-accent" size={20} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 group cursor-default"
            >
              <span className="text-white group-hover:text-accent transition-colors duration-500">Premium Solutions</span>
            </motion.h2>
            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              No fluff. No generic packages. Just sharp, intelligent systems designed for businesses serious about scaling.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-24 h-[1px] bg-white/10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass overflow-hidden rounded-[40px] hover:bg-white/[0.03] transition-all group glow-border"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12">
                <div className="mb-8 p-4 bg-white/[0.03] w-fit rounded-2xl border border-white/5 group-hover:border-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-light text-lg">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
