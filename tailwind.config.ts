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
        "progress-bar": "#54DCD4",
        inputBackgrounds: "#D9D9D9",
        buttonBottomBorder: "#67AB97",
        activeBackground: "#4F635D",
        inactiveInput: "#D9D9D9",
        disabled: "#9F9F9F",
      },
      screens: {
        medl: "1150px",
      },
    },
  },
  plugins: [],
};
export default config;
