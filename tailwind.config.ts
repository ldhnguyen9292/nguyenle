import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#000',
        background: '#fff',
        primary: '#000',
        secondary: '#000',
        accent: '#000',
        muted: '#000',
        gray: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#252f3f',
          900: '#161e2e',
        },
      },
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
