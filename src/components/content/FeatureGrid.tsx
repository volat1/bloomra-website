"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2L12 6M12 18L12 22M6 12L2 12M22 12L18 12" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16" strokeDasharray="3 3"/>
      </svg>
    ),
    title: "Garden Dashboard",
    description:
      "Watch your patterns unfold like seasons in a garden. A beautiful, intuitive view of where you are in your cycle.",
    color: "var(--season-spring-primary)",
    bg: "var(--season-spring-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Seasonal Rhythms",
    description:
      "Inner Winter, Spring, Summer, Autumn. Understand your energy through seasonal metaphors, not clinical jargon.",
    color: "var(--season-summer-primary)",
    bg: "var(--season-summer-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Ritualized Logging",
    description:
      "Logging that feels like a quiet moment, not homework. A brief meditation of noticing how you feel today.",
    color: "var(--season-autumn-primary)",
    bg: "var(--season-autumn-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="6" strokeDasharray="2 2"/>
        <circle cx="12" cy="12" r="9" strokeDasharray="3 3"/>
      </svg>
    ),
    title: "Tree Ring History",
    description:
      "Your cycles visualized as tree rings. Each cycle adds another layer to your story. Patterns over time, effortlessly.",
    color: "var(--season-winter-primary)",
    bg: "var(--season-winter-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "100% Local Storage",
    description:
      "Your data never leaves your hands. No cloud, no sync, no servers. Delete the app, delete your data—completely.",
    color: "var(--privacy-trust)",
    bg: "var(--season-spring-bg)",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 md:py-32">
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
            Track gently. Understand naturally.
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Features designed for peace, not anxiety. A sanctuary for cycle awareness.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1} className="relative overflow-hidden">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: feature.bg,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--ink-secondary)] leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: feature.color }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
