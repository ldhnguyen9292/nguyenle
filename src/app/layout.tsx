import './globals.css';

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Lexend, Manrope } from 'next/font/google';

import { Container } from '@/components/Elements';
import { Footer, Header } from '@/components/Layout';
import { globalEnv } from '@/config/globalEnv';
import theme from '@/config/theme';

const lexend = Lexend({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(globalEnv.URL),
  title: 'Nguyen Le - Personal Site',
  description: 'Personal site of Nguyen Le',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="__next" className={`${lexend.variable} ${manrope.variable} bg-[#eeedf2]`}>
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ key: 'css', prepend: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container className="max-w-360 p-0 overflow-hidden border-x-2 bg-white">
                <Header />
                {children}
                <Footer />
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
