import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import { ChangeThemeProvider } from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ChangeThemeProvider>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home />
    </ChangeThemeProvider>
  );
}
