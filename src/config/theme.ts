'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  typography: {
    fontFamily: 'var(--font-lexend)',
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

export default theme;
