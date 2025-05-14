
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ColorTheme = 'purple' | 'blue' | 'green' | 'red';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('purple');

  useEffect(() => {
    // Get stored theme preference or default to light
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      // Default to light theme
      setTheme('light');
      applyTheme('light');
    }
    
    // Get stored color theme preference or default to purple
    const storedColorTheme = localStorage.getItem('colorTheme') as ColorTheme;
    if (storedColorTheme) {
      setColorTheme(storedColorTheme);
      applyColorTheme(storedColorTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Store the preference
    localStorage.setItem('theme', newTheme);
  };
  
  const applyColorTheme = (newColorTheme: ColorTheme) => {
    const root = window.document.documentElement;
    
    // Remove existing color theme classes
    root.classList.remove('theme-purple', 'theme-blue', 'theme-green', 'theme-red');
    
    // Add the new color theme class
    root.classList.add(`theme-${newColorTheme}`);
    
    // Store the preference
    localStorage.setItem('colorTheme', newColorTheme);
  };

  const value = {
    theme,
    colorTheme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      applyTheme(newTheme);
    },
    setColorTheme: (newColorTheme: ColorTheme) => {
      setColorTheme(newColorTheme);
      applyColorTheme(newColorTheme);
    }
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
