// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';

export const metadata = {
  title: 'AdBOSS Media Group',
  description: 'Empowering Brands',
};

const theme = createTheme({
    colors: {
    brand: [
      '#3f3f58', // --global-palette9
      '#3f3f58', // --global-palette8
      '#3f3f58', // --global-palette7
      '#3f3f58', // --global-palette6
      '#3f3f58', // --global-palette5
      '#3f3f58', // --global-palette4
      '#3f3f58', // --global-palette3
      '#3f3f58', // --global-palette2
      '#3f3f58', // --global-palette1
      '#3f3f58', // Repeated to have 10 shades
    ],
    },
    primaryColor: 'brand',
    fontFamily: 'Work Sans, sans-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}