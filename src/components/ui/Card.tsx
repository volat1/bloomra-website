"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  delay?: number;
}

export function Card({ className, children, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { y: -4, boxShadow: "0 8px 32px rgba(45, 42, 38, 0.1)" } : {}}
      className={cn(
        "bg-[var(--background-card)] rounded-2xl p-6 shadow-[var(--shadow-card)]",
        "border border-[var(--stroke-light)]",
        "transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
