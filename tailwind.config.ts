import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      transparent: "transparent",
      current: "currentColor",
      primary: "#7DFFAF",
      secondary: "#081B28",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
export default config;
