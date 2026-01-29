"use client";

import { motion } from "framer-motion";
import { SeasonCard } from "@/components/brand/SeasonCard";

export function SeasonsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            Your cycle as four inner seasons
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Not hormones or medical phases—just a gentle way to understand your energy,
            mood, and needs throughout the month.
          </p>
        </motion.div>

        {/* Season cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SeasonCard season="winter" delay={0} />
          <SeasonCard season="spring" delay={0.1} />
          <SeasonCard season="summer" delay={0.2} />
          <SeasonCard season="autumn" delay={0.3} />
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[var(--ink-tertiary)] mt-12 max-w-xl mx-auto"
        >
          These seasonal metaphors are for self-reflection, not medical diagnosis.
          Bloomra helps you notice patterns—it doesn&apos;t predict or diagnose.
        </motion.p>
      </div>
    </section>
  );
}
