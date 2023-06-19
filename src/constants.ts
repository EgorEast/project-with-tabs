export const COLORS = {
  primary: '#f2ca46',
  secondary: '#b12a21',

  white: '#fcfcfc',
  black: '#000000',
  gray: '#111111',
} as const;

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
} as const;

const appTheme = { COLORS, SIZES } as const;

export default appTheme;
