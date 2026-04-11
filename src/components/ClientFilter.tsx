import { motion } from "motion/react";
import { ArrowRight, Filter, Send, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function ClientFilter() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-[60px] relative overflow-hidden group glow-border"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
            <Filter size={200} className="text-white" />
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-start relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Ideal Engagement</h2>
              <p className="text-xl text-neutral-400 mb-12 font-light leading-relaxed">
                Our systems are designed for high-impact leaders who seek a deep, integrated partnership to drive exceptional growth.
              </p>

              <div className="space-y-8 mb-16">
                {[
                  "Founders serious about scaling to the next level",
                  "Businesses that value strategy over quick fixes",
                  "Leaders with a long-term, future-ready mindset",
                  "Brands ready to invest in intelligent growth systems"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 text-lg text-white group/item cursor-default"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                    <span className="font-light tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-16 border-t border-white/5">
                <h3 className="text-2xl font-display font-bold mb-8 tracking-tight">Ready to Build Something That Actually Grows?</h3>
                <motion.a 
                  href="https://wa.me/919820644294" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-all shadow-2xl shadow-green-500/20"
                >
                  <MessageCircle size={24} /> 
                  <span className="tracking-wide">Let's WhatsApp</span>
                </motion.a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/[0.02] p-10 md:p-14 rounded-[48px] border border-white/5 relative group/form">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000 rounded-[48px]" />
                
                <div className="mb-12 relative z-10">
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">Get Started</h3>
                  <p className="text-neutral-500 text-sm font-light">Leave your details and we'll reach out to discuss your growth strategy.</p>
                </div>

                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 relative z-10"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="text-accent" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">Message Received</h4>
                    <p className="text-neutral-500 font-light">I'll be in touch with you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-all text-sm placeholder:text-neutral-700"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 ml-1">Contact Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-all text-sm placeholder:text-neutral-700"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-all text-sm placeholder:text-neutral-700"
                      />
                    </div>
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 mt-8"
                    >
                      Send Message <Send size={18} />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
