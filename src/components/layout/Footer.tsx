import Link from "next/link";
import { LotusLogo } from "@/components/brand/LotusLogo";
import { siteConfig } from "@/lib/utils";

const footerLinks = {
  product: [
    { href: "/#features", label: "Features" },
    { href: "/#privacy", label: "Privacy" },
    { href: "/#download", label: "Download" },
  ],
  support: [
    { href: "/support", label: "Help Center" },
    { href: "/support#faq", label: "FAQ" },
    { href: "/support#contact", label: "Contact" },
    { href: "/support/data-deletion", label: "Delete Your Data" },
  ],
  legal: [
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/terms-of-service", label: "Terms of Service" },
    { href: "/legal/eula", label: "EULA" },
    { href: "/legal/subscription-terms", label: "Subscription Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--background-card)] border-t border-[var(--stroke-light)]">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LotusLogo className="w-8 h-8" />
              <span className="font-serif text-xl font-semibold text-[var(--ink-primary)]">
                Bloomra
              </span>
            </Link>
            <p className="text-[var(--ink-secondary)] text-sm leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-[var(--ink-tertiary)] text-sm">
              100% local storage.
              <br />
              Your data stays yours.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-[var(--ink-primary)] mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-[var(--ink-primary)] mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-[var(--ink-primary)] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--stroke-light)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--ink-tertiary)] text-sm">
            &copy; {new Date().getFullYear()} Bloomra. All rights reserved.
          </p>

          {/* App Store Badges */}
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.appStore}
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Download on App Store"
            >
              <svg
                className="h-10"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="120" height="40" rx="5" fill="#000000" />
                <path
                  d="M24.5 20.5C24.5 18.5 25.8 17 27.5 16.3C26.5 15 25 14.3 23.3 14.2C21.5 14 19.5 15.3 18.8 15.3C18 15.3 16.3 14.2 14.8 14.2C12.3 14.3 10 16 8.6 18.5C5.8 23.5 7.8 31 10.5 35C11.8 36.8 13.4 38.8 15.5 38.7C17.4 38.6 18.1 37.5 20.5 37.5C22.8 37.5 23.5 38.7 25.5 38.7C27.6 38.6 29 36.9 30.3 35.1C31.3 33.8 31.9 32.4 32.2 30.9C29 29.6 24.5 26.5 24.5 20.5Z"
                  fill="white"
                />
                <path
                  d="M21 12.5C22 11.3 22.6 9.7 22.4 8C20.9 8.1 19.2 9 18.1 10.2C17.1 11.3 16.4 12.9 16.7 14.5C18.3 14.6 19.9 13.7 21 12.5Z"
                  fill="white"
                />
                <text x="42" y="18" fill="white" fontSize="8" fontFamily="system-ui">
                  Download on the
                </text>
                <text
                  x="42"
                  y="30"
                  fill="white"
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="system-ui"
                >
                  App Store
                </text>
              </svg>
            </Link>
            <div className="text-[var(--ink-tertiary)] text-sm">
              Android coming soon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
