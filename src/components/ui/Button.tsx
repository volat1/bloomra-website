"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variants = {
  primary: "bg-[var(--ink-primary)] text-white hover:bg-[var(--ink-secondary)]",
  secondary:
    "bg-[var(--background-card)] text-[var(--ink-primary)] hover:bg-[var(--stroke-light)]",
  ghost:
    "bg-transparent text-[var(--ink-primary)] hover:bg-[var(--background-card)]",
  outline:
    "bg-transparent border-2 border-[var(--ink-primary)] text-[var(--ink-primary)] hover:bg-[var(--ink-primary)] hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "primary", size = "md", className, children, ...props }, ref) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--season-spring-primary)] focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={props.href}
          className={baseStyles}
          target={props.target}
          rel={props.rel}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const { disabled, type = "button", onClick } = props as ButtonAsButtonProps;

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, disabled && "opacity-50 cursor-not-allowed")}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";
