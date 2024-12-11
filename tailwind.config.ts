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
        "black-green": "#3B413C",
        "olive-green": "#b7b898",
        "brat-green": "#E4F7B1",
        tarragon: {
          100: "#CCCCB7",
          200: "#C4C4AB",
          300: "#b7b898",
          400: "#B3B493",
          500: "#A2A37B",
        },
        "soft-white": "#ede8e5",
        "rich-blue": "#36558F",
        barley: "#C2C6FF",
        chamomile: "#e0c3a1",
        saffron: "#cb864f",
        grain: "#8a7971",
      },
    },
  },
  plugins: [],
};
export default config;
