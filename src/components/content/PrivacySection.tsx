"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const privacyPromises = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round"/>
        <path d="M12 12L12 12" strokeWidth="3" strokeLinecap="round"/>
        <path d="M4 12h4M16 12h4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Zero Cloud Storage",
    description:
      "Your data lives on your device. Period. No accounts, no cloud backup, no syncing to servers. We couldn't access it even if we wanted to.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        <path d="M3 3l18 18" strokeLinecap="round"/>
      </svg>
    ),
    title: "Zero Tracking",
    description:
      "No analytics. No usage tracking. No \"anonymized\" data collection. We have no idea how you use Bloomra—by design.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round"/>
        <path d="M6 18L18 6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Zero Data Sales",
    description:
      "Your data isn't our product. You aren't our product. We make money when you buy the app. No advertisers, no data brokers, no partners.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Verifiable Privacy",
    description:
      "Don't trust us—verify us. Check your network traffic: we send nothing. Delete the app: your data is gone. True privacy you can prove.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="py-24 md:py-32 bg-[var(--background-card)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[var(--lotus-lavender)] opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--season-spring-accent)] opacity-5 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="privacy" className="mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Privacy by Design
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--ink-primary)] mb-4">
            Privacy isn&apos;t a feature.
            <br />
            <span className="text-[var(--season-spring-primary)]">It&apos;s the foundation.</span>
          </h2>
          <p className="text-lg text-[var(--ink-secondary)] max-w-2xl mx-auto">
            Other period apps sell your data, show you ads, or store your most intimate information on servers you can&apos;t see.
            Bloomra was built differently.
          </p>
        </motion.div>

        {/* Privacy promises grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {privacyPromises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center">
                {promise.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--ink-primary)] mb-2">
                  {promise.title}
                </h3>
                <p className="text-[var(--ink-secondary)] text-sm leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--background)] rounded-full border border-[var(--stroke-light)] text-sm text-[var(--ink-secondary)]">
            <svg className="w-5 h-5 text-[var(--season-autumn-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your cycle is nobody&apos;s business but yours
          </div>
        </motion.div>
      </div>
    </section>
  );
}
