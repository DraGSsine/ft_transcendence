import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.jpeg')",
      },
      colors: {
        main: "#A51D20",
        secondary: "#F56723",
      },
      keyframes: {
        "border-spin": {
          '100%': { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "border-spin": "border-spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
