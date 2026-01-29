import Image from "next/image";
import { cn } from "@/lib/utils";

interface LotusLogoProps {
  className?: string;
  size?: number;
}

export function LotusLogo({ className, size = 64 }: LotusLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Bloomra"
      width={size}
      height={size}
      className={cn("object-contain", className)}
      priority
    />
  );
}
