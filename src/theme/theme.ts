export const defaultTheme = {
  colors: {
    primary: '#2C3E50',
    secondary: '#3498DB',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#BDC3C7',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      accent: '#E9ECEF',
    },
    accent: {
      primary: '#3498DB',
      secondary: '#2980B9',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Inter', system-ui, -apple-system, sans-serif",
      heading: "'Inter', system-ui, -apple-system, sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Theme = typeof defaultTheme;
export type ThemeOverride = DeepPartial<Theme>;

export const darkTheme: ThemeOverride = {
  colors: {
    primary: '#ECF0F1',
    secondary: '#3498DB',
    text: {
      primary: '#ECF0F1',
      secondary: '#BDC3C7',
      light: '#7F8C8D',
    },
    background: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#2980B9',
    },
    accent: {
      primary: '#3498DB',
      secondary: '#2980B9',
    },
  },
}; 