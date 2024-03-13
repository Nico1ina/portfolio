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
        'hero-pattern':
          "url('https://media.licdn.com/dms/image/D4D03AQG40y1wkBFb1Q/profile-displayphoto-shrink_800_800/0/1677610358836?e=2147483647&v=beta&t=QfUw8q2KBRhnQwq1jduNkJ18hMCFeSBzagebX0GdkZk')",
        'nico-pattern':
          "url('https://i0.wp.com/secrettrips.com/wp-content/uploads/2022/10/Secret-trips-the-edit-Global-Galleries-Louisiana-Museum-of-Modern-Art-2018_JeremyJachym_04.jpg?fit=2000%2C1498&ssl=1')",
      },
      keyframes: {
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
