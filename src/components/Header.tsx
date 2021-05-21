import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

import { useChangeTheme } from '../contexts/ThemeContext';

import Icon from 'react-native-vector-icons/FontAwesome5';

export function Header() {
  const { isDark, setIsDark } = useChangeTheme();

  return (
    <View style={isDark ? styles.headerDark : styles.header}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold', fontWeight: 'bold' }]}>do</Text>
      </View>

      <View style={styles.themeContainer}>
        <Icon name="sun" size={20} color={ isDark ? "#999" : "#fff"}/>

        <Switch 
        trackColor={{ 
          false: "#999", 
          true:  '#888'
        }} 
        thumbColor={isDark ? "#BF4AD4" : '#fff'}
        value={isDark} 
        onValueChange={() => setIsDark(!isDark)} 
        
        />

        <Icon name="moon" size={20} color={ isDark ? "#fff" : "#999"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingTop: (StatusBar.currentHeight ? StatusBar.currentHeight + 10 : StatusBar.currentHeight),
    paddingBottom: 38,
    backgroundColor: '#273FAD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  headerDark: {
    paddingHorizontal: 15,
    paddingTop: (StatusBar.currentHeight ? StatusBar.currentHeight + 10 : StatusBar.currentHeight),
    paddingBottom: 38,
    backgroundColor: '#3E3E3E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    
  },
  headerTextDark: {
    fontSize: 24,
    color: '#E1E1E6',
    fontFamily: 'Poppins-Regular',
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  }
});
