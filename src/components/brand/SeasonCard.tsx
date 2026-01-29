"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Season = "winter" | "spring" | "summer" | "autumn";

interface SeasonCardProps {
  season: Season;
  className?: string;
  delay?: number;
}

const seasonData = {
  winter: {
    name: "Inner Winter",
    phase: "Menstrual",
    description: "Rest. Reset. Your body is doing important work.",
    gradient: "gradient-winter",
    primaryColor: "var(--season-winter-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  spring: {
    name: "Inner Spring",
    phase: "Follicular",
    description: "Energy rises. Ideas spark. Everything feels possible.",
    gradient: "gradient-spring",
    primaryColor: "var(--season-spring-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 3C12 3 8 7 8 12C8 14 9 16 12 18C15 16 16 14 16 12C16 7 12 3 12 3Z" />
        <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 20C8 20 10 19 12 19C14 19 16 20 16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  summer: {
    name: "Inner Summer",
    phase: "Ovulation",
    description: "You're on. Social, sharp, radiant. Ride this wave.",
    gradient: "gradient-summer",
    primaryColor: "var(--season-summer-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  autumn: {
    name: "Inner Autumn",
    phase: "Luteal",
    description: "Slow down. Nest. Your body knows what's coming.",
    gradient: "gradient-autumn",
    primaryColor: "var(--season-autumn-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C8 6 6 10 6 14C6 18.4 8.7 21 12 21C15.3 21 18 18.4 18 14C18 10 16 6 12 2Z"/>
        <path d="M12 6C12 6 10 10 10 13C10 15 11 17 12 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
};

export function SeasonCard({ season, className, delay = 0 }: SeasonCardProps) {
  const data = seasonData[season];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "relative p-6 rounded-2xl overflow-hidden group cursor-default",
        data.gradient,
        className
      )}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{
          backgroundColor: `color-mix(in srgb, ${data.primaryColor} 20%, white)`,
          color: data.primaryColor
        }}
      >
        {data.icon}
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-1">
        {data.name}
      </h3>
      <p className="text-sm text-[var(--ink-secondary)] mb-3 font-medium">
        {data.phase} Phase
      </p>
      <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
        {data.description}
      </p>

      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${data.primaryColor}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
