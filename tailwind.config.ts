import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        tertiary: '#ABDFFEFF',
        fourth: '#4dbeff',
      },
      backgroundColor: {
        primary: { 0: '#000000', 1: '#171A1F', 2: '#111111' },
        secondary: { 0: '#ffffff', 1: '#f3f4f6', 2: '#eff0ef' },
        tertiary: { 0: '#4dbeff', 1: '#4ebeff' },
        fourth: '#202020',
      },
      backgroundImage: {
        'menu-background': 'url(/images/menu-background.webp)',
        'top-white': 'url(/images/top-white.webp)',
        'top-black': 'url(/images/top-black.webp)',
        'button-white':
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsCAYAAACHUEHxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5QUFEMEY5REFDRjExRUVBMTM3QTkwMzg5OEU1QUUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5QUFEMEZBREFDRjExRUVBMTM3QTkwMzg5OEU1QUUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDlBQUQwRjdEQUNGMTFFRUExMzdBOTAzODk4RTVBRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDlBQUQwRjhEQUNGMTFFRUExMzdBOTAzODk4RTVBRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5as6JYAAADVklEQVR42uydW4hNURjH17cxJBmhlAeRUHihqDEyJecBTRl5mERRJJeXeaNQLmlelKKUW/NgNKVpyO0BE3J5IE9DMWrGCykNI4kxzvH/7K1O05mZc9l7n5n9/f/17+ucs/dap2//WuvsddlHMpmMo6iwJeX+AgB7HkIdXAMvgmfAE3hpRpV64Ydwo4g8KytYAKoa4Qi8eiQAToWiP/AewHVOygBUJcIZeAuvQyLVD1dJzFDNRbgNz2f+E61WiRGqOQiP4ZnMe+L1RWKCairCU3gBc25CGS8GqCoQ2giVKb33YqjkEryKuTallki7QrRWRxEOMc+m1A0vkQih2ha0VhyjsiMdKF0pIh0SEVQ66HkHrmCuzeg3vB5Q3dUXXgRQLURoJVTmtPs/VKGDBah0nu8WPIV5NqUTgOpi9hsSIlQTER7Ay5hnW3eA8GaAlQkdLEDlBd3fBubZlHQmZQ2g+jXwg7C6wpOEypw69ZrngiqUFgut1T6E08yzKX2GVwCqzsEOkBKhqnX+dM0Y5tqMfgbd35OhDvJKgGopwhVCZUppePtwUBUNFqCahXATnsRcm9JBQNWSz4FSBFSTEZTYxcyzKV0AVDvzPVgKhGqs81eApphnU9IR9XUAqz/fEwrtCs8SKnPqgDcVAlVBYKG1OoCwg3k2pY/On1j+VuiJkidU9QjNLoJJa2rE6jtcA6heFnOy5AGV7v+757iJ1JJ0f2AdoLpRbAHeMFDpLuVrhMqcGkqBakiwANU05y+Bmc48m9IpQFXyFJ0MAtV4hPtwNfNsStfhjQArXWpBXg6oFLYmQmVOz52/riodRmG5usLjcD3zbErdcC2g+hFWgTKgtdJxqvPMsyl91d4JUL0Os1DJgioV/Fgfx1ybUR+8FlC1h12wF0ClE8pXCZU57YoCqn9gASrdUaNjFpXMsykdA1RNURWuLdZ+eDbzbErNgOpwlBUIWqwugmVKj+AUwOqLGqy04/MVrOiN8zdB9ERdkRfcblLJ14fgDrAnjsoUrHbmPPF66/wlMF1xVahgNTr/SbdUMnUZXg6o3sVZqYcKXyDudf4aHCoZ0uco6CICfVbVVrg37i+QPfJeFQw96D9EcExrdEk3kX6CXzn/HyLahtqlHIf+CjAAeu7fkAOBY9gAAAAASUVORK5CYII=')",
        'contact-bg': "url('/images/contact-bg.webp')",
        'education-bg': 'url(/images/education-bg.webp)',
      },
      borderColor: {
        primary: { 0: '#323232FF' },
        secondary: { 0: '#dee1e6' },
      },
      borderRadius: {
        3: '0.75rem', // 12px
        15: '3.75rem', // 60px
      },
      fontFamily: {
        heading: ['var(--font-lexend)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'h2-sm': '3rem',
        'h2-md': '3.5rem',
        'h2-lg': '4rem',
        'h3-sm': '2.5rem',
        'h3-md': '2.75rem',
        'h3-lg': '3rem',
        'h4-sm': '2rem',
        'h4-md': '2.25rem',
        'h4-lg': '2.5rem',
        'h5-sm': '1.5rem',
        'h5-md': '1.75rem',
        'h5-lg': '2rem',
        'h6-sm': '1.25rem',
        'h6-md': '1.5rem',
        'h6-lg': '1.75rem',
        'body1-sm': '0.875rem',
        'body1-md': '1rem',
        'body1-lg': '1.25rem',
        'body2-sm': '0.75rem',
        'body2-md': '0.875rem',
        'body2-lg': '1rem',
        'body3-sm': '0.625rem',
        'body3-md': '0.75rem',
        'body3-lg': '0.875rem',
      },
      fontWeight: {
        'x-bold': '800',
      },
      width: {
        17: '4.25rem', // 68px
        25: '6.25rem', // 100px
        33: '8.25rem', // 132px
        121: '30.25rem', // 484px
        360: '90rem', // 1440px
        inherit: 'inherit',
      },
      minWidth: {
        10: '2.5rem', // 40px
        30: '7.5rem', // 120px
        50: '12.5rem', // 200px
      },
      maxWidth: {
        120: '30rem', // 480px
        130: '32.5rem', //520px
        136: '34rem', // 544px
        296: '74rem', // 1184px
        360: '90rem', // 1440px
      },
      height: {
        17.5: '4.375rem', // 70px
        20.5: '5.125rem', // 82px
        23.5: '5.875rem', // 94px
        25: '6.25rem', // 100px
        31: '7.75rem', // 124px
        35: '8.75rem', // 140px
        75: '18.75rem', // 300px
        125: '31.25rem', // 500px
        137.5: '34.375rem', // 550px
        142.5: '35.625rem', // 570px
        148: '37rem', // 592px
        160: '40rem', // 640px
        '328.5': '82.125rem', // 1314px
        330: '82.5rem', // 1320px
      },
      minHeight: {
        11.25: '2.8125rem', // 45px
        97.5: '24.375rem', // 390px
        134: '33.5rem', // 536px
      },
      fill: {
        gray: '#202020',
        white: '#ffffff',
      },
      inset: {
        unset: 'unset',
        center: '50%',
      },
      translate: {
        center: '-50%',
      },
      padding: {
        64: '16rem', // 256px
        72: '18rem', // 288px
        80: '20rem', // 320px
        88: '22rem', // 352px
      },
      keyframes: {
        'left-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'right-to-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'right-to-center': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 1s ease-in-out',
        'right-to-left': 'right-to-left 1s forwards',
        'right-to-center': 'right-to-center 1s forwards',
      },
    },
  },
  plugins: [],
};

export default config;
