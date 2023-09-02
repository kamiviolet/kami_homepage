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
        "foreground": "rgb(var(--foreground))",
        "background-start": "rgb(var(--background-start))",
        "background-end": "rgb(var(--background-end))",
        "foreground-dark": "rgb(var(--foreground-dark))",
        "background-start-dark": "rgb(var(--background-start-dark))",
        "background-end-dark": "rgb(var(--background-end-dark))",
        "violet": "rgb(var(--violet))",
        "information": "rgb(var(--information))",
        "highlight-light": "rgb(var(--highlight-light))",
        "highlight-dark": "rgb(var(--highlight-dark))",
        "text-dark": "rgb(var(--text-dark))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
