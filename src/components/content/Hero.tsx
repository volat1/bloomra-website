"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LotusLogo } from "@/components/brand/LotusLogo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 lotus-gradient opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[var(--lotus-lavender)] opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[var(--lotus-sage)] opacity-10 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-8"
          >
            <LotusLogo className="w-24 h-24 md:w-32 md:h-32 mx-auto" animate />
          </motion.div>

          {/* Privacy badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="privacy">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Local Storage
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ink-primary)] mb-6 leading-tight"
          >
            Your cycle. Your data.
            <br />
            <span className="text-[var(--season-spring-primary)]">Your business.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--ink-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bloomra is a period tracking app that never leaves your device.
            <span className="hidden md:inline">
              {" "}No cloud. No accounts. No one watching.
            </span>
            <br className="hidden md:block" />
            Just you, noticing your body&apos;s rhythms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#download" size="lg">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </Button>
            <Button href="#features" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--ink-tertiary)]"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--season-spring-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No account needed
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--season-spring-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              No data collection
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--season-spring-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Free to download
            </span>
          </motion.div>
        </div>

        {/* Phone mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 max-w-sm mx-auto"
        >
          <div className="relative aspect-[9/19] bg-[var(--ink-primary)] rounded-[3rem] p-3 shadow-2xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--ink-primary)] rounded-full" />
            <div className="w-full h-full bg-[var(--background)] rounded-[2.5rem] overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <LotusLogo className="w-16 h-16 mx-auto mb-4" />
                <p className="font-serif text-lg text-[var(--ink-primary)]">
                  Your garden awaits
                </p>
                <p className="text-sm text-[var(--ink-tertiary)] mt-2">
                  App preview coming soon
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-[var(--ink-tertiary)] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[var(--ink-tertiary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
