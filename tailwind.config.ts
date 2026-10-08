import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gymshark: {
          black: "#0b0b0b",
          dark: "#141414",
          surface: "#1c1c1e",
          gray: "#707072",
          lightgray: "#f4f4f5",
          red: "#d11a2a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
