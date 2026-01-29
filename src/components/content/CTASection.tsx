"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LotusLogo } from "@/components/brand/LotusLogo";

export function CTASection() {
  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 lotus-gradient opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <LotusLogo className="w-20 h-20 mx-auto" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            Ready for period tracking
            <br />
            that respects you?
          </h2>

          <p className="text-lg text-[var(--ink-secondary)] mb-10">
            Download Bloomra and start noticing your cycle in complete privacy.
            <br className="hidden md:block" />
            No account needed. No data leaving your device.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="#" size="lg">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </Button>
            <div className="text-sm text-[var(--ink-tertiary)]">
              Android coming soon
            </div>
          </div>

          {/* Trust line */}
          <p className="text-sm text-[var(--ink-tertiary)]">
            Free to download. No hidden costs.
            <span className="mx-2">•</span>
            Your body, your rhythm, your sanctuary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
