import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

export const ThemeSwitch: React.FC = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      style={{
        background: 'transparent',
        border: `1px solid ${theme.colors.text.secondary}`,
        borderRadius: theme.borderRadius.full,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.xs,
        cursor: 'pointer',
        color: theme.colors.text.primary,
        transition: theme.transitions.fast,
      }}
    >
      {isDark ? '🌞' : '🌙'}
      <span style={{ fontSize: theme.typography.fontSize.sm }}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
}; 