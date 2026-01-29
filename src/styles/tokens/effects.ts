// Bloomra Design System - Effects
// Soft shadows, organic shapes, glassmorphism

export const shadows = {
  sm: '0 1px 2px rgba(45, 42, 38, 0.05)',
  md: '0 4px 6px rgba(45, 42, 38, 0.07)',
  lg: '0 10px 15px rgba(45, 42, 38, 0.1)',
  xl: '0 20px 25px rgba(45, 42, 38, 0.12)',

  // Soft, organic shadows (brand)
  botanical: '0 8px 32px rgba(45, 42, 38, 0.08)',
  card: '0 4px 24px rgba(45, 42, 38, 0.06)',
  cardHover: '0 8px 32px rgba(45, 42, 38, 0.1)',

  // Inner shadow for depth
  inner: 'inset 0 2px 4px rgba(45, 42, 38, 0.05)',
} as const;

export const borderRadius = {
  sm: '0.375rem',    // 6px
  md: '0.75rem',     // 12px
  lg: '1rem',        // 16px
  xl: '1.5rem',      // 24px
  '2xl': '2rem',     // 32px
  full: '9999px',

  // Organic shapes (asymmetrical)
  organic: '60% 40% 50% 50% / 50% 60% 40% 50%',
  pebble: '40% 60% 55% 45% / 55% 40% 60% 45%',
  button: '1.5rem 1rem 1.5rem 1rem',
} as const;

export const glassmorphism = {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
} as const;

export const transitions = {
  fast: '150ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
  botanical: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  gentle: '400ms cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const;
