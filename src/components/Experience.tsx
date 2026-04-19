import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Airtel",
      role: "OTT & Content Ecosystem Strategy",
      desc: "Architected digital content strategies for one of the world's largest telecom providers."
    },
    {
      company: "ZEE Media",
      role: "Strategy & Partnerships",
      desc: "Led high-stakes alliances and strategic growth initiatives across media platforms."
    },
    {
      company: "Balaji Telefilms",
      role: "Digital Media Strategy",
      desc: "Transformed digital presence and engagement for a leading entertainment powerhouse."
    }
  ];

  const testimonials = [
    {
      name: "Archana Anand",
      role: "Chief Business Officer- ZEE5 Global",
      text: "I have found few youngsters as quick to grasp my briefs and to then execute them to such a high degree of perfection. I hope your pride in your work remains through your career."
    },
    {
      name: "Kaveri Das",
      role: "Global Head Customer Engagement & Retention- ZEE5",
      text: "An extremely creative soul & its infectious. A self-motivated person like you is very very difficult to find. Trust me completely in awe of that. I won’t shy away from the fact that I patronise people who take their work more as a medium of earning their bread & butter. Its commendable how you instil beauty in a dry & drab PPT. A witty person and a very warm person to talk to. I love that fact that it’s possible to discuss a myriad of things with you & how."
    },
    {
      name: "Amit Agarwal",
      role: "Creative Head- Digital Refresh Network",
      text: "I have always appreciated your values and professionalism and your aspiration to gain insight for betterment further cements my belief in you."
    },
    {
      name: "Pulkit Jain",
      role: "Founder- Diffr",
      text: "Rishabh and I worked for a brief time on our Brand in the capacity of him being the Marketing and Brand Consultant with helping us in our goals of Marketing Driven Lead Generations(B2B) and Community building (B2C). At a personal level, he is a calm, composed and mature professional with a good understanding of his core skills in Digital, his market domain and does take efforts in research. He is good to gel up as a team member and had shown quick TAT while leading different team members across departments. I look to work with him in the near future if opportunity arises."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="experience" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Authority Built <br />
                <span className="text-neutral-500">Over 14 Years.</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
                Our approach is forged in the trenches of leading media and telecom brands, growing startups and SMBs, combined with a global perspective across Middle East, Africa and SEA.
              </p>

              <div className="space-y-4">
                {[
                  "Global Exposure",
                  "Media Understanding",
                  "Platform Thinking",
                  "Ecosystem Development"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-white font-medium group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 size={16} className="text-accent" />
                    </div>
                    <span className="text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-[32px] hover:bg-white/[0.03] hover:border-white/10 transition-all group glow-border"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.company}</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 border border-white/10 rounded-full text-neutral-400 group-hover:border-accent/40 group-hover:text-white transition-all">
                    {exp.role}
                  </span>
                </div>
                <p className="text-neutral-400 font-light leading-relaxed text-lg">{exp.desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6 text-center"
            >
              <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em]">And many more market leaders</p>
            </motion.div>
          </div>
        </div>

        {/* Industry Endorsements - Paginated Single View */}
        <div className="mt-24 pt-20 border-t border-white/5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-20 text-center"
          >
            Industry <span className="text-accent">Endorsements</span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="min-h-[350px] md:min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full text-center"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-neutral-400 font-light leading-relaxed mb-10 italic text-lg md:text-xl relative px-8">
                      <span className="text-accent/40 text-6xl font-serif absolute -left-2 -top-6">"</span>
                      {testimonials[currentIndex].text}
                      <span className="text-accent/40 text-6xl font-serif absolute -right-2 -bottom-10">"</span>
                    </p>
                    <div className="mt-6">
                      <p className="text-white font-bold text-xl md:text-2xl">{testimonials[currentIndex].name}</p>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em] mt-3">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
                    ? "bg-accent w-8"
                    : "bg-white/10 hover:bg-white/30"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
