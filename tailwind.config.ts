import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // COLORI PER ILLUME
        'illume-gold': '#D4AF37',
        'illume-black': '#0A0A0A',
        // COLORI PER FISIOTERAPISTA
        'clinico-blue': '#022166',
        'clinico-light': '#55B4FF',
      },
    },
  },
  plugins: [],
};
export default config;