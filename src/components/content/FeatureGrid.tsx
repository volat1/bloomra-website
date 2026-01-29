"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 3C12 3 8 7 8 12C8 14 9 16 12 18C15 16 16 14 16 12C16 7 12 3 12 3Z" fill="currentColor" opacity="0.2"/>
        <path d="M12 3C12 3 8 7 8 12C8 14 9 16 12 18C15 16 16 14 16 12C16 7 12 3 12 3Z"/>
        <path d="M12 18V21"/>
        <path d="M7 20C7 20 9.5 19 12 19C14.5 19 17 20 17 20"/>
        <circle cx="12" cy="12" r="10" strokeDasharray="2 3"/>
      </svg>
    ),
    title: "Your Living Garden Dashboard",
    description:
      "Open the app to find your emotional mirror—a breathing garden scene that reflects exactly where you are. The Cycle Progress Wheel pulses with your vitality, while seasonal atmospheres shift around you. Paper-cut trees sway softly. Your garden knows your season before you do.",
    color: "var(--season-spring-primary)",
    bg: "var(--season-spring-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2C12 2 14 6 14 12C14 18 12 22 12 22" strokeDasharray="2 2"/>
        <path d="M12 2C12 2 10 6 10 12C10 18 12 22 12 22" strokeDasharray="2 2"/>
        <path d="M2 12H22"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    title: "Four Inner Seasons",
    description:
      "Forget 'follicular' and 'luteal.' Move through Inner Winter, Spring, Summer, and Autumn—a language that honors how you actually feel. Winter invites rest. Spring brings rising energy. Summer is your radiant peak. Autumn calls you inward. Your seasons talk to you.",
    color: "var(--season-summer-primary)",
    bg: "var(--season-summer-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" opacity="0.2"/>
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Seasons That Speak to You",
    description:
      "Every day, your current season offers personalized wisdom: affirmations that meet you where you are, phase education that helps you understand why, and self-care tips for your energy level right now. \"I noticed you've been in Inner Winter for 3 days. This is normal—your body is regenerating.\"",
    color: "var(--lotus-lavender)",
    bg: "var(--season-winter-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6V12L16 14"/>
        <circle cx="8" cy="10" r="2" fill="var(--season-spring-primary)" stroke="none"/>
        <circle cx="16" cy="10" r="2" fill="var(--season-summer-primary)" stroke="none"/>
        <circle cx="8" cy="16" r="2" fill="var(--season-autumn-primary)" stroke="none"/>
        <circle cx="16" cy="16" r="2" fill="var(--season-winter-primary)" stroke="none"/>
      </svg>
    ),
    title: "30-Second Ritualized Logging",
    description:
      "No endless questionnaires. Just gentle taps: flow, mood, energy. Pick from 10 colorful emotion bubbles like 'radiant,' 'tender,' 'electric,' or 'cozy.' Logging becomes a tiny ritual of self-awareness, not a chore. You'll actually look forward to checking in.",
    color: "var(--season-autumn-primary)",
    bg: "var(--season-autumn-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="7" strokeDasharray="2 2"/>
        <circle cx="12" cy="12" r="9" strokeDasharray="3 3"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Tree Ring History",
    description:
      "Your cycles tell stories. Watch patterns emerge as tree rings—each ring a cycle, each variation a chapter. Spot trends you never noticed: \"My Inner Autumns are longer lately.\" \"I always feel electric on day 12.\" Self-knowledge grows with every cycle you track.",
    color: "var(--season-winter-primary)",
    bg: "var(--season-winter-bg)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="4" y="8" width="16" height="12" rx="2"/>
        <path d="M8 8V6C8 4 9.5 2 12 2C14.5 2 16 4 16 6V8"/>
        <circle cx="12" cy="14" r="2" fill="currentColor"/>
        <path d="M12 16V18"/>
      </svg>
    ),
    title: "100% Local, 100% Yours",
    description:
      "Everything stays on your device. No accounts. No cloud. No way for anyone—not us, not hackers, not governments—to see your data. Delete the app, and it's gone forever. We make money when you subscribe, not from selling your intimate information.",
    color: "var(--privacy-trust)",
    bg: "var(--season-spring-bg)",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-seasons opacity-15 animate-breathe" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            A holistic approach to understanding
            <br />
            <span className="text-[var(--season-spring-primary)]">your whole self.</span>
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Not just dates on a calendar. Bloomra helps you understand the energy,
            emotions, and wisdom that flow through each phase of your cycle.
          </p>
        </motion.div>

        {/* Feature grid - 2 columns for larger cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.1} className="relative overflow-hidden p-8">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: feature.bg,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold text-[var(--ink-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--ink-secondary)] leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Decorative gradient - more visible */}
              <div
                className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{ backgroundColor: feature.color }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
