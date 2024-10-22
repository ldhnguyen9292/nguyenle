import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      tertiary: '#ABDFFEFF',
    },
    backgroundColor: {
      primary: { 0: '#000000', 1: '#171A1F', 2: '#111111' },
      secondary: { 0: '#ffffff', 1: '#f3f4f6', 2: '#eff0ef' },
      tertiary: { 0: '#4dbeff' },
    },
    borderColor: {
      primary: { 0: '#323232FF' },
    },
    fontFamily: {
      heading: ['var(--font-lexend)', 'sans-serif'],
      body: ['var(--font-manrope)', 'sans-serif'],
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1.25rem', // 20px
    },
    width: {
      17: '4.25rem', // 68px
      25: '6.25rem', // 100px
      33: '8.25rem', // 132px
    },
    height: {
      23.5: '5.875rem', // 94px
      25: '6.25rem', // 100px
      35: '8.75rem', // 140px
    },
  },
  plugins: [],
};

export default config;
