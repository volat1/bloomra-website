import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "privacy" | "trust";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[var(--background-card)] text-[var(--ink-secondary)]",
    privacy: "bg-[var(--season-winter-bg)] text-[var(--season-winter-primary)]",
    trust: "bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)]",
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
