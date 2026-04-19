import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-garet font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Last updated: April 11, 2026
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-garet font-bold text-white">1. Introduction</h2>
          <p className="text-neutral-400 font-light leading-relaxed">
            At The Stratosphere, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-garet font-bold text-white">2. Information We Collect</h2>
          <p className="text-neutral-400 font-light leading-relaxed">
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and services, when you participate in activities on the site, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-6 text-neutral-400 font-light leading-relaxed space-y-2">
            <li>Name and Contact Data</li>
            <li>Credentials</li>
            <li>Usage Data</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-garet font-bold text-white">3. How We Use Your Information</h2>
          <p className="text-neutral-400 font-light leading-relaxed">
            We use the information we collect or receive to communicate with you, to provide our services, and to improve our website.
            We may also use it for marketing purposes if you have agreed to receive such communications.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-garet font-bold text-white">4. Contact Us</h2>
          <p className="text-neutral-400 font-light leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <a href="https://wa.me/919820644294" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors mt-2 inline-block">
              +91 98206 44294
            </a>
          </p>
        </section>
      </motion.div>
    </div>
  );
}
