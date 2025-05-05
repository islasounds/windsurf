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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        backgroundStart: "rgb(var(--background-start-rgb) / <alpha-value>)",
        backgroundEnd: "rgb(var(--background-end-rgb) / <alpha-value>)",
        header: "var(--header)",
        secondaryHeader: "var(--secondary-header)",
        background: "var(--background)",
        headerHover: "var(--header-hover)",
        headerText: "var(--header-text)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};
export default config;
