import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "privacy" | "trust" | "spring" | "summer" | "autumn" | "winter";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[var(--background-card)] text-[var(--ink-secondary)]",
    privacy: "bg-[var(--season-winter-bg)] text-[var(--season-winter-primary)]",
    trust: "bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)]",
    spring: "bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)]",
    summer: "bg-[var(--season-summer-bg)] text-[var(--season-summer-primary)]",
    autumn: "bg-[var(--season-autumn-bg)] text-[var(--season-autumn-primary)]",
    winter: "bg-[var(--season-winter-bg)] text-[var(--season-winter-primary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
