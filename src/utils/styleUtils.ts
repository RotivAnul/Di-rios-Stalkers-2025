import { theme } from '../config/theme';

export const getResponsiveValue = (
  value: { mobile: string; tablet: string; desktop: string },
  currentBreakpoint: 'mobile' | 'tablet' | 'desktop'
) => {
  return value[currentBreakpoint];
};

export const getThemeColor = (path: string) => {
  return path.split('.').reduce((obj, key) => obj[key], theme.colors);
};

export const getCSSVariable = (name: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`);
};