import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display-0": ["Share Tech Mono", "monospace"],
        "display-1": ["Nunito Sans", "sans-serif"],
        "display-2": ["Arial narrow", "sans-serif"],
      },
      colors: {
        foreground: "rgb(var(--foreground))",
        "background-start": "rgb(var(--background-start))",
        "background-end": "rgb(var(--background-end))",
        "background-mid": "rgb(var(--background-mid))",
        violet: "rgb(var(--violet))",
        information: "rgb(var(--information))",
        highlight: "rgb(var(--highlight))",
        "highlight-bg": "rgb(var(--highlight-bg))",
        text: "rgb(var(--text))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "fill-10": "repeat(auto-fill, 55px)",
        "fill-50": "repeat(auto-fill, 75px)",
        "fill-100": "repeat(auto-fill, 150px)",
        "fill-150": "repeat(auto-fill, 225px)",
        "fill-250": "repeat(auto-fill, 375px)",
      },
    },
  },
  plugins: [],
};
export default config;
