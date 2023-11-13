import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "560px",
      md: "765px",
      lg: "985px",
      xl: "1440px",
    },
    colors: {
      primaryLight: "#2E7AFF",
      primaryDefault: "#1D63FF",
      primaryDark: "#0043D9",

      auxiliaryGreen: "#35D9A8",
      auxiliaryYellow: "#FFD76F",

      neutral001: "#F2F5FC",
      neutral002: "#CBD6E2",

      neutral050: "#757385",
      neutral100: "#4C4A5E",
      neutral200: "#413E52",
      neutral300: "#353345",
      neutral400: "#2A2739",
      neutral500: "#1E1C2D",
      neutral600: "#131020",
      neutral700: "#0D0B1A",
      neutral800: "#070514",
    },
    extend: {},
    plugins: [],
  },
};
export default config;
