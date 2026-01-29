// Bloomra Design System - Colors
// Based on the app's Paper/Ink aesthetic with seasonal palettes

export const colors = {
  // Base palette - Paper/Ink aesthetic
  background: {
    parchment: '#FAF6F1',
    cream: '#FFF8F0',
    white: '#FFFFFF',
    card: '#F5EFE6',
  },

  // Ink colors
  ink: {
    primary: '#2D2A26',
    secondary: '#6B6560',
    tertiary: '#8A8479',
    disabled: '#C4BFB6',
  },

  // Stroke/Border
  stroke: {
    light: '#E8E2D9',
    medium: '#D4CEC5',
  },

  // Seasonal palette - Inner Seasons
  seasons: {
    winter: {
      primary: '#8B9CAA',
      secondary: '#A0B0BE',
      accent: '#C2CED8',
      background: '#E8EEF2',
      name: 'Inner Winter',
      description: 'Rest & introspection',
    },
    spring: {
      primary: '#6B9B7A',
      secondary: '#7DAA8C',
      accent: '#A8C4A0',
      background: '#DDE8D5',
      name: 'Inner Spring',
      description: 'Renewal & growth',
    },
    summer: {
      primary: '#E8A83C',
      secondary: '#EEBB5C',
      accent: '#EED89A',
      background: '#FFF8E8',
      name: 'Inner Summer',
      description: 'Peak & radiance',
    },
    autumn: {
      primary: '#C07850',
      secondary: '#CC8C68',
      accent: '#C0A890',
      background: '#E8D8C0',
      name: 'Inner Autumn',
      description: 'Nesting & grounded',
    },
  },

  // Lotus gradient colors (from logo)
  lotus: {
    lavender: '#D4B5E8',
    pink: '#E8A0B8',
    peach: '#F0C0A8',
    cream: '#F8E8D0',
    sage: '#C8D8C0',
  },

  // Functional colors
  functional: {
    success: '#6B9B7A',
    warning: '#E8A83C',
    error: '#C07850',
    info: '#8B9CAA',
  },

  // Privacy emphasis
  privacy: {
    shield: '#4A5568',
    trust: '#6B9B7A',
    secure: '#8B9CAA',
  },
} as const;

export type SeasonKey = keyof typeof colors.seasons;
