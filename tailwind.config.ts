import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('../public/icons/source/IMG_122322.jpg')",
        'nico-pattern': "url('../public/icons/source/IMG_1223.jpg')",
      },
      keyframes: {
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fall: {
          '0%': { transform: 'translate(0%,0%) skewX(0deg)' },
          '100%': { transform: 'translate(0%,100%) skewX(0deg)' },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      animation: {
        // Existing fall animation
        fall: 'fall 3s ease infinite',
        // New typewriter and caret animations
        typewriter: 'typewriter 2s steps(11) forwards',
        caret:
          'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards',
        infiniteScroll: 'infiniteScroll 25s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            'animation-delay': value,
          }
        },
      })
    }),
  ],
}

export default config
