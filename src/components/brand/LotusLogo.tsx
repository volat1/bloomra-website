"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface LotusLogoProps {
  className?: string;
  animate?: boolean;
}

export function LotusLogo({ className, animate = false }: LotusLogoProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const petalVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!animate) {
    return (
      <svg
        className={cn("text-[var(--lotus-pink)]", className)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer petals - Lavender */}
        <ellipse cx="50" cy="30" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" />
        <ellipse cx="30" cy="40" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" transform="rotate(-30 30 40)" />
        <ellipse cx="70" cy="40" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" transform="rotate(30 70 40)" />

        {/* Middle petals - Pink */}
        <ellipse cx="50" cy="38" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" />
        <ellipse cx="35" cy="45" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" transform="rotate(-25 35 45)" />
        <ellipse cx="65" cy="45" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" transform="rotate(25 65 45)" />

        {/* Inner petals - Peach */}
        <ellipse cx="50" cy="48" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" />
        <ellipse cx="40" cy="52" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" transform="rotate(-20 40 52)" />
        <ellipse cx="60" cy="52" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" transform="rotate(20 60 52)" />

        {/* Bottom petals - Sage */}
        <ellipse cx="35" cy="70" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" transform="rotate(-15 35 70)" />
        <ellipse cx="50" cy="72" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" />
        <ellipse cx="65" cy="70" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" transform="rotate(15 65 70)" />

        {/* Center - Crescent Moon */}
        <circle cx="50" cy="50" r="12" fill="#F8E8D0" />
        <path d="M50 38C55.5 38 60 42.5 60 48C60 53.5 55.5 58 50 58C50 58 54 55 54 48C54 41 50 38 50 38Z" fill="white" opacity="0.9" />
      </svg>
    );
  }

  return (
    <motion.svg
      className={cn("text-[var(--lotus-pink)]", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Outer petals - Lavender */}
      <motion.ellipse cx="50" cy="30" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" variants={petalVariants} />
      <motion.ellipse cx="30" cy="40" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" transform="rotate(-30 30 40)" variants={petalVariants} />
      <motion.ellipse cx="70" cy="40" rx="12" ry="25" fill="#D4B5E8" opacity="0.7" transform="rotate(30 70 40)" variants={petalVariants} />

      {/* Middle petals - Pink */}
      <motion.ellipse cx="50" cy="38" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" variants={petalVariants} />
      <motion.ellipse cx="35" cy="45" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" transform="rotate(-25 35 45)" variants={petalVariants} />
      <motion.ellipse cx="65" cy="45" rx="10" ry="22" fill="#E8A0B8" opacity="0.8" transform="rotate(25 65 45)" variants={petalVariants} />

      {/* Inner petals - Peach */}
      <motion.ellipse cx="50" cy="48" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" variants={petalVariants} />
      <motion.ellipse cx="40" cy="52" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" transform="rotate(-20 40 52)" variants={petalVariants} />
      <motion.ellipse cx="60" cy="52" rx="8" ry="18" fill="#F0C0A8" opacity="0.9" transform="rotate(20 60 52)" variants={petalVariants} />

      {/* Bottom petals - Sage */}
      <motion.ellipse cx="35" cy="70" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" transform="rotate(-15 35 70)" variants={petalVariants} />
      <motion.ellipse cx="50" cy="72" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" variants={petalVariants} />
      <motion.ellipse cx="65" cy="70" rx="10" ry="18" fill="#C8D8C0" opacity="0.7" transform="rotate(15 65 70)" variants={petalVariants} />

      {/* Center - Crescent Moon */}
      <motion.circle cx="50" cy="50" r="12" fill="#F8E8D0" variants={petalVariants} />
      <motion.path d="M50 38C55.5 38 60 42.5 60 48C60 53.5 55.5 58 50 58C50 58 54 55 54 48C54 41 50 38 50 38Z" fill="white" opacity="0.9" variants={petalVariants} />
    </motion.svg>
  );
}
