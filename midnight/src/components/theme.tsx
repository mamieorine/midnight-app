import { DarkTheme, Theme } from 'react-native-paper';

export const theme: Theme = {
  ...DarkTheme,
  roundness: 50,
  fonts: {
    regular: {
      fontWeight: 'bold',
      fontFamily: 'System'
    },
    medium: {
      fontWeight: 'bold',
      fontFamily: 'System'
    },
    light: {
      fontWeight: 'bold',
      fontFamily: 'System'
    },
    thin: {
      fontWeight: 'bold',
      fontFamily: 'System'
    }
  },

  colors: {
    ...DarkTheme.colors,
    primary: '#87BCBF', // dark blue-green
    accent: '#324755',
    background: '#f2f2f2',
    onBackground: '#FFFFFF',
    dark: '#262626'
  },
};