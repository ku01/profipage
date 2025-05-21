import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { defaultTheme, darkTheme } from './theme';
import type { Theme, ThemeOverride } from './theme';
import './theme.css';

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeOverride) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  initialTheme?: ThemeOverride;
};

const applyThemeToDOM = (theme: Theme, isDark: boolean) => {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  
  // Apply CSS variables
  const root = document.documentElement;
  
  // Colors
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  
  // Text Colors
  root.style.setProperty('--text-primary', theme.colors.text.primary);
  root.style.setProperty('--text-secondary', theme.colors.text.secondary);
  root.style.setProperty('--text-light', theme.colors.text.light);
  
  // Background Colors
  root.style.setProperty('--background-primary', theme.colors.background.primary);
  root.style.setProperty('--background-secondary', theme.colors.background.secondary);
  root.style.setProperty('--background-accent', theme.colors.background.accent);
  
  // Accent Colors
  root.style.setProperty('--accent-primary', theme.colors.accent.primary);
  root.style.setProperty('--accent-secondary', theme.colors.accent.secondary);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const baseTheme = isDark ? { ...defaultTheme, ...darkTheme as Theme } : defaultTheme;
    return initialTheme ? { ...baseTheme, ...initialTheme as Theme } : baseTheme;
  });

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const setTheme = useCallback((newTheme: ThemeOverride) => {
    setCurrentTheme((prev) => ({ ...prev, ...newTheme as Theme }));
  }, []);

  useEffect(() => {
    const baseTheme = isDark ? { ...defaultTheme, ...darkTheme as Theme } : defaultTheme;
    const newTheme = { ...baseTheme, ...currentTheme };
    setCurrentTheme(newTheme);
    applyThemeToDOM(newTheme, isDark);
  }, [isDark, currentTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 