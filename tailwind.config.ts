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
          white: "#FFFFFF",
          light: "#F5F5F5",
          card: "#F8F8F8",
          border: "#E5E5E5",
          dark: "#141414",
          black: "#000000",
          text: "#111111",
          subtext: "#707072",
          teal: "#42B296",
          red: "#D11A2A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
