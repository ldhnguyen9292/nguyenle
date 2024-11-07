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
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

export default theme;
