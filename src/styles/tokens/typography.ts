// Bloomra Design System - Typography
// Playfair Display for poetry, Source Sans 3 for action

export const typography = {
  fonts: {
    serif: 'var(--font-playfair), Georgia, serif',
    sans: 'var(--font-source-sans), system-ui, sans-serif',
    display: 'var(--font-plus-jakarta), system-ui, sans-serif',
  },

  // Fluid type scale (responsive)
  sizes: {
    display: 'clamp(2.5rem, 5vw, 4rem)',      // 40-64px
    h1: 'clamp(2rem, 4vw, 3rem)',              // 32-48px
    h2: 'clamp(1.5rem, 3vw, 2.25rem)',         // 24-36px
    h3: 'clamp(1.25rem, 2.5vw, 1.75rem)',      // 20-28px
    h4: 'clamp(1.125rem, 2vw, 1.5rem)',        // 18-24px
    body: '1rem',                              // 16px
    bodyLarge: '1.125rem',                     // 18px
    small: '0.875rem',                         // 14px
    xs: '0.75rem',                             // 12px
  },

  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },
} as const;
