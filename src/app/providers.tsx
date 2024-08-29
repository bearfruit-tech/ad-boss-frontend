'use client';

import { MantineProvider } from '@mantine/core';
import { theme } from '../config/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}