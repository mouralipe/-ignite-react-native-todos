import React, { createContext, ReactNode, useContext, useState, SetStateAction, Dispatch } from 'react';

interface ChangeThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ChangeThemeProvider({ children }: ChangeThemeProviderProps) {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useChangeTheme = () => useContext(ThemeContext);