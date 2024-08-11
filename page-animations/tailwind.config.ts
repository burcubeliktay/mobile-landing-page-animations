import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#0381FF",
        bold: "#0B172A",
        dark: "#0B122A"
      },
      gray: {
        DEFAULT: "#666666",
        100: "#F5F5F7"
      },
      white: {
        DEFAULT: "#FFFFFF"
      }
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
