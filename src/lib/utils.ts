import { type ClassValue, clsx } from "clsx";

// Utility for conditionally joining classNames
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Site configuration
export const siteConfig = {
  name: "Bloomra",
  tagline: "Your body, your rhythm, your sanctuary.",
  description:
    "A period tracking app that stores everything locally on your device. No cloud, no accounts, no data collection.",
  url: "https://bloomra.app",
  email: "hello@bloomra.app",
  links: {
    appStore: "#", // Will add when available
    playStore: "#", // Coming soon
  },
} as const;
