import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        //Our fall animation keyframes
        fall: {
          "0%": { transform: "translate(0%,0%) skewX(0deg)" },
          "100%": { transform: "translate(0%,100%) skewX(0deg)" },
        },
      },

      animation: {
        fall: "fall 3s ease infinite",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        "animation-delay": (value) => {
          return {
            "animation-delay": value,
          };
        },
      });
    }),
  ],
};

export default config;
