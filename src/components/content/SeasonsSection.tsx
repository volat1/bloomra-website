"use client";

import { motion } from "framer-motion";
import { SeasonCard } from "@/components/brand/SeasonCard";
import { Badge } from "@/components/ui/Badge";

export function SeasonsSection() {
  return (
    <section id="seasons" className="py-24 md:py-32 relative overflow-hidden">
      {/* Multi-season gradient background */}
      <div className="absolute inset-0 gradient-seasons opacity-25 animate-breathe" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-[var(--season-spring-accent)] opacity-25 blur-3xl animate-drift" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-[var(--season-autumn-accent)] opacity-25 blur-3xl animate-drift" style={{ animationDelay: '-20s' }} />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="spring" className="mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Your Whole Self
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            A language that honors how you
            <br />
            <span className="text-[var(--season-spring-primary)]">actually feel.</span>
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Four inner seasons. Not clinical phases with confusing names, but a natural way
            to understand the ebb and flow of your energy, emotions, and capabilities throughout your cycle.
          </p>
        </motion.div>

        {/* Season cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SeasonCard season="winter" delay={0} />
          <SeasonCard season="spring" delay={0.1} />
          <SeasonCard season="summer" delay={0.2} />
          <SeasonCard season="autumn" delay={0.3} />
        </div>

        {/* Holistic note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--background)] rounded-full border border-[var(--stroke-light)] text-sm text-[var(--ink-secondary)]">
            <svg className="w-5 h-5 text-[var(--season-spring-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Your whole self, not just your symptoms
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-[var(--ink-tertiary)] mt-8 max-w-xl mx-auto"
        >
          These seasons are for self-reflection, not medical diagnosis.
          Bloomra helps you notice patterns—it doesn&apos;t predict or diagnose.
        </motion.p>
      </div>
    </section>
  );
}
