import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060E18",
          900: "#0B192C",
          850: "#10233D",
          800: "#152C4D",
          700: "#1E3E62",
          600: "#2A5687",
        },
        gold: {
          50: "#FAF6E8",
          100: "#F3ECCB",
          200: "#E6D799",
          300: "#DAC46B",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#A8833E",
          700: "#7F6229",
          800: "#554117",
          900: "#2B210B",
        },
        ivory: {
          50: "#FFFFFF",
          100: "#FDFBF7",
          200: "#F6F2EA",
          300: "#ECE5D8",
          400: "#DFD5C2",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        urdu: ["Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Noto Sans Arabic", "serif"],
        hebrew: ["Ezra SIL", "Noto Sans Hebrew", "SBL Hebrew", "serif"],
        greek: ["SBL Greek", "Gentium Plus", "Noto Serif Greek", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
