"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const wisdomCards = [
  {
    season: "Inner Winter",
    phase: "Menstrual",
    affirmation: "Rest is productive. Your body is regenerating.",
    insight: "Day 2 of Inner Winter. The need to withdraw is wisdom, not weakness. Honor the quietness.",
    gradient: "gradient-winter",
    primaryColor: "var(--season-winter-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    season: "Inner Spring",
    phase: "Follicular",
    affirmation: "Your energy is building. Trust the momentum.",
    insight: "Clearer thinking often arrives now. Good time for new projects, fresh starts, and planning ahead.",
    gradient: "gradient-spring",
    primaryColor: "var(--season-spring-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 3C12 3 8 7 8 12C8 14 9 16 12 18C15 16 16 14 16 12C16 7 12 3 12 3Z" />
        <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    season: "Inner Summer",
    phase: "Ovulation",
    affirmation: "You're radiating. Enjoy your peak.",
    insight: "Feeling social and confident? Lean into connection. This is your time to shine and be seen.",
    gradient: "gradient-summer",
    primaryColor: "var(--season-summer-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    season: "Inner Autumn",
    phase: "Luteal",
    affirmation: "Slow down with grace. Prepare your nest.",
    insight: "Heightened emotions are real and valid. This is the time for completion, not new beginnings.",
    gradient: "gradient-autumn",
    primaryColor: "var(--season-autumn-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C8 6 6 10 6 14C6 18.4 8.7 21 12 21C15.3 21 18 18.4 18 14C18 10 16 6 12 2Z"/>
      </svg>
    ),
  },
];

export function WisdomSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Multi-season gradient background */}
      <div className="absolute inset-0 gradient-seasons opacity-30 animate-breathe" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[var(--lotus-lavender)] opacity-20 blur-3xl animate-drift" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[var(--season-summer-accent)] opacity-20 blur-3xl animate-drift" style={{ animationDelay: '-15s' }} />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="summer" className="mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Daily Wisdom
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            Your seasons <span className="text-[var(--season-summer-primary)]">talk to you.</span>
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Every day, Bloomra offers affirmations, insights, and gentle guidance
            based on where you are in your cycle. It's like having a wise friend who
            truly understands.
          </p>
        </motion.div>

        {/* Wisdom cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {wisdomCards.map((card, index) => (
            <motion.div
              key={card.season}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl overflow-hidden ${card.gradient}`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `color-mix(in srgb, ${card.primaryColor} 20%, white)`,
                  color: card.primaryColor,
                }}
              >
                {card.icon}
              </div>

              {/* Season label */}
              <h3 className="font-serif text-lg font-semibold text-[var(--ink-primary)] mb-1">
                {card.season}
              </h3>
              <p className="text-xs text-[var(--ink-tertiary)] mb-4 uppercase tracking-wide">
                {card.phase} Phase
              </p>

              {/* Affirmation */}
              <p className="font-serif text-base text-[var(--ink-primary)] italic mb-3">
                "{card.affirmation}"
              </p>

              {/* Insight */}
              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                {card.insight}
              </p>

              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-30"
                style={{
                  background: `radial-gradient(circle at top right, ${card.primaryColor}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-[var(--ink-primary)] max-w-3xl mx-auto leading-relaxed">
            "You don't need to fix yourself.
            <br />
            <span className="text-[var(--season-spring-primary)]">You need to know yourself.</span>"
          </blockquote>
          <p className="text-sm text-[var(--ink-tertiary)] mt-6">
            — The Bloomra Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
