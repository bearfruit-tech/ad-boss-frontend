import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Work Sans, sans-serif',
  colors: {
    brand: [
      '#ffffff', // --global-palette9
      '#F7FAFC', // --global-palette8
      '#f0e8e5', // --global-palette7
      '#718096', // --global-palette6
      '#4A5568', // --global-palette5
      '#3f3f58', // --global-palette4
      '#1A202C', // --global-palette3
      '#b7926d', // --global-palette2
      '#e4bb90', // --global-palette1
      '#e4bb90', // Repeated to have 10 shades
    ],
  },
  primaryColor: 'brand',
  black: '#1A202C', // --global-palette3
  white: '#ffffff', // --global-palette9
};